/*
Without the callback function asynchronous tasks would be executed at any time, and the order of execution would be unpredictable. With the callback function, each task is executed only after the previous task is completed, ensuring that the tasks are executed in the correct order. This is known as "callback hell" because the code becomes deeply nested with multiple callbacks, making it difficult to read and maintain. However, it is a common technique used in JavaScript to handle asynchronous tasks.
*/
function taskOne(callback) {
  setTimeout(() => {
    console.log(`Task One Complete`);
    callback();
  }, 2000);
}

function taskTwo(callback) {
  setTimeout(() => {
    console.log(`Task Two Complete`);
    callback();
  }, 1000);
}

function taskThree(callback) {
  setTimeout(() => {
    console.log(`Task Three Complete`);
    callback();
  }, 3000);
}

function taskFour(callback) {
  setTimeout(() => {
    console.log(`Task Four Complete`);
    callback();
  }, 1500);
}

function taskFive(callback) {
  setTimeout(() => {
    console.log(`Task Five Complete`);
    callback();
  }, 1500);
}

function taskSix(callback) {
  setTimeout(() => {
    console.log(`Task Six Complete`);
    callback();
  }, 1500);
}

function taskSeven(callback) {
  setTimeout(() => {
    console.log(`Task Seven Complete`);
    callback();
  }, 1500);
}

//  Pyramid of Doom
taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive(() => {
          taskSix(() => {
            taskSeven(() => {
              console.log(`All Tasks Complete`);
            });
          });
        });
      });
    });
  });
});
