import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { IUser } from "../../../types/user";

interface IGenerateUser {
    newUser : ()=> IUser;
    newUserWrongEmail : ()=> IUser;
}

const generateUser: IGenerateUser = {
  newUser: ()=>({
    id: uuidv4(),
    name: faker.name.findName().toLocaleLowerCase(),
    password: faker.internet.password(6),
    email: faker.internet.email().toLocaleLowerCase(),
    employed: false,
    created_at: new Date(),
    updated_at: new Date(),
  }),
  newUserWrongEmail: ()=>({
    id: uuidv4(),
    name: faker.name.findName().toLocaleLowerCase(),
    email: faker.internet.email().toLocaleLowerCase().replace("@",""),
    password: faker.internet.password(6),
    employed: false,
    created_at: new Date(),
    updated_at: new Date(),
  }),
}

export default generateUser;