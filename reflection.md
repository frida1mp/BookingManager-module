## Reflection

### Naming (chapter 2)
|Name and Explanation  | Reflection and rules from Clean Code |
| ----  | ---- |
| cancelBooking - function in BookingManager |**Pick one word concept**: Both remove and cancel are used for the same action which makes it unclear if it removes the object or just changes the state to canceled.|
|currentBooking - variable in method cancelBooking method  | **Add meaning full context**: Naming makes it unclear since there is only one booking  in focus, would have been better with indexOfBooking. |
| customer - variable in addCustomer method  | **Avoid Disinformation**: newCustomer is used to describe the new object being created but so is customer. Names are very similar but points to the same thing which could make it confusing. |
| indexOfProduct - variable in removeProduct method | **Don’t Add Gratuitous Context**: A clear name but "of" might not be necessary. Could have been productIndex only.  |
| BookingManager - classname  |  **Class Names**: Uses verb as class name. Would be better to use app.js/index.js or something similar to that to stick with nouns.  |

## Functions (chapter 3)
|Name and Explanation  | Lines of code | Reflection and rules from Clean Code |
| ----  | ---- |---- |
| addBooking  | 30   | **Small**: The function could definitely be smaller and divided into multiple functions. **Do one thing:** It both validates the customer and the product AND add a new booking. **Function arguments**: Since we may need the data to be sent to the function it would have been better to have the function take and object as one argument instead of three.|
| addCustomer  | 20  | **Do one thing**: the function adds the customer but also validates it.  |
| cancelBooking  | 20 |**Small**: The validation of an existing booking could have been broken out into a separate function. **Common Monadic Forms**: We use one argument that has clear naming.|
|  getBookingById  | 15  |**One level of abstraction**: The function mixes both changing the bookings array and removing an object from the database. The lower level functionality should have been moved to a separate function.  |
| addProduct |  12 | **Small**: the function is small in size. **Command Query Separation**: The functions both adds a new object to the storage and the array of products, and returns and returns the new object added. This means it both changes the state and returns information about it.   |