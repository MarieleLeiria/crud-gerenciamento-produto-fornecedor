import express from "express";
import bodyParser from "body-parser";
const app = express();
const router = express.Router();

import index from "./routes/index.js";
import getProviders from "./routes/provider-route.js";
import products from "./routes/products.js";
import providers from "./routes/providers.js";

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

export default app;
