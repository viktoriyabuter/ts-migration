// Create an asynchronous function that simulates fetching data from a server.
// — The function must be generic and work with different DTO types such as User, Pet, and Order.
// — The function should accept data of any type as a parameter and return a Promise of that same type.
// — Inside the function, simulate a delay of 1 second using setTimeout.
// — After the delay, check the current time using the Date object. If the current seconds value is even,
// return the provided data.
// — If the seconds value is odd, throw an Error with a descriptive message.

// The goal of this task is to practice async/await,
// Promise behavior, generics, error handling, and working with typed data structures.

import { ApiResponse } from "./api_response";

export async function fetchFromServer<T>(data: T): Promise<ApiResponse<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const seconds = new Date().getSeconds();

      if (seconds % 2 === 0) {
        resolve(new ApiResponse(data, 200));
      } else {
        reject(new Error(`Failed`));
      }
    }, 1000);
  });
}
