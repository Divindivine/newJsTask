/*
Problem: Delayed Task Scheduler
Objective
Your task is to build a simple "task scheduler" that takes in any function, waits for a specified delay (defaulting to 2 seconds), and then executes the function. This utility will simulate a basic delay mechanism, useful for cases like deferred execution in applications, background jobs, or delayed UI updates.

Requirements
Create a TaskScheduler class with the following functionality:

The class should have a method scheduleTask, which accepts:
- A function task to be executed.
- An optional delay parameter in milliseconds (default to 2000 ms).

scheduleTask should wait for the given delay before executing task.
It should return a unique id corresponding to the task that is scheduled. (which can be simply an integer value).


Add a cancelTask method that prevents a scheduled task from executing if called before the delay elapses. It should take the id of the task to be cancelled as the argument.
cancelTask should be able to resolve the promise with a message saying "Task was cancelled" instead of the task’s actual result.

Promise Handling:
- scheduleTask should return a Promise that resolves to the value returned by task once it has been executed.
- If task throws an error, the Promise should reject with that error.

Edge Case Handling:
- If a non-function value is passed as task, throw a descriptive error.
- If a delay less than 0 is provided, throw an error to prevent unintended behavior.

Sample usage:
// Sample Usage
const scheduler = new TaskScheduler();

// Define a task
const myTask = () => {
    console.log('Task executed!');
    return 'Task completed successfully!';
};

// Schedule the task with a 3-second delay
const taskId = scheduler.scheduleTask(myTask, 3000);

// Cancel the task after 1 second
setTimeout(() => {
    scheduler.cancelTask(taskId)
        .then(message => console.log(message))
        .catch(error => console.error(error));
}, 1000);

// If the task is not cancelled, it will log "Task executed!" after 3 seconds
scheduler.scheduleTask(myTask, 3000)
    .then(result => console.log(result))
    .catch(error => console.error(error));
*/
type objectArrType = {
  id: number;
  timeOutId: number;
};

class TaskScheduler {
  objectArr: objectArrType[];
  id: number;
  constructor() {
    this.objectArr = [{ id: 0, timeOutId: 0 }];
    this.id = 1;
  }
  scheduleTask = (fun: () => string, delay = 2000) => {
    console.log("eneterd");
    this.id = this.id + 1;
    if (typeof fun !== "function") throw new Error("task is not a function");
    if (delay < 0) throw new Error("delay is less than 0");
    const promise = new Promise((resolve, reject) => {
      const timeOut = setTimeout(async () => {
        try {
          const result = await fun();
          resolve(result);
        } catch (error) {
          reject(error);
        }
        const filterd = this.objectArr.filter((task) => task.id !== this.id);
        this.objectArr.length = 0;
        this.objectArr = [...filterd];
      }, delay);
      const id = this.id;
      const obj: objectArrType = { id: 0, timeOutId: 0 };
      obj.id = id;
      obj.timeOutId = timeOut;
      this.objectArr.push(obj);
    });
    return { id: this.id, promise: promise };
  };
  cancelTask = (taskId: number) => {
    const executed = this.objectArr.find((element) => element.id === taskId);
    if (!executed) return Promise.reject("task not found or task has already executed");
    clearTimeout(executed.timeOutId);
    return Promise.resolve("task has canceled");
  };
}

const scheduler = new TaskScheduler();

const myTask = () => {
  console.log("Task executed");
  return "Task completed succesfully!";
};

const obj = scheduler.scheduleTask(myTask, 3000);

setTimeout(() => {
  scheduler
    .cancelTask(obj.id)
    .then((message) => console.log(message))
    .catch((error) => console.log("error: ", error));
}, 4000);

obj.promise
  .then((result) => console.log(result))
  .catch((error) => console.log("error :", error));
