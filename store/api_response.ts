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
