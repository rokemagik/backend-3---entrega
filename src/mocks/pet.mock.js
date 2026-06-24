import { faker } from "@faker-js/faker";

export const generateMockPet = () => {

  return {
    name: faker.animal.dog(),
    specie: "dog",
    adopted: false
  };

};