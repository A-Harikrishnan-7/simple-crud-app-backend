const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const Product = require("./models/product.models.js");
app.use(express.urlencoded({ extended: false }));
const productRoutes = require("./routes/products.routes");
const dotenv = require("dotenv");
dotenv.config();

app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ..`));
