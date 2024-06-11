const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello from Express (Firebase Emulator)");
});


exports.app = functions.https.onRequest(app);
