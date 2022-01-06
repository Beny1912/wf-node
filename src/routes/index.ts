import express, { Request, Response } from "express";
import { signup, signin, profile } from "../controllers/auth.controller";
import { TokenValidation } from "../middlewares/verifyToken";
import { checkAddress } from "../controllers/direction.controller";
import { getWeather } from "../controllers/weather.controller";

const router = express.Router();

// define a route handler for the check server
router.get("/health", (req: Request, res: Response, next: Function): void => {
  // response OK
  res.status(200).send("Server OK");
});
// define routes related with session
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", TokenValidation, profile);
// define a route to check if address is correct.
router.post("/checkAddress", checkAddress);
// define a route to get weather of a address
router.post("/getWeather", getWeather);

export default router;
