import app from "./app";

const PORT = process.env.PORT || 3000;

// define a route handler for the default home page
app.get("/health", (req, res) => {
  // render the index template
  res.status(200).send("Server OK");
});

// start the express server
app.listen(PORT, (): void => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`);
});
