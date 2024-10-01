import { BookingManager } from '../src/bookingManager/bookingManager.js'
import { MockMongoStorage } from '../__mocks__/mongoStorage.js'
import { jest } from '@jest/globals'

jest.mock('../src/storage/mongoStorage.js')
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

  /**
   * Creates new product.
   *
   * @param {string} name -
   * @param {string} description -
   * @param {number} price -
   * @returns {object} - new product.
   */
  const createNewProduct = async (name = 'Product A', description = 'testing', price = 100) => {
    return await bookingManager.addProduct({ name, description, price })
  }

  /**
   * Creates new customer.
   *
   * @param {string} name -
   * @param {string} email -
   * @returns {object} - customer
   */
  const createNewCustomer = async (name = 'Test Customer', email = 'customer@example.com') => {
    return await bookingManager.addCustomer({ name, email })
  }

  test('should add a new product', async () => {
    const newProduct = await createNewProduct()

    expect(newProduct).toBeDefined() // Test that the product is defined
    expect(newProduct.name).toBe('Product A') // Check that the correct product was added
  })

  test('should get all products', async () => {
    const newProduct = await createNewProduct()
    await bookingManager.addProduct(newProduct)
    const products = await bookingManager.getAllProducts()

    expect(products.length).toBeGreaterThanOrEqual(1) // Test that there is one product in the product list
  })

  test('should remove a product', async () => {
    const newProduct = await createNewProduct()

    await bookingManager.removeProduct(newProduct.id)

    const products = await bookingManager.getAllProducts()

    expect(products.find(product => product.id === newProduct.id)).toBeUndefined()
  })

  test('should throw an error when adding a booking with invalid productId', async () => {
    await expect(bookingManager.addBooking('invalidId', 'customerId', '2024-10-10'))
      .rejects
      .toThrow('Product not found.')
  })

  test('should add a new booking', async () => {
    const newProduct = await createNewProduct()

    const newCustomer = await createNewCustomer()

    const date = Date()

    const booking = await bookingManager.addBooking(newProduct.id, newCustomer.id, date)

    expect(booking).toBeDefined() // Test that the product is defined
    expect(booking.product.name).toBe('Product A') // Check that the correct product was added
  })

  test('should create new customer', async () => {
    const newCustomer = await createNewCustomer()

    expect(newCustomer).toBeDefined()
    expect(newCustomer.name).toBe('Test Customer')
  })

  test('should get all bookings', async () => {
    const product = await createNewProduct()
    const customer = await createNewCustomer()
    const date = new Date()

    const booking = await bookingManager.addBooking(product.id, customer.id, date)
    const bookings = await bookingManager.getAllBookings()

    expect(booking).toBeDefined()
    expect(bookings.length).toBeGreaterThanOrEqual(1) // Check that the correct product was added
  })

  test('should cancel a booking', async () => {
    const newProduct = await createNewProduct()

    const newCustomer = await createNewCustomer()

    const date = Date()

    const booking = await bookingManager.addBooking(newProduct.id, newCustomer.id, date)

    const canceledBooking = await bookingManager.cancelBooking(booking.id)

    expect(canceledBooking).toBe(undefined)
  })

  test('should get booking by id', async () => {
    const newProduct = await createNewProduct()
    const newCustomer = await createNewCustomer()
    const date = new Date()
    const booking = await bookingManager.addBooking(newProduct.id, newCustomer.id, date)

    const bookingById = await bookingManager.getBookingById(booking.id)

    expect(bookingById.id).toBe(booking.id)
  })
})
