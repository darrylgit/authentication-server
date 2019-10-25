// Main starting poitn of the app

// Equivalent to import syntax:
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

// DB Setup
mongoose.connect("mongodb://localhost:auth/auth", {
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true
});

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
