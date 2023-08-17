require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const request = axios.create({
  baseURL: process.env.JSON_API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

app.post("/account/login", async (req, res) => {
  await request
    .post("/Account/SignIn", req.body)
    .then((jsonResponse) => {
      const accessToken = jwt.sign(req.body, process.env.SECRET_ACCESS_TOKEN);
      res.send({
        success: true,
        data: {
          user: jsonResponse.data,
          accessToken: accessToken,
        },
        message: "Login Successful.",
      });
    })
    .catch((error) => {
      res.send({
        success: false,
        data: null,
        message: error.response?.data?.message || error.message,
      });
    });
});

app.listen(process.env.PORT, () => {
  console.log("Server started!");
});
