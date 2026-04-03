import { PetDTO, PetStatus } from "./pet";
import { ApiResponse } from "./api_response";
import { OrderDTO } from "./order";

const dog = new PetDTO({
  name: "Baikal",
  photoUrls: ["url1"],
  status: PetStatus.Available,
});
const petResponse = new ApiResponse(dog, 200);
console.log(
  "Pet:",
  petResponse.printSummary(),
  "Success:",
  petResponse.isSuccess(),
);

const order = new OrderDTO();
const orderResponse = new ApiResponse(order, 200);
console.log(
  "Order:",
  orderResponse.printSummary(),
  "Success:",
  orderResponse.isSuccess(),
);

const errorResponse = new ApiResponse(dog, 404);
console.log(
  "Error:",
  errorResponse.printSummary(),
  "Success:",
  errorResponse.isSuccess(),
);
