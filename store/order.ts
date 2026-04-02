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

class OrderDTO implements Order {
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

const order1 = new OrderDTO();
const order2 = new OrderDTO({
  id: 1,
  shipDate: "2026-04-02T15:30:00Z",
});
const order3 = new OrderDTO({
  complete: true,
});
console.log(order1.id);
console.log(order2.shipDate);
console.log(order3.complete);
