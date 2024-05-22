const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));   

//routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
  res.send("hello from node api up");
});


mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
