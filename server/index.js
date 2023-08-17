const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).send("Node Express Server running");
});

app.listen(process.env.PORT, () => {
  console.log("Server started!");
});
