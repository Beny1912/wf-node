//update to joi @types/joi
import Joi from "joi";
import { IUser } from "../models/user.model";
import { IDirection } from "../models/direction.model";

export const addressValidation = (data: IDirection) => {
  const userSchema = Joi.object({
    street: Joi.string().required(),
    streetNumber: Joi.string().required(),
    town: Joi.string().required(),
    postalCode: Joi.string().required(),
    country: Joi.string().required(),
  });
  return userSchema.validate(data);
};

export const signupValidation = (data: IUser) => {
  const userSchema = Joi.object({
    username: Joi.string().min(4).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });
  return userSchema.validate(data);
};

export const signinValidation = (data: IUser) => {
  const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });
  return userSchema.validate(data);
};
