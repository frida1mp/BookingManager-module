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
    try {
      // Find the product and customer by their IDs
      const product = this.products.find(p => p.id === productId)
      const customer = this.customers.find(c => c.id === customerId)

      // Check if the product exists
      if (!product) {
        throw new Error('Product not found.')
      }

      // Check if the customer exists
      if (!customer) {
        throw new Error('Customer not found.')
      }

      // Create a new booking instance
      const booking = new Booking(product, customer, date)

      // Save the booking to storage and add it to the bookings array
      await this.storage.saveBooking(booking)
      this.bookings.push(booking)

      // Return the created booking
      return booking
    } catch (error) {
      // Log the error and rethrow it
      console.error('Error adding booking:', error.message)
      throw new Error(error.message)
    }
  }

  /**
   * Removes a booking from the list of bookings.
   *
   * @param {string} bookingId -
   */
  async cancelBooking(bookingId) {
    try {
      // Find the index of the booking
      const currentBooking = this.bookings.findIndex(b => b.id === bookingId)

      // Check if the booking exists
      if (currentBooking === -1) {
        throw new Error(`Booking with id ${bookingId} not found.`)
      }

      // Remove the booking from storage
      await this.storage.removeBooking(bookingId)

      // Remove the booking from the bookings array
      this.bookings.splice(currentBooking, 1)

      console.log(`Booking with id ${bookingId} has been successfully removed.`)
    } catch (error) {
      // Log and rethrow any error that occurs
      console.error('Error cancelling booking:', error.message)
      throw new Error('Failed to cancel the booking.')
    }
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
    try {
      const booking = this.bookings.find(b => b.id === bookingId)

      // Check if the booking was found
      if (!booking) {
        throw new Error(`Booking with id ${bookingId} not found.`)
      }

      return booking
    } catch (error) {
      // Handle any errors that occurred during the process
      console.error('Error retrieving booking:', error.message)
      throw new Error('Failed to retrieve booking.')
    }
  }

  /**
   * Adds a new product.
   *
   * @param {object} product - Given name of the product.
   * @returns {object} - new product added.
   */
  async addProduct(product) {
    try {
      // Validate product data
      if (!product.name || !product.description || !product.price) {
        throw new Error('Invalid product data. Name, description, and price are required.')
      }
      const newProduct = new Product(product.name, product.description, product.price)

      await this.storage.saveProduct(newProduct)

      this.products.push(newProduct)
      return newProduct
    } catch (error) {
      console.error('Product could not be added.', error)
    }
  }

  /**
   * Remove a specific product.
   *
   * @param {string} productId - The id of the product to be removed.
   */
  async removeProduct (productId) {
    try {
      const indexOfProduct = this.products.findIndex(p => p.id === productId)

      if (indexOfProduct === -1) {
        throw new Error('Product not found')
      }
      await this.storage.removeProduct(productId)
      this.products.splice(indexOfProduct, 2)

      console.log('Product', productId, 'has been removed successfully')
    } catch {

    }
  }

  /**
   * Lists all the products.
   *
   * @returns {Array} - list of all products.
   */
  getAllProducts() {
    try {
      return this.products
    } catch (error) {
      console.error('Error retrieving products:', error.message)
      throw new Error(error.message)
    }
  }

  /**
   * Adds a new customer.
   *
   * @param {object} customer - Given name of the customer.
   * @returns {object} - new customer added.
   */
  async addCustomer(customer) {
    try {
      // Validate that customer has a valid name and email
      if (!customer.name || !customer.email) {
        throw new Error('Invalid customer data. Name and email are required.')
      }

      const newCustomer = new Customer(customer.name, customer.email)

      // Save the new customer using the storage interface
      await this.storage.saveCustomer(newCustomer)

      // Add the new customer to the customers array
      this.customers.push(newCustomer)

      return newCustomer
    } catch (error) {
      console.error('Error adding customer:', error.message)
      throw new Error('Failed to add new customer.')
    }
  }
}
