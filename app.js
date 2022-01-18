var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var session = require("express-session");
const mongodbStore = require("connect-mongodb-session")(session);
const list = require("./schemas/list");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const mongodb = require("mongodb");

const MONGODB_URI =

const store = new mongodbStore({
  uri: MONGODB_URI,
  collection: "session",
});

app.use(cors());
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    store,
    secret: "my secret",
  })
);

var PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/list", async (req, res) => {
  console.log("list hello");
  var responses = await list.find();
  console.log(responses.title);
  var responses = responses;
  console.log(responses)
  res.send(responses);
});

app.post("/blog1", async (req, res) => {
  console.log("blog1");
  const response = await list.find();
  const result = response[0];
  console.log(result);
  res.send(result);
});

app.post("/blog2", async (req, res) => {
  console.log("blog2");
  const response = await list.find();
  const result = response[1];
  console.log(result);
  res.send(result);
});

app.post("/blog3", async (req, res) => {
  console.log("blog3");
  const response = await list.find();
  const result = response[2];
  console.log(result);
  res.send(result);
});

app.post("/edit1", async (req, res) => {
  console.log("Request body", req.body);
  const edit = await list.updateOne(
    { _id: ObjectId("61e36b8501f684db6ef969de")},
    { $set: { body: req.body.editblog } } 
  );
  console.log(edit);
  res.send({ message: "Blog updated" });
});

app.post("/edit2", async (req, res) => {
  console.log("Request body", req.body);
  const edit = await list.updateOne(
    { _id: ObjectId("61e36baa01f684db6ef969df")},
    { $set: { body: req.body.editblog } } 
  );
  console.log(edit);
  res.send({ message: "Blog updated" });
});

app.post("/edit3", async (req, res) => {
  console.log("Request body", req.body);
  const edit = await list.updateOne(
    { _id: ObjectId("61e36c0e01f684db6ef969e0") },
    { $set: { body: req.body.editblog } } 
  );
  console.log(edit);
  res.send({ message: "Blog updated" });
});

mongoose.connect(MONGODB_URI).then(
  app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  })
);
