/*
Problem: Retry Operation with Callback on Success
Write a function retryOperation that takes three arguments:

- An asynchronous function operation that returns a promise.
- A number retries that specifies the maximum number of times to retry the operation if it fails.
- A callback function to execute upon the first successful attempt of operation. The callback should receive the result of the successful operation as its argument.

The retryOperation function should attempt to execute the operation function. If it fails (i.e., the promise is rejected), it should retry up to the specified number of retries. If it succeeds, it should execute the callback function with the result and immediately stop retrying.

If all attempts fail, retryOperation should return a final rejection.

Example usage:

async function fetchData() {
  // Simulated operation that might fail
  if (Math.random() < 0.7) throw new Error("Network error");
  return "Data received";
}

function onSuccess(data: string) {
  console.log("Operation successful:", data);
}

retryOperation(fetchData, 3, onSuccess)
  .then(() => console.log("Completed"))
  .catch(() => console.log("All retries failed"));

Make sure not to use .then and .catch. Instead use async/await.
*/

async function retryOperation(fetchData, MaxTry, onSuccess) {
  let currentTry = 0;
  async function recursive() {
    try {
      currentTry++;
      const result = await fetchData();
      onSuccess(result);
    } catch (error) {
      if (currentTry <= MaxTry) await recursive();
      else throw new Error();
    }
  }
  await recursive();
}

async function fetchData() {
  if (Math.random() < 0.7) throw new Error("Network error");
  return "Data received";
}

function onSuccess(data) {
  console.log("Operation successful:", data);
}

retryOperation(fetchData, 3, onSuccess)
  .then(() => console.log("Completed"))
  .catch((error) => console.log("All retries failed"));
