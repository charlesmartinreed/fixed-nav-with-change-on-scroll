if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const keyPublic = process.env.STRIPE_PUBLIC_KEY;
const keyPrivate = process.env.STRIPE_PRIVATE_KEY;

const stripe = require("stripe")(keyPrivate);

// VIEW ENGINE
// app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));

// ROUTES

// START SERVER

app.listen(4500, () => {
  console.log("app is now running");
});
