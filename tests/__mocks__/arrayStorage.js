/**
 * @file MockArrayStorage class
 * @module test/MockArrayStorage
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */import { jest } from '@jest/globals'

export class MockArrayStorage {
  constructor() {
    this.bookings = []
    this.products = []
    this.customers = []
  }

  saveBooking = jest.fn(async(booking) => {
    this.bookings.push(booking)
  })

  saveProduct = jest.fn(async(product) => {
    this.products.push(product)
  })

  saveCustomer = jest.fn(async(customer) => {
    this.customers.push(customer)

    return { insertedId: customer.id }
  })

  getAllBookings = jest.fn(async() => this.bookings)
  getAllProducts = jest.fn(async() => this.products)
  getAllCustomers = jest.fn(async() => this.customers)

  removeBooking = jest.fn(async(bookingId) => {
    const index = this.bookings.findIndex(b => b.id === bookingId)
    if (index !== -1) {
      this.bookings.splice(index, 1)

      return { deletedCount: 1 }
    }

    return { deletedCount: 0 } // No booking found
  })

  removeProduct = jest.fn(async(productId) => {
    const index = this.products.findIndex(p => p.id === productId)
    if (index !== -1) {
      this.products.splice(index, 1)

      return { deletedCount: 1 }
    }

    return { deletedCount: 0 } // No product found
  })

  connect = jest.fn()
}
