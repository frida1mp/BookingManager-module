import { BookingManager } from './src/bookingManager/bookingManager.js'
import { MockMongoStorage } from './__mocks__/mongoStorage.js'
import { jest } from '@jest/globals'

jest.mock('./src/storage/mongoStorage.js')
describe('BookingManager', () => {
  let bookingManager
  let mongoStorageMock

  beforeEach(() => {
    mongoStorageMock = new MockMongoStorage('mongodb://localhost:27017', 'testDB')
    bookingManager = new BookingManager(mongoStorageMock)
    // Reset the mock storage before each test
    mongoStorageMock.bookings = []
    mongoStorageMock.products = []
    mongoStorageMock.customers = []
  })

  test('should add a new product', async () => {
    const newProduct = {
      name: 'Room A',
      desciption: 'Deluxe room',
      price: 100
    }
    const product = await bookingManager.addProduct(newProduct)

    expect(product).toBeDefined() // Test that the product is defined
    expect(product.name).toBe('Room A') // Check that the correct product was added
  })

  test('should get all products', async () => {
    const newProduct = {
      name: 'Room A',
      desciption: 'Deluxe room',
      price: 100
    }
    const product = await bookingManager.addProduct(newProduct)
    const products = await bookingManager.getAllProducts()

    console.log('test2', products)

    expect(products.length).toBeGreaterThanOrEqual(1) // Test that there is one product in the product list
  })

  test('should throw an error when adding a booking with invalid productId', async () => {
    await expect(bookingManager.addBooking('invalidId', 'customerId', '2024-10-10'))
      .rejects
      .toThrow('Product not found.')
  })
})
