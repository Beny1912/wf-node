import User, { IUser } from "../models/example.model";
import Pet, { IPet } from "../models/exampleExternal.model";

interface ICreatePetInput {
  owner: IUser["_id"];
  name: IPet["name"];
}

async function CreatePet({ owner, name }: ICreatePetInput): Promise<IPet> {
  return await Pet.create({
    owner,
    name,
  })
    .then((data: IPet) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreatePet,
};
