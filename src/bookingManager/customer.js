/**
 * @file Customer class
 * @module src/Product
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

export class Customer {
  constructor(name, email) {
    // this.id = //generate random id Logic
    this.name = name
    this.email = email
    this.id = this.generateUniqueId()
  }

  generateUniqueId() {
    return 'cust-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 8)
  }
}
