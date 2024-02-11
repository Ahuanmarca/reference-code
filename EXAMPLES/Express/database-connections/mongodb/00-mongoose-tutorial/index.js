// getting-started.js
// const mongoose = require("mongoose");
import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("Database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  const kittySchema = new mongoose.Schema({
    name: String,
    birth: Date,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);
  await Kitten.deleteMany({});

  const silence = new Kitten({ name: "Silence", birth: "2019-06-05" });
  const fluffy = new Kitten({ name: "fluffy", birth: "2022-02-16" });
  const cosmo = new Kitten({
    name: "Cosmo",
    birth: new Date("2014-11-03"),
  });
  const moshi = new Kitten({
    name: "Moshi Moshi",
    birth: new Date("2008-04-23"),
  });
  // fluffy.speak(); // "Meow name is fluffy";

  await fluffy.save();
  await silence.save();
  await cosmo.save();
  await moshi.save();

  const kittens = await Kitten.find();
  console.log(kittens);
  kittens[3].speak();
}
