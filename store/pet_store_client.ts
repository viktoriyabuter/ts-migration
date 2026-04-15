import { ApiClient } from "./api_client";
import { Pet } from "./pet";

export class PetStoreClient {
  private api = new ApiClient("https://petstore.swagger.io/v2");

  getPetById(id: number): Promise<Pet> {
    return this.api.get<Pet>(`/pet/${id}`);
  }

  createPet(pet: Pet): Promise<Pet> {
    return this.api.post<Pet>(`/pet`, pet);
  }

  updatePet(pet: Pet): Promise<Pet> {
    return this.api.put<Pet>(`/pet`, pet);
  }

  deletePet(id: number): Promise<void> {
    return this.api.delete(`/pet/${id}`);
  }
}
