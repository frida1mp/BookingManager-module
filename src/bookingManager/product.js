/**
 * @file Product class
 * @module src/Product
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

export class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.available = true
    this.id = this.generateUniqueId()
  }

  generateUniqueId() {
    return 'cust-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 8)
  }

  getProductData() {
    return `Product ID: ${this.productId}, Name: ${this.name}, Price: ${this.price}, Available: ${this.available}`
  }

  isAvailable() {
    return this.available
  }

  setAvailability(newStatus) {
    if (typeof newStatus !== 'boolean') {
      throw new Error('Invalid status. Availability status must be a boolean.')
    }
    if (this.available !== newStatus) {
      this.available = newStatus
      console.log(`Product ${this.name} availability changed to ${newStatus}.`)
    }
  }
}
