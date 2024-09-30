/**
 * @file BookingManager class
 * @module src/BookingManager
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

import { Product } from './product.js'
import { Booking } from './booking.js'
import { Customer } from './customer.js'

/**
 * Represents a BookingManager class.
 */
export class BookingManager {
  /**
   * Create a new Booking Manager instance.
   *
   * @param {*} storage -
   */
  constructor(storage) {
    this.storage = storage
    this.loadData()
  }

  /**
   * Loads data from a JSON file if it exist.
   */
  async loadData() {
    try {
      this.bookings = await this.storage.getAllBookings()
      this.products = await this.storage.getAllProducts()
      this.customers = await this.storage.getAllCustomers()
    } catch (error) {
      console.log('No existing data found.')
    }
  }

  /**
   * Adds a booking to list of bookings.
   *
   * @param {string} productId -
   * @param {string} customerId -
   * @param {Date} date -
   * @returns {object} booking
   */
  async addBooking(productId, customerId, date) {
    const product = this.products.find(p => p.id === productId)
    const customer = this.customers.find(c => c.id === customerId)

    if (!product) {
      throw new Error('Product not found.')
    }

    if (!customer) {
      throw new Error('Customer not found.')
    }

    const booking = new Booking(product, customer, date)

    await this.storage.saveBooking(booking)
    this.bookings.push(booking)
    return booking
  }

  /**
   * Removes a booking from the list of bookings.
   * @param bookingId
   */
  async cancelBooking(bookingId) {
    console.log('cancel', this.bookings)
    const currentBooking = this.bookings.findIndex(b => b.id === bookingId)
    if (currentBooking === -1) {
      throw new Error('Booking not found')
    }
    await this.storage.removeBooking(bookingId)

    this.bookings.splice(currentBooking, 1)

    console.log('canceled???', this.bookings)
  }

  /**
   * Gets all the bookings.
   *
   * @returns {object}
   */
  getAllBookings() {
    try {
      return this.bookings
    } catch (error) {
      throw new Error('No bookings founde')
    }
  }

  /**
   * Gets a specific booking by id.
   *
   * @param {string} bookingId - The id of the booking.
   * @returns {object} - Requested booking.
   */
  getBookingById(bookingId) {
    return this.bookings.find(b => b.id === bookingId)
  }

  /**
   * Adds a new product.
   *
   * @param {object} product - Given name of the product.
   * @returns {object} - new product added.
   */
  async addProduct(product) {
    console.log('pr', product)
    const newProduct = new Product(product.name, product.description, product.price)

    await this.storage.saveProduct(newProduct)

    this.products.push(newProduct)
    console.log('product,', newProduct)
    return newProduct
  }

  /**
   * Remove a specific product.
   *
   * @param {string} productId - The id of the product to be removed.
   */
  async removeProduct(productId) {
    const indexOfProduct = this.products.findIndex(p => p.id === productId)

    if (indexOfProduct === -1) {
      throw new Error('Product not found')
    }
    await this.storage.removeProduct(productId)
    this.products.splice(indexOfProduct, 2)
  }

  /**
   * Lists all the products.
   *
   * @returns {object} - list of all products.
   */
  getAllProducts () {
    return this.products
  }

  /**
   * Adds a new customer.
   */

  /**
   * Adds a new product.
   *
   * @param {object} customer - Given name of the product.
   * @returns {object} - new product added.
   */
  async addCustomer(customer) {
    const newCustomer = new Customer(customer.name, customer.email)

    await this.storage.saveCustomer(newCustomer)

    this.customers.push(newCustomer)

    return newCustomer
  }
}
