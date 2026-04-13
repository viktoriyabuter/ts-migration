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

export class ApiClient {
  constructor(private baseUrl: string) {}

  async get<T>(url: string): Promise<T> {
    const res = await fetch(this.baseUrl + url);

    if (!res.ok) {
      throw new Error(`GET error: ${res.status}`);
    }

    return res.json();
  }

  async post<T>(url: string, body: any): Promise<T> {
    const res = await fetch(this.baseUrl + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`POST error: ${res.status}`);
    }

    return res.json();
  }

  async put<T>(url: string, body: any): Promise<T> {
    const res = await fetch(this.baseUrl + url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`PUT error: ${res.status}`);
    }

    return res.json();
  }

  async delete(url: string): Promise<void> {
    const res = await fetch(this.baseUrl + url, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`DELETE error: ${res.status}`);
    }
  }
}
