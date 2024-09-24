/**
 * @file Booking class.
 * @module src/Booking
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

import { Customer } from './customer.js'
import { Product } from './product.js'

/**
 * Represents a Booking made by customer.
 * 
 */
export class Booking {
  /**
   * Constructor to create new booking.
   *
   * @param {Product} product - The product object to be booked.
   * @param {Customer} customer - The customer making the booking.
   * @param {Date} date - The date of the booking.
   */
  constructor(product, customer, date) {
    // this.id = //generate random id Logic
    this.product = product
    this.customer = customer
    this.date = date
    this.id = this.generateUniqueId()
    this.canceled = false
  }

  /**
   * Generates a unique ID for each customer using the current timestamp and a random number.
   *
   * @returns {string} - A unique customer ID.
   */
  generateUniqueId() {
    return 'cust-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 8);
  }

  /**
   * Cancels the booking.
   */
  cancel() {
    this.cancelled = true
  }

  /**
   * Checks if the booking is cancelled.
   *
   * @returns {boolean}
   */
  isCancelled() {
    return this.cancelled
  }
}