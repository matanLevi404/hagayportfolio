const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./dist/hagay-portfolio"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/hagay-portfolio/index.html"));
});

app.listen(3000);