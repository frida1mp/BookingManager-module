/**
 * @file Product class
 * @module src/Product
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

/**
 * Represents a Product available for booking class.
 */
export class Product {
  /**
   * Constructor to create new product.
   *
   * @param {string} name - Name of the product.
   * @param {string} description - Description of product.
   * @param {number} price - Price of the product.
   */
  constructor (name, description, price) {
    // this.id = //generate random id Logic
    this.name = name
    this.description = description
    this.price = price
    this.available = true
  }

  /**
   * Get the product details as a string.
   *
   * @returns {string} - Product details in string format.
   */
  getProductData() {
    return `Product ID: ${this.productId}, Name: ${this.name}, Price: ${this.price}, Available: ${this.available}`
  }

  /**
   * Check if the product is available for booking.
   *
   * @returns {boolean} - Returns true if available, false otherwise.
   */
  isAvailable() {
    return this.available
  }

  /**
  * Set the availability status of the product.
  * 
  * @param {boolean} newStatus - The new availability status.
  */
  setAvailability(newStatus) {
    this.available = newStatus
  }
}