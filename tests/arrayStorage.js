import StorageInterface from '../src/storage/storageInterface'

/**
 * Represents a ArrayStorage class.
 */
export class ArrayStorage extends StorageInterface {
  /**
   * Creates a new Mongo Storage class.
   *
   */
  constructor () {
    super()
    this.bookingsCollection = []
    this.productsCollection = []
    this.customersCollection = []
  }

  /**
   * Saves the booking to DB.
   *
   * @param {object} booking -
   * @returns {Promise} -
   */
  async saveBooking(booking) {
    this.bookingsCollection.push(booking)
    return Promise.resolve(booking)
  }

  /**
   * Saves the product.
   *
   * @param {object} product -
   * @returns {Promise}.
   */
  async saveProduct(product) {
    this.productsCollection.push(product)
    return Promise.resolve(product)
  }

  /**
   * Save the customer to DB.
   *
   * @param {object} customer .
   * @returns {Promise}-
   */
  async saveCustomer(customer) {
    this.customersCollection.push(customer)
    return Promise.resolve(customer)
  }

  /**
   * Retrievs all bokkings from DB.
   *
   * @returns {Array}-
   */
  async getAllBookings() {
    return Promise.resolve(this.bookingsCollection)
  }

  /**
   * Retrievs all products from DB.
   *
   * @returns {Array}-
   */
  async getAllProducts() {
    return Promise.resolve(this.productsCollection)
  }

  /**
   * Retrievs all customers from DB.
   *
   * @returns {Array}-
   */
  async getAllCustomers() {
    return Promise.resolve(this.customersCollection)
  }

  /**
   * Removes a booking from DB.
   *
   * @param {string} bookingId - the id of the booking to remove.
   * @returns {Promise}-
   */
  async removeBooking (bookingId) {
    const index = this.bookingsCollection.findIndex(b => b.id === bookingId)
    if (index !== -1) {
      this.bookingsCollection.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No booking found  }
  }

  /**
   * Removes a product from DB.
   *
   * @param {string} productId - the id of the product to remove.
   * @returns {Promise}-
   */
  async removeProduct (productId) {
    const index = this.productsCollection.findIndex(p => p.id === productId)
    if (index !== -1) {
      this.productsCollection.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No booking found
  }
}
