# Testing

## To run test

- Make sure dependencies are installed (node, Jest and Babel)
- Run with: npm test

*** 

## TC1 Bookings

### TC1.1 Add new booking with invalid product ID

* Use case: UC1 Should throw error when attempting to make booking with invalid product ID
* Scenario: The correct error is thrown when the wrong product ID is added.
The main scenario of UC1 is tested where a new booking is attempted to be made with an invalid product ID.
Precondition:

### Test steps

* Make new booking with an invalid product ID using bookingManager.addBooking()

```js
    const booking = await bookingManager.addBooking('invalidIdInput', newCustomer.id, date)
```

* Check that the error to be "Product not found."


### Expected
An error that shows the product is not available.


***

### TC1.2 Add new booking

* Use case: UC2 Validates a new booking is added.
* Scenario: The booking is added to the system.
The main scenario of UC2 is tested where a new booking is made and added to the system.
Precondition:

### Test steps

* Create a new product using bookingManager.addProduct()

```js
const createNewProduct = async (name = 'Product A', description = 'testing', price = 100) => {
    return await bookingManager.addProduct({ name, description, price })
  }
```

* Create a new customer using bookingManager.addCustomer()

```js
const createNewCustomer = async (name = 'Test Customer', email = 'customer@example.com') => {
    return await bookingManager.addCustomer({ name, email })
  }
```

* Add new booking for the product and customer using bookingManager.addBooking()
```js
const newProduct = await createNewProduct()

    const newCustomer = await createNewCustomer()

    const date = Date()

    const booking = await bookingManager.addBooking(newProduct.id, newCustomer.id, date)
```
* Check that the booking is added to system and has the correct name.


### Expected
Booking is added with the correct data.

***

### TC1.3 Gets all bookings

* Use case: UC3 Retrieves all bookings in the system.
* Scenario: Should show all bookings.
The main scenario of UC1 is tested where all bookings are retrieved.
Precondition:

### Test steps

* Create a new product using bookingManager.addProduct()

```js
const createNewProduct = async (name = 'Product A', description = 'testing', price = 100) => {
    return await bookingManager.addProduct({ name, description, price })
  }
```

* Create a new customer using bookingManager.addCustomer()

```js
const createNewCustomer = async (name = 'Test Customer', email = 'customer@example.com') => {
    return await bookingManager.addCustomer({ name, email })
  }
```

* Add new booking for the product and customer using bookingManager.addBooking()

```js
const newProduct = await createNewProduct()

    const newCustomer = await createNewCustomer()

    const date = Date()

    const booking = await bookingManager.addBooking(newProduct.id, newCustomer.id, date)
```

* Retrieve list of all bookings and check that the list contains at least one booking.
```js
    const bookings = await bookingManager.getAllBookings()
```


### Expected
At least one booking is retrieved.


***


### TC1.4 Cancel a booking.

* Use case: UC4 Booking is canceled.
* Scenario: Should remove the booking.
The main scenario of UC4 is tested where a booking is canceled and removed.
Precondition:

### Test steps

* Create a new product using bookingManager.addProduct()
```js
const newProduct = {
    name = 'Product A', 
    description = testing',
    price = 100
    }
const product = bookingManager.addProduct(newProduct)
```
* Create a new customer using bookingManager.addCustomer()
```js
const newCustomer = {
    name = 'Test', 
    email = testing@gmail.com'
    }
const customer = bookingManager.addCustomer(newCustomer)
```
* Add new booking for the product and customer using bookingManager.addBooking()
```js
    const booking = await bookingManager.addBooking(product.id, customer.id, date)
```

* Cancel the same booking using bookingManger.cancelBooking()
```js
    const canceledBooking = await bookingManager.cancelBooking(booking.id)
```

* Check that booking is removed.

### Expected
Booking that is canceled is undefined.
```js
console.log(booking) // logs undefined
```


| Test      | UC1 (Add booking with invalid prodId) | UC2 (Add new booking) | UC3 (Get all bookings) | UC3 (Cancel booking) |
| --------- | ---- | ---- |----| ----|                 
| TC1.1     | 1/OK              | 0                      | 0                      |
| TC1.2     | 0.                | 1/OK                   | 0                      |
| TC1.3     | 0                 | 0                      | 1/OK                   | 0                  |
| TC1.4     | 0                 | 0                      | 0                  | 1/OK                   |
| COVERAGE & SUCCESS| 1/OK    | 1/OK    | 1/OK | 1/OK |

### Comment

All tests passed.

***

## TC1 Customers

### TC1.1 Add new customer

* Use case: UC1 Should create new customer.
* Scenario: Customer is added to the system.
The main scenario of UC1 is tested where a new customer is added to the system.
Precondition:

### Test steps

* Add new customer by using bookingManager.addCustomer()
```js
const newCustomer = {
    name = 'Test', 
    email = testing@gmail.com'
    }
const customer = bookingManager.addCustomer(newCustomer)
```
* Check that the customer is defined and has the name "Test Customer"
```js
console.log(customer, customer.name)
```

### Expected
Customer is added with correct data.


| Test      | UC1 (Add customer) |
| --------- | ---- |       
| TC1.1     | 1/OK              |
| COVERAGE & SUCCESS| 1/OK    |

### Comment
Test passed.

***

## TC1 Products

### TC1.1 Add new product

* Use case: UC1 Add product
* Scenario: Product gets added to products list with attributes.
The main scenario of UC1 is tested where a new product is attempeted to be added.
Precondition:

### Test steps

* Create a new product using bookingManager.addProduct()
```js
const newProduct = {
    name = 'Product A', 
    description = testing',
    price = 100
    }
const product = bookingManager.addProduct(newProduct)
```
* Verify that the product has been added and is defined.
```js
console.log(product)

```* Check that the product has the correct name "Product A"
```js
console.log(product.name)

```

### Expected
The product is added with the correct data.


***

### TC1.2 Get all products

* Use case: UC2 Validates that all products stored are retrieved.
* Scenario: All products gets listed.
The main scenario of UC2 is tested where all products ar attempted to be displayed.
Precondition:

### Test steps

* Create a new product using bookingManager.addProduct()
```js
const newProduct = {
    name = 'Product A', 
    description = testing',
    price = 100
    }
const product = bookingManager.addProduct(newProduct)
```
* Retrieve all products using bookingManager.getAllProducts().
```js
    const products = await bookingManager.getAllProducts()
```

* Check that the product list contains at least one product.
```js
>console.log(products)

```

### Expected
At least one product is retrieved.


***

### TC1.3 Remove a products

* Use case: UC3 Remove product.
* Scenario: Product is removed from storage.
The main scenario of UC1 is tested where a specific product is removed.
Precondition:

### Test steps

* Create a new product using bookingManager.addProduct()
```js
const newProduct = {
    name = 'Product A', 
    description = testing',
    price = 100
    }
const product = bookingManager.addProduct(newProduct)
```
* Remove the same product using by using its ID in bookingManager.removeProduct()
```js
bookingManager.removeProduct(newProduct.id)

```
* Retrieve list of all products and check that the product is not apart of the list.
```js
    const products = await bookingManager.getAllProducts()
    console.log(products)
```


### Expected
The product is removed from list.


| Test      | UC1 (Add product) | UC2 (Get all products) | UC3 (Remove a product) | 
| --------- | ---- | ---- |----|                  
| TC1.1     | 1/OK              | 0                      | 0                      |
| TC1.2     | 0.                | 1/OK                   | 0                      |
| TC1.3     | 0                 | 0                      | 1/OK                   |
| COVERAGE & SUCCESS| 1/OK    | 1/OK    | 1/OK |

### Comment



All tests passed.
** Error thrown: Error is thrown when trying to add a booking with an invalid product id.

![alt text](<Screenshot 2024-10-01 at 13.33.30.png>)


