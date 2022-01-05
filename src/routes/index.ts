import express, { Request, Response } from "express";

const router = express.Router();

// define a route handler for the default home page
router.get("/health", (req: Request, res: Response, next: Function): void => {
  // render the index template
  res.status(200).send("Server OK");
});

export default router;
