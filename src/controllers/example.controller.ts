import User, { IUser } from "../models/example.model";
import { CreateQuery } from "mongoose";

async function CreateUser({
  email,
  firstName,
  lastName,
}: CreateQuery<IUser>): Promise<IUser> {
  return User.create({
    email,
    firstName,
    lastName,
  })
    .then((data: IUser) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreateUser,
};
