import express, { Request, Response } from "express";
import { IDirection } from "../models/direction.model";
import GoogleService from "../services/googleService";

const googleService = new GoogleService();

const router = express.Router();

// define a route handler for the check server
router.get("/health", (req: Request, res: Response, next: Function): void => {
  // response OK
  res.status(200).send("Server OK");
});

// define a route to check if address is correct.
router.post(
  "/checkAddress",
  async (req: Request, res: Response, next: Function): Promise<void> => {
    const address: IDirection = req.body;
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
  }
);

export default router;
