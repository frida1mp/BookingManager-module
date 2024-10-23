/**
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */
import { BookingManager } from '../src/bookingManager/bookingManager.js'
import { ArrayStorage } from './arrayStorage.js'
import { jest } from '@jest/globals'

jest.mock('./__mocks__/arrayStorage.js')
describe('BookingManager', () => {
  let bookingManager
  let arrayStorage

  beforeEach(() => {
    arrayStorage = new ArrayStorage()
    bookingManager = new BookingManager(arrayStorage)
    // Reset the mock storage before each test
    arrayStorage.bookings = []
    arrayStorage.products = []
    arrayStorage.customers = []
  })

  const createNewProduct = async (name = 'Product A', description = 'testing', price = 100) => {
    return await bookingManager.addProduct({ name, description, price })
  }

  const createNewCustomer = async (name = 'Test Customer', email = 'customer@example.com') => {
    return await bookingManager.addCustomer({ name, email })
  }

  test('should add a new product', async () => {
    const newProduct = await createNewProduct()

    expect(newProduct).toBeDefined()
    expect(newProduct.name).toBe('Product A') 
  })

  test('should get all products', async () => {
    const newProduct = await createNewProduct()
    await bookingManager.addProduct(newProduct)
    const products = await bookingManager.getAllProducts()
    expect(products.length).toBeGreaterThanOrEqual(1) 
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

    expect(booking).toBeDefined() 
    expect(booking.product.name).toBe('Product A') 
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
    expect(bookings.length).toBeGreaterThanOrEqual(1) 
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

