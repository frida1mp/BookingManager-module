/**
 * @file BookingManager class
 * @module src/BookingManager
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

import { Product } from './product.js'
import { Booking } from './booking.js'
import { Customer } from './customer.js'

export class BookingManager {
  constructor(storage) {
    this.storage = storage
    this.loadData()
  }

  async loadData() {
    try {
      this.bookings = await this.storage.getAllBookings() || []
      this.products = await this.storage.getAllProducts() || []
      this.customers = await this.storage.getAllCustomers() || []
    } catch (error) {
      console.log('No existing data found.')
      this.bookings = []
      this.products = []
      this.customers = []
    }
  }

  async addBooking(productId, customerId, date) {
    try {
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
    } catch (error) {
      console.error('Error adding booking:', error.message)
      throw new Error(error.message)
    }
  }

  async cancelBooking(bookingId) {
    try {
      const currentBooking = this.bookings.findIndex(b => b.id === bookingId)

      if (currentBooking === -1) {
        throw new Error(`Booking with id ${bookingId} not found.`)
      }

      await this.storage.removeBooking(bookingId)
      this.bookings.splice(currentBooking, 1)

      console.log(`Booking with id ${bookingId} has been successfully removed.`)
    } catch (error) {
      console.error('Error cancelling booking:', error.message)
      throw new Error('Failed to cancel the booking.')
    }
  }

  getAllBookings() {
    try {
      return this.bookings
    } catch (error) {
      throw new Error('No bookings found')
    }
  }

  getBookingById(bookingId) {
    try {
      const booking = this.bookings.find(b => b.id === bookingId)

      if (!booking) {
        throw new Error(`Booking with id ${bookingId} not found.`)
      }

      return booking
    } catch (error) {
      console.error('Error retrieving booking:', error.message)
      throw new Error('Failed to retrieve booking.')
    }
  }

  async addProduct(product) {
    try {
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

  async removeProduct(productId) {
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

  getAllProducts() {
    try {
      return this.products
    } catch (error) {
      console.error('Error retrieving products:', error.message)
      throw new Error(error.message)
    }
  }

  async addCustomer(customer) {
    try {
      if (!customer.name || !customer.email) {
        throw new Error('Invalid customer data. Name and email are required.')
      }

      const newCustomer = new Customer(customer.name, customer.email)

      await this.storage.saveCustomer(newCustomer)
      this.customers.push(newCustomer)

      return newCustomer
    } catch (error) {
      console.error('Error adding customer:', error.message)
      throw new Error('Failed to add new customer.')
    }
  }
}
