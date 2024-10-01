import { MongoClient } from 'mongodb'
import StorageInterface from '../src/storage/storageInterface'

/**
 * Represents a MongoStorage class.
 */
export class MongoStorage extends StorageInterface {
  /**
   * Creates a new Mongo Storage class.
   *
   * @param {*} uri -
   * @param {*} dataBaseName -
   */
  constructor (uri, dataBaseName) {
    super()
    this.client = new MongoClient(uri)
    this.dbName = dataBaseName
    this.connect()
  }

  /**
   * Establish conenction to dataBase.
   */
  async connect () {
    await this.client.connect()
    this.db = this.client.db(this.dbName)
    this.bookingsCollection = this.db.collection('bookings')
    this.productsCollection = this.db.collection('products')
    this.customersCollection = this.db.collection('customers')
  }

  /**
   * Saves the booking to DB.
   *
   * @param {object} booking -
   * @returns {Promise} -
   */
  async saveBooking (booking) {
    return await this.bookingsCollection.insertOne(booking)
  }

  /**
   * Saves the product.
   *
   * @param {object} product -
   * @returns {Promise}.
   */
  async saveProduct (product) {
    return await this.productsCollection.insertOne(product)
  }

  /**
   * Save the customer to DB.
   *
   * @param {object} customer .
   * @returns {Promise}-
   */
  async saveCustomer (customer) {
    return await this.customersCollection.insertOne(customer)
  }

  /**
   * Retrievs all bokkings from DB.
   *
   * @returns {Array}-
   */
  async getAllBookings () {
    return await this.bookingsCollection.find({}).toArray()
  }

  /**
   * Retrievs all products from DB.
   *
   * @returns {Array}-
   */
  async getAllProducts () {
    return await this.productsCollection.find({}).toArray()
  }

  /**
   * Retrievs all customers from DB.
   *
   * @returns {Array}-
   */
  async getAllCustomers () {
    return await this.customersCollection.find({}).toArray()
  }

  /**
   * Removes a booking from DB.
   *
   * @param {string} bookingId - the id of the booking to remove.
   * @returns {Promise}-
   */
  async removeBooking (bookingId) {
    return await this.bookingsCollection.deleteOne({ id: bookingId })
  }

  /**
   * Removes a product from DB.
   *
   * @param {string} productId - the id of the product to remove.
   * @returns {Promise}-
   */
  async removeProduct (productId) {
    return await this.productsCollection.deleteOne({ id: productId })
  }
}
