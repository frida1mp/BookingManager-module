# BookingManager

## Overview
The Booking Manager module provides a flexible and reusable system for managing bookings, customers, and products. It is designed to be easily integrated with the storage solution MongoDB, enabling developers to add booking functionality to their applications.

Whether you're building an app for small businesses, appointment scheduling, or event management, this module provides a robust and adaptable backend for booking management.

## For users

### Installtion

To install the module run:
npm install booking-manager-module

### How to use the module

##### Configure Storage
The module is designed to work with different storage backends. By default, we provide a MongoStorage class that integrates with MongoDB.

##### Initialize the BookingManager
To use the module, first initialize the storage and pass it to the BookingManager:

#### API Documentation
The module offers the following public methods for managing bookings, products, and customers.

BookingManager API
- addBooking(productId, customerId, date)
- Adds a new booking to the system.
- Returns: Booking object.

cancelBooking(bookingId)
- Removes a booking based on the provided ID.

getAllBookings()
- Retrieves all bookings stored in the system.
- Returns: An array of Booking objects.

getBookingById(bookingId)
- Retrieves a specific booking by its ID.
- Returns: Booking object.

addProduct(name, description, price)
- Adds a new product to the system.
- Returns: Product object.

removeProductById(productId)
- Removes a product based on the provided ID.

getAllProducts()
- Retrieves all products stored in the system.
- Returns: An array of Product objects.

addCustomer(name, email)
- Adds a new customer to the system.
- Returns: Customer object.

getAllCustomers()
- Retrieves all customers stored in the system.
- Returns: An array of Customer objects.

How to Start the Module
To start using the module:

Ensure MongoDB is set up (see Dependencies).
Use the MongoStorage class to connect the module to MongoDB, or implement your own storage that extends the StorageInterface.
Dependencies
Node.js (v14 or above)
MongoDB (for persistence)
Docker (for containerized setup)
You can get MongoDB and Docker running by following these links:

Install MongoDB
Install Docker
