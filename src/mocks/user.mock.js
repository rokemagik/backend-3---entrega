import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateMockUser = () => {

  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync(
      "coder123",
      bcrypt.genSaltSync(10)
    ),
    role: Math.random() > 0.5 ? "admin" : "user",
    pets: []
  };

};