const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const Product = require("./models/product.models.js");
app.use(express.urlencoded({ extended: false }));
const productRoutes = require("./routes/products.routes");

app.use("/api/products", productRoutes);

mongoose
  .connect(
    "mongodb+srv://harimongo:SkOGeZp4kxvJbX62@backenddb.yazkg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ..`));
