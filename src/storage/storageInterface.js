/**
 * @file StorageInterface class
 * @module src/storage/StorageInterface
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

export default class StorageInterface {
  async saveBooking(booking) {
    throw new Error('Method not implemented')
  }

  async saveProduct(product) {
    throw new Error('Method not implemented')
  }

  async saveCustomer(customer) {
    throw new Error('Method not implemented')
  }

  async getBookings() {
    throw new Error('Method not implemented')
  }

  async getBookingById(bookingId) {
    throw new Error('Method not implemented')
  }

  async getProducts() {
    throw new Error('Method not implemented')
  }

  async getProductById(productId) {
    throw new Error('Method not implemented')
  }

  async getCustomers() {
    throw new Error('Method not implemented')
  }

  async getCustomerById(customerId) {
    throw new Error('Method not implemented')
  }

  async deleteBooking(bookingId) {
    throw new Error('Method not implemented')
  }

  async deleteProduct(productId) {
    throw new Error('Method not implemented')
  }
}
