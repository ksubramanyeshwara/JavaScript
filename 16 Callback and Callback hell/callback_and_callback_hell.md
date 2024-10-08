# Callback and Callback hell

## What is Synchronous Programming?

Synchronous programming is the default behavior in JavaScript, where code is executed sequentially, one line after the other. Each statement must complete before the next one starts.

This means that if a function or task takes time to complete (like a network request or a long computation), the program will wait (or "block") until that task is finished before moving on to the next statement.

## What is Asynchronous Programming?

Asynchronous programming allows the program to continue executing other tasks while waiting for a long-running task to complete. 

Instead of blocking the execution of the program, asynchronous programming uses callbacks, promises, or async/await to handle the completion of the task and continue executing the rest of the code.


## What is callback?

A callback is a function that is passed as an argument to another function and is executed after the first function has finished. This technique allows a function to call another function when a task has been completed.

Callbacks are commonly used in asynchronous programming. For example, while reading a file or making a network request, the program can continue executing other tasks and then call the callback function when the file has been read or the network request has completed.

### Why Use Callbacks?

Callbacks are used to handle asynchronous operations, such as:
- Reading a file
- Netwrok requests
- Handling responses from API requests
- Processing data from databases
- Managing events (e.g., mouse clicks, keyboard input)

# Callback Hell

Also called as  **Pyramid of Doom**

Callback hell is situation that arises in asycnhronous programming where multiple nested callbacks are used to handle asynchronous operations, resulting in code that is difficult to read, understand, and maintain.

This can occur when multiple asynchronous operations need to be performed in a specific order, or when errors need to be handled at each step of the process.
