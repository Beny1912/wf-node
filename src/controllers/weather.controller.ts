import { Request, Response } from "express";
import Direction, { IDirection } from "../models/direction.model";
import GoogleService from "../services/googleService";
import OpenWeather from "../services/openWeather";
import { addressValidation } from "../validations/joi";

const googleService = new GoogleService();
const openWeather = new OpenWeather();

export const getWeather = async (req: Request, res: Response) => {
  // Validation
  const { error } = addressValidation(req.body);
  if (error) return res.status(400).json(error.message);

  const address: IDirection = req.body;

  const result = await googleService.getCoordinatesFromAddress(
    [
      address.street,
      address.streetNumber,
      address.town,
      address.postalCode,
      address.country,
    ].join(" ")
  );
  if (result.find === "YES") {
    const results = await openWeather.getWeatherByCoordinates(
      result.coordinates[0].lat,
      result.coordinates[0].lng
    );
    res.status(200).send(results);
  } else {
    res.status(400).send({
      message: "Address not exist",
    });
  }
};
