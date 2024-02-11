import express from "express";
import { databaseConnection } from "./config/databaseConnection.js";
import Kitten from "./models/Kitten.js";

main().catch((err) => console.log(err));

async function main() {
  await databaseConnection("mongodb://127.0.0.1:27017/test");
  const app = express();

  const kittens = await Kitten.find();
  console.log(kittens);
  kittens[3].speak();

  app.listen(3000, () => {
    console.log("Express app listening on port 3000");
  });
}
