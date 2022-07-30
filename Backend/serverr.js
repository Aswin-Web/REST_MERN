const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexroutes = require("./routes/indexroutes");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/CRUD");
const User = require("./models/user");
const cors =require("cors")

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// ROUTES
app.use("/", indexroutes);

app.listen(5000, () => {
  console.log("SERVER STARTED");
});
