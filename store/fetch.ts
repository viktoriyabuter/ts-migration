// Create an asynchronous function that simulates fetching data from a server.
// — The function must be generic and work with different DTO types such as User, Pet, and Order.
// — The function should accept data of any type as a parameter and return a Promise of that same type.
// — Inside the function, simulate a delay of 1 second using setTimeout.
// — After the delay, check the current time using the Date object. If the current seconds value is even,
// return the provided data.
// — If the seconds value is odd, throw an Error with a descriptive message.

// The goal of this task is to practice async/await,
// Promise behavior, generics, error handling, and working with typed data structures.

// HW 6
// Build a small asynchronous API client for the Swagger PetStore API using fetch.
// — create a reusable ApiClient class with generic CRUD methods for working with REST endpoints.
// — The ApiClient should support at least GET, POST, PUT, and DELETE operations and use generics
// to provide typed request and response handling.
// — Then create a PetStoreClient class that uses these base ApiClient methods instead of calling fetch directly.
// — Implement full CRUD support for the Pet entity only: getPetById, createPet, updatePet, and deletePet.
// — Use promises, async/await, handle HTTP errors explicitly.
// The goal of this task is to practice asynchronous programming, fetch, generics, DTO modeling,
// reusable client design, and basic API framework structure.

import { ApiResponse } from "./api_response";

export function fetchFromServer<T>(data: T): Promise<ApiResponse<T>> {
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
