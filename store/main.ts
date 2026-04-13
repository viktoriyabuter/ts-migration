import { PetDTO, PetStatus } from "./pet";
import { ApiResponse } from "./api_response";
import { OrderDTO } from "./order";
import { UserDTO } from "./user";
import { fetchFromServer } from "./fetch";
import { PetStoreClient } from "./pet_store_client";

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

// async function main() {
//   try {
//     const fetchedData = await fetchFromServer(order);
//     console.log(fetchedData);
//   } catch (err) {
//     console.error(err);
//   }
// }

// main();

async function run() {
  const client = new PetStoreClient();

  try {
    const created = await client.createPet({
      name: "Baikal",
      photoUrls: ["url1"],
    });

    console.log("Created:", created);

    const pet = await client.getPetById(created.id!);
    console.log("Fetched:", pet);

    await client.deletePet(created.id!);
    console.log("Deleted");
  } catch (e) {
    console.error("Error:", e);
  }
}

run();
