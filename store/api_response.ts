// Create a generic class ApiResponse that contains data and statusCode (number).
// Data should allow to store any of PetStore https://petstore.swagger.io/#/
// DTO classes: User, Pet, Order and etc.

// Implement methods:
// — getStatusMessage
// — isSuccess (check if statusCode 2XX code)
// — printSummary (if isSuccess return data, if not - error)

// Decide which one will be public, which not.

// Use static if needed.

// Should be used as:
// const response = new ApiResponse<Pet>(dog, 200);
// response.printSummary();

export class ApiResponse<T> {
  private data: T;
  private statusCode: number;

  constructor(data: T, statusCode: number) {
    this.data = data;
    this.statusCode = statusCode;
  }

  public getStatusMessage(): number {
    return this.statusCode;
  }

  public isSuccess(): boolean {
    return this.statusCode >= 200 && this.statusCode < 300;
  }

  public printSummary(): string {
    if (this.isSuccess()) {
      return `Success: ${JSON.stringify(this.data)}`;
    }
    return `Error: status code ${this.statusCode}`;
  }
}
