const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const ChartData = require("./model/chartDataModel"); // path to your schema file
require("dotenv").config();

const URI = process.env.MONGO_URI;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database Connected"));

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//ROUTES 1 (GET CHART DATA)

app.get("/chartdata", async (req, res) => {
  try {
    const data = await ChartData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("i am main");
});
