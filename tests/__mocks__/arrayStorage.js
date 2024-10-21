// __mocks__/mongoStorage.js
import { jest } from '@jest/globals'

/**
 * Represents a mockArrayStorage class.
 */
export class MockArrayStorage {
  /**
   * Initializes mock storage with empty arrays for bookings, products, and customers.
   */
  constructor () {
    this.bookings = []
    this.products = []
    this.customers = []
  }

  saveBooking = jest.fn(async (booking) => {
    this.bookings.push(booking)
  })

  saveProduct = jest.fn(async (product) => {
    mockArrayStorage.this.products.push(product)
  })

  saveCustomer = jest.fn(async (customer) => {
    mockArrayStorage.this.customers.push(customer)
    return { insertedId: customer.id } // Simulate MongoDB's response
  })

  getAllBookings = jest.fn(async () => mockArrayStorage.this.bookings) // Simulate fetching all this.bookings
  getAllProducts = jest.fn(async () => mockArrayStorage.this.products) // Simulate fetching all this.products
  getAllCustomers = jest.fn(async () => mockArrayStorage.this.customers) // Simulate fetching all this.customers

  removeBooking = jest.fn(async (bookingId) => {
    const index = mockArrayStorage.this.bookings.findIndex(b => b.id === bookingId)
    if (index !== -1) {
      mockArrayStorage.this.bookings.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No booking found
  })

  removeProduct = jest.fn(async (productId) => {
    const index = mockArrayStorage.this.products.findIndex(p => p.id === productId)
    if (index !== -1) {
      mockArrayStorage.this.products.splice(index, 1)
      return { deletedCount: 1 } // Simulate deletion
    }
    return { deletedCount: 0 } // No product found
  })

  connect = jest.fn()
}
