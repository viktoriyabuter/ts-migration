//Create an interface and the class for the Pet and Order DTO from Swagger
//Petstore: https://petstore.swagger.io/#/

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

  constructor(
    name: string,
    photoUrls: string[],
    id?: number,
    category?: Category,
    tags?: Tag[],
    status?: PetStatus,
  ) {
    this.name = name;
    this.photoUrls = photoUrls;

    if (id !== undefined) this.id = id;
    if (category !== undefined) this.category = category;
    if (tags !== undefined) this.tags = tags;
    if (status !== undefined) this.status = status;
  }
}

const dog = new PetDTO(
  "Baikal",
  ["url1"],
  undefined,
  undefined,
  undefined,
  PetStatus.Available,
);
const cat = new PetDTO("Martin", ["url2"]);

console.log(`My first pet: ${cat.name}`);
console.log(`My second pet: ${dog.name}`);
