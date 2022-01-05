import express from "express";
import path from "path";
const app = express();
const port = 3000; // default port to listen

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get("/health", (req, res) => {
  // render the index template
  res.status(200).send("Server OK");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
