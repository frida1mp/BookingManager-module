// __mocks__/mongoStorage.js
import { MongoStorage } from '../src/storage/mongoStorage.js'
import { jest } from '@jest/globals'

const mockMongoStorage = {
  bookings: [],
  products: [],
  customers: [],

  saveBooking: jest.fn(async (booking) => {
    mockMongoStorage.bookings.push(booking)
  }),

  saveProduct: jest.fn(async (product) => {
    mockMongoStorage.products.push(product)
  }),

  saveCustomer: jest.fn(async (customer) => {
    mockMongoStorage.customers.push(customer)
    return { insertedId: customer.id } // Simulate MongoDB's response
  }),

  getAllBookings: jest.fn(async () => mockMongoStorage.bookings), // Simulate fetching all bookings
  getAllProducts: jest.fn(async () => mockMongoStorage.products), // Simulate fetching all products
  getAllCustomers: jest.fn(async () => mockMongoStorage.customers), // Simulate fetching all customers

  removeBooking: jest.fn(async (bookingId) => {
    const index = mockMongoStorage.bookings.findIndex(b => b.id === bookingId)
    if (index !== -1) {
      mockMongoStorage.bookings.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No booking found
  }),

  removeProduct: jest.fn(async (productId) => {
    const index = mockMongoStorage.products.findIndex(p => p.id === productId)
    if (index !== -1) {
      mockMongoStorage.products.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No product found
  }),

  connect: jest.fn(),
}

export class MockMongoStorage extends MongoStorage {
  constructor(uri, databaseName) {
    super(uri, databaseName)
    return mockMongoStorage // Return the mock implementation
  }
}
