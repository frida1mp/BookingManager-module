/**
 * @file ArrayStorage class
 * @module test/ArrayStorage
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

import StorageInterface from '../src/storage/storageInterface'

export class ArrayStorage extends StorageInterface {
  constructor() {
    super()
    this.bookingsCollection = []
    this.productsCollection = []
    this.customersCollection = []
  }

  async saveBooking(booking) {
    this.bookingsCollection.push(booking)
    return Promise.resolve(booking)
  }

  async saveProduct(product) {
    this.productsCollection.push(product)
    return Promise.resolve(product)
  }

  async saveCustomer(customer) {
    this.customersCollection.push(customer)
    return Promise.resolve(customer)
  }

  async getAllBookings() {
    return Promise.resolve(this.bookingsCollection)
  }

  async getAllProducts() {
    return Promise.resolve(this.productsCollection)
  }

  async getAllCustomers() {
    return Promise.resolve(this.customersCollection)
  }

  async removeBooking(bookingId) {
    const index = this.bookingsCollection.findIndex(b => b.id === bookingId)
    if (index !== -1) {
      this.bookingsCollection.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No booking found
  }

  async removeProduct(productId) {
    const index = this.productsCollection.findIndex(p => p.id === productId)
    if (index !== -1) {
      this.productsCollection.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No booking found
  }
}
