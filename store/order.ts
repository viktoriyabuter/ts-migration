//Create an interface and the class for the Pet and Order DTO from Swagger
//Petstore: https://petstore.swagger.io/#/

enum OrderStatus {
  Placed = "PLACED",
  Approved = "APPROVED",
  Delivered = "DELIVERED",
}

interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: OrderStatus;
  complete?: boolean;
}

export class OrderDTO implements Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: OrderStatus;
  complete?: boolean;

  constructor(data?: Partial<Order>) {
    Object.assign(this, data);
  }
}
