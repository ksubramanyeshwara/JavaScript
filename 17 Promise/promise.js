// creating a promise
let fetchData = new Promise((resolve, reject) => {
  let succes = true; // Simulate success or failure
  setTimeout(() => {
    if (succes) {
      resolve("Data fetched successfully!"); // if the operation is successful, call the resolve function with the result
    } else {
      reject("Error: Data fetch failed!"); // if the operation fails, call the reject function with an error message
    }
  }, 2000);
});

// consuming the promise
fetchData
  .then((result) => {
    console.log(result); // handle the successful result
  })
  .catch((error) => {
    console.error(error); // handle the error
  });

/*
Simulating an asynchronous operation (e.g., fetching data from a server)
*/
// 1. Creating a promise
function fetchUserData(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating a successful data fetch
      if (userID === 123) {
        const userData = {
          id: 123,
          name: "John Doe",
          email: "johndoe@example.com",
          job: "Software Engineer",
        };
        resolve(userData);
      } else {
        // Simulating a failed data fetch
        reject("User not found!");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// 2. Consuming the promise
fetchUserData(123)
  .then((userdata) => {
    console.log(userdata.name); // Accessing the name property of the user data
    return userdata; // Returning the user data to the next then block
  })
  .then((uerEmail) => {
    console.log(uerEmail.email);
    return uerEmail; // Returning the user data to the next then block
  })
  .then((userJob) => {
    console.log(userJob.job); // Accessing the job property of the user data
  })
  .catch((error) => {
    console.error(error); // Handle the error
  })
  .finally(() => {
    console.log("Operation completed!"); // This block will always execute, regardless of success or failure
  });

/*
  promise.all();
  */
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      console.log("Promise One resolved!");
      resolve("Promise One");
    } else {
      console.log("Promise One rejected!");
      reject("Promise One");
    }
  }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      console.log("Promise Two resolved!");
      resolve("Promise Two");
    } else {
      console.log("Promise Two rejected!");
      reject("Promise Two");
    }
  }, 1000);
});

Promise.all([promiseOne, promiseTwo])
  .then(() => {
    console.log("All Promise resolved");
  })
  .catch(() => {
    console.log("Not All Promise resolved");
  });

/*
the use of setTimeout() influences the timing of promise resolution and rejection, which in turn affects the behavior of Promise.all in handling multiple promises.
Promise One resolved!
Promise Two rejected!
Not All Promise resolved
*/
const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error: Something went wrong");
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results); // This won't be executed because p2 rejects
  })
  .catch((error) => {
    console.log(error); // Logs "Error: Something went wrong"
  });
