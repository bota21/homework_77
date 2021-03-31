const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./fileDb");
const imageBoard = require("./app/imageBoard");
const port = 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/ib", imageBoard(db));

app.listen(port, () => {
  console.log("Server started at port " + port);
});
