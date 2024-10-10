# Promise

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a way to handle asynchronous operations more elegantly and avoid callback hell.

### Why Promises are used:

- Better handling of asynchronous operations
- Improved code readability and maintainability
- Easier error handling
- Chaining of asynchronous operations

### Promise States:

A promise can have one of three states:

1. Pending: The initial state, the asynchronous operation has not yet completed. neither fulfilled nor rejected.
2. Fulfilled: The operation was completed successfully. Once a Promise is fulfilled, it has a value that can be accessed using the `.then()` method. A fulfilled Promise can't be rejected or fulfilled again.
3. Rejected: The operation failed. Once a Promise is rejected, it has a reason that can be accessed using the `.catch()` method. A rejected Promise can't be fulfilled or rejected again.

### How Does a Promise Work?

**Creating a Promise**: A promise is created using the `Promise` constructor, which takes a function as an argument. This function is passed two arguments: `resolve` (for success) and `reject` (for failure).

**Handling a Promise**: Once a promise is created, you can handle using `.then()` to handle the successful case, `.catch()` to handle errors, and `.finally()` to run code regardless of the outcome.

## promise.all() and promise.race()

Promise.all() is a method that takes an array of promises as an argument and returns a single Promise. This returned promise resolves when all of the promises in the array have resolved, or it rejects as soon as one of the promises in the array rejects.
