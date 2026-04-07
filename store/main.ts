import { PetDTO, PetStatus } from "./pet";
import { ApiResponse } from "./api_response";
import { OrderDTO } from "./order";
import { UserDTO } from "./user";
import { fetchFromServer } from "./fetch";

const dog = new PetDTO({
  name: "Baikal",
  photoUrls: ["url1"],
  status: PetStatus.Available,
});
const petResponse = new ApiResponse(dog, 200);
console.log("Pet:", petResponse.printSummary());

const order = new OrderDTO();
const orderResponse = new ApiResponse(order, 404);
console.log("Order:", orderResponse.printSummary());

const user = new UserDTO({
  firstName: "Viktoriya",
  lastName: "Buter",
  userStatus: 1,
});

const userResponse = new ApiResponse(user, 200);
console.log("User:", userResponse.printSummary());

async function main() {
  const response = await fetchFromServer(dog, 200);
  console.log(response.printSummary());

  const errorResponse = await fetchFromServer(dog, 500);
  console.log(errorResponse.printSummary());
}

main();
