import mongoose from "mongoose";

/**
 * WHY NOT TRY/CATCH BLOCK?
 * Instead of try/catch here, I'm catching errors
 * when calling main() in index.js ... Good/bad practice?
 * Saw this method on the mongoose page.
 */

export async function databaseConnection(uri) {
    await mongoose.connect(uri);
    console.log("Mongoose connected to database");
}
