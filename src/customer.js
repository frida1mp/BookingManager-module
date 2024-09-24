/**
 * @file Customer class
 * @module src/Product
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

/**
 * Represents a customer.
 */
export class Customer {
  /**
   * Constructor to create new customer.
   *
   * @param {string} name - Name of the product.
   * @param {string} email - Description of product.
   */
  constructor (name, email) {
    // this.id = //generate random id Logic
    this.name = name
    this.email = email
    this.id = this.generateUniqueId()
  }

  /**
   * Generates a unique ID for each customer using the current timestamp and a random number.
   *
   * @returns {string} - A unique customer ID.
   */
  generateUniqueId() {
    return 'cust-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 8);
  }
}
