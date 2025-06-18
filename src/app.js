"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

const index = require("./routes/index");
const getProviders = require("./routes/provider-route");
const products = require("./routes/products");
const providers = require("./routes/providers");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/product", products);
app.use("/provider", providers);
app.use("/providers", getProviders);
app.use("/", index);

module.exports = app;
