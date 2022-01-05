import Direction, { IDirection } from "../models/direction.model";

interface ICreateDirectionInput {
  street: string;
  streetNumber: string;
  town: string;
  postalCode: string;
  country: string;
  ok: boolean;
}

async function CreateDirection({
  street,
  streetNumber,
  town,
  postalCode,
  country,
  ok,
}: ICreateDirectionInput): Promise<IDirection> {
  return await Direction.create({
    street,
    streetNumber,
    town,
    postalCode,
    country,
    ok,
  })
    .then((data: any) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreateDirection,
};
