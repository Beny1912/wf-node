import { Request, Response } from "express";
import Direction, { IDirection } from "../models/direction.model";
import GoogleService from "../services/googleService";
import { addressValidation } from "../validations/joi";

const googleService = new GoogleService();

export const checkAddress = async (req: Request, res: Response) => {
  // Validation
  const { error } = addressValidation(req.body);
  if (error) return res.status(400).json(error.message);

  const address: IDirection = req.body;

  try {
    const result = await googleService.checkAddress(
      [
        address.street,
        address.streetNumber,
        address.town,
        address.postalCode,
        address.country,
      ].join(" ")
    );
    if (
      result.find === "YES" &&
      result.results[0].formatted_address
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(address.street)
    ) {
      res.status(200).send(result.results[0]);
    } else {
      res.status(400).send({
        message: "Address not exist",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
