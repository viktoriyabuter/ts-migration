//Create an interface and the class for the Pet and Order DTO from Swagger
//Petstore: https://petstore.swagger.io/#/

type PetInput = Required<Pick<Pet, "name" | "photoUrls">> &
  Partial<Omit<Pet, "name" | "photoUrls">>;

export enum PetStatus {
  Available = "AVAILABLE",
  Pending = "PENDING",
  Sold = "SOLD",
}

export interface Category {
  id?: number;
  name?: string;
}

export interface Tag {
  id?: number;
  name: string;
}

export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

export class PetDTO implements Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;

  constructor(data: PetInput) {
    this.name = data.name;
    this.photoUrls = data.photoUrls;
    Object.assign(this, data);
  }
}
