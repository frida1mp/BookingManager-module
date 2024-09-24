import { BookingManager } from './bookingManager.js'
import { MongoStorage } from './storage/mongoStorage.js'

/**
 *
 */
async function runTests() {
  // Initialize MongoStorage and BookingManager
  const mongoStorage = new MongoStorage('mongodb://localhost:27017/', 'mongodb')
  await mongoStorage.connect()
  const bookingManager = new BookingManager(mongoStorage)
  // Load initial data from MongoDB
  await bookingManager.loadData()

  // Add a new customer
  const customer = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
  const newCustomer = await bookingManager.addCustomer(customer)
  console.log('Customer added:', newCustomer)

  // Add a new product
  const product = {
    name: 'Room 101',
    description: 'A cozy room with a great view.',
    price: 100
  }
  const addedProduct = await bookingManager.addProduct(product)
  console.log('Product added:', addedProduct)

  // Create a new booking
  const bookingDate = new Date().toISOString()
  const booking = await bookingManager.addBooking(addedProduct.id, newCustomer.id, bookingDate)
  console.log('Booking added:', booking)

  // Retrieve and display all bookings
  const allBookings = await bookingManager.getAllBookings()
  console.log('All bookings:', allBookings)

  // Cancel the booking
  await bookingManager.cancelBooking(booking.id)
  console.log('Booking cancelled:', booking.id)

  // Verify that the booking has been cancelled
  const updatedBookings = await bookingManager.getAllBookings()
  console.log('Updated bookings after cancellation:', updatedBookings)
}

// Run the tests
runTests().catch(error => {
  console.error('Error running tests:', error)
})
