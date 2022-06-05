require("dotenv").config();
const express = require("express");
const app = express();

const charactersRouter = require("./routes/charactersRouter");

app.use(express.json());

app.use("/characters", charactersRouter);

module.exports = app;
