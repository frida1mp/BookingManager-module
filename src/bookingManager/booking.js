/**
 * @file Booking class.
 * @module src/Booking
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

export class Booking {
  constructor(product, customer, date) {
    this.product = product
    this.customer = customer
    this.date = date
    this.id = this.generateUniqueId()
    this.canceled = false
  }

  generateUniqueId() {
    return 'cust-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 8)
  }

  cancel() {
    this.cancelled = true
  }

  isCancelled() {
    if (this.cancelled) {
      console.log(`Booking with ID ${this.id} is cancelled.`)
    }
    return this.cancelled
  }
}
