import { MongoClient } from 'mongodb'
import { StorageInterface } from './storageInterface.js'

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
   *
   */
  async connect () {
    await this.client.connect()
    this.db = this.client.db(this.dbName)
    this.bookingsCollection = this.db.collection('bookings')
    this.productsCollection = this.db.collection('products')
    this.customersCollection = this.db.collection('customers')
  }

  /**
   *
   */
  async saveBooking (booking) {
    return await this.bookingsCollection.insertOne(booking)
  }

  /**
   *
   */
  async saveProduct (product) {
    return await this.productsCollection.insertOne(product)
  }

  /**
   *
   */
  async saveCustomer (customer) {
    return await this.customersCollection.insertOne(customer)
  }

  /**
   *
   */
  async getAllBookings () {
    return await this.bookingsCollection.find({}).toArray()
  }

  /**
   *
   */
  async getAllProducts () {
    return await this.productsCollection.find({}).toArray()
  }

  /**
   *
   */
  async getAllCustomers () {
    return await this.customersCollection.find({}).toArray()
  }

  /**
   *
   */
  async removeBooking (bookingId) {
    return await this.bookingsCollection.deleteOne({ id: bookingId })
  }

  /**
   *
   */
  async removeProduct (productId) {
    return await this.productsCollection.deleteOne({ id: productId })
  }
}
