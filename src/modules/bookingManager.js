/**
 * @file BookingManager class
 * @module src/BookingManager
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

import Product from './product.js'
import Booking from './booking.js'
import Customer from './customer.js'
import fs from 'fs'

/**
 * Represents a BookingManager class.
 */
export class BookingManager {
  /**
   * Constructor.
   */
  constructor() {
    this.products = []
    this.bookings = []
    this.customers = []
    this.loadData()
  }

  /**
   * Loads data from a JSON file if it exist.
   */
  loadData() {
    try {
      const data = fs.readFileSync('bookings.json')
      const parsedData = JSON.parse(data)
      this.bookings = parsedData.bookings
      this.products = parsedData.products
      this.customers = parsedData.customers
    } catch (error) {
      console.log('No existing data found.')
    }
  }

  /**
   * Save data in memory (no persistence).
   *
   */
  saveData() {
    const newData = {
      bookings: this.bookings,
      products: this.products,
      customers: this.customers
    }
    fs.writeFileSync('bookings.json', JSON.stringify(newData, null, 2))
  }
  
  /**
   * Adds a booking to list of bookings.
   *
   * @param productId
   * @param customerId
   * @param date
   * @returns {object} booking
   */
  addBooking(productId, customerId, date) {
    const product = this.products.find(p => p.id === productId)
    const customer = this.customers.find(c => c.id === customerId)

    if (!product) {
      throw new Error('Product not found.')
    }

    if (!customer) {
      throw new Error('Customer not found.')
    }

    const booking = new Booking(product, customer, date)
    this.bookings.push(booking)
    this.saveData()

    return booking
  }

  /**
   * Removes a booking from the list of bookings.
   * @param bookingId
   */
  cancelBooking(bookingId) {
    const currentBooking = this.bookings.findIndex(b => b.id === bookingId)

    if (currentBooking === -1) {
      throw new Error('Booking not found')
    }

    this.bookings.splice(currentBooking, 1)
    this.saveData()
  }
}
