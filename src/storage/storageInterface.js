// storageInterface.js
/**
 *
 */
export default class StorageInterface {
  /**
   * Saves the booking.
   *
   * @param {object} booking -
   */
  async saveBooking (booking) {
    throw new Error('Method not implemented')
  }

  /**
   * Saves the product.
   *
   * @param {object} product -
   */
  async saveProduct (product) {
    throw new Error('Method not implemented')
  }

  /**
   * Save the customer.
   *
   * @param {object} customer -
   */
  async saveCustomer (customer) {
    throw new Error('Method not implemented')
  }

  /**
   * Lists the bookings.
   */
  async getBookings () {
    throw new Error('Method not implemented')
  }

  /**
   * Shows a booking by id.
   *
   * @param {string} bookingId -
   */
  async getBookingById (bookingId) {
    throw new Error('Method not implemented')
  }

  /**
   * Lists products.
   */
  async getProducts () {
    throw new Error('Method not implemented')
  }

  /**
   * Shows a specific product.
   *
   * @param {string} productId -
   */
  async getProductById(productId) {
    throw new Error('Method not implemented')
  }

  /**
   * Lists customers.
   */
  async getCustomers () {
    throw new Error('Method not implemented')
  }

  /**
   * Shows a specific customer.
   *
   * @param {string} customerId -
   */
  async getCustomerById(customerId) {
    throw new Error('Method not implemented')
  }

  /**
   * Deletes a booking.
   *
   * @param {string} bookingId -
   */
  async deleteBooking(bookingId) {
    throw new Error('Method not implemented')
  }

  /**
   * Delets a product.
   *
   * @param {string} productId -
   */
  async deleteProduct(productId) {
    throw new Error('Method not implemented')
  }
}
