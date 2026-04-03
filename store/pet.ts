//Create an interface and the class for the Pet and Order DTO from Swagger
//Petstore: https://petstore.swagger.io/#/

type PetInput = Required<Pick<Pet, "name" | "photoUrls">> &
  Partial<Omit<Pet, "name" | "photoUrls">>;

enum PetStatus {
  Available = "AVAILABLE",
  Pending = "PENDING",
  Sold = "SOLD",
}

interface Category {
  id?: number;
  name?: string;
}

interface Tag {
  id?: number;
  name: string;
}

interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

class PetDTO implements Pet {
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

const dog = new PetDTO({
  name: "Baikal",
  photoUrls: ["url1"],
  status: PetStatus.Available,
});
const cat = new PetDTO({ name: "Martin", photoUrls: ["url2"] });

console.log(`My first pet: ${cat.name}`);
console.log(`My second pet: ${dog.name}`);

console.log({ ...cat });
console.log({ ...dog });
