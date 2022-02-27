const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
}

app.listen(8800, () => {
  console.log("Backend server is running");
});
