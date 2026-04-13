import { PetDTO, PetStatus } from "./pet";
import { PetStoreClient } from "./pet_store_client";

async function main() {
  const client = new PetStoreClient();
  const petId = Date.now();

  try {
    const created = await client.createPet(
      new PetDTO({
        id: petId,
        name: "Baikal",
        photoUrls: ["url1"],
        status: PetStatus.Available,
      }),
    );
    console.log("CREATE OK:", created);
  } catch (e) {
    console.log("CREATE FAIL:", (e as Error).message);
  }

  try {
    const pet = await client.getPetById(5);
    console.log("GET OK:", pet);
  } catch (e) {
    console.log("GET FAIL:", (e as Error).message);
  }

  try {
    const updated = await client.updatePet(
      new PetDTO({
        id: petId,
        name: "UPDATED",
        photoUrls: ["url"],
        status: PetStatus.Available,
        category: { id: 0, name: "test" },
        tags: [{ id: 0, name: "tag" }],
      }),
    );
    console.log("UPDATE OK:", updated);
  } catch (e) {
    console.log("UPDATE FAIL:", (e as Error).message);
  }

  try {
    await client.deletePet(petId);
    console.log("DELETE OK");
  } catch (e) {
    console.log("DELETE FAIL:", (e as Error).message);
  }

  try {
    await client.getPetById(petId);
    console.log("GET after DELETE OK");
  } catch (e) {
    console.log("GET after DELETE FAIL:", (e as Error).message);
  }
}

main();
