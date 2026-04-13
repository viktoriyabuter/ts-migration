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
    console.log("CREAYE OK:", created);
  } catch {
    console.log("CREATE FAIL");
  }

  try {
    const pet = await client.getPetById(petId);
    console.log("GET OK:", pet);
  } catch {
    console.log("GET FAIL");
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
  } catch {
    console.log("UPDATE FAIL");
  }

  try {
    await client.deletePet(petId);
    console.log("DELETE OK");
  } catch {
    console.log("DELETE FAIL");
  }

  try {
    const afterDelete = await client.getPetById(petId);
    console.log("GET after DELETE OK:", afterDelete);
  } catch {
    console.log("GET after DELETE FAIL");
  }
}

main();
