import mongoose from "mongoose";

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
export default Kitten;