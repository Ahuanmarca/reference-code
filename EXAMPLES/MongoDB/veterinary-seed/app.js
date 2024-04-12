import fs from "fs";
// import { parse } from "csv-parse";
import mongoose from "mongoose";
import CsvReadableStream from "csv-reader";

mongoose.connect(
  "mongodb+srv://renzobelon:admin@cluster0.agndzxp.mongodb.net/",
  { dbName: "veterinaryDb" }
);
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
mongoose.connection.once("open", () => {
  console.log("veterinaryDB Database Connected");
});

function generateMongoDBIds(quantity) {
  const objectIdArray = [];
  for (let i = 0; i < quantity; i++) {
    const newId = new mongoose.Types.ObjectId()
    objectIdArray.push(newId);
  }
  return objectIdArray;
}
const uniqueIdsArray = generateMongoDBIds(100);
console.log(uniqueIdsArray);

async function seedClients() {

  const clientsData = [];
  const inputStream = fs.createReadStream("./data/clients-data.csv", "utf8");
  inputStream
    .pipe(new CsvReadableStream({ asObject: true }))
    .on("data", (row) => {
      const client = {
        _id: uniqueIdsArray.pop(),
        name: row.GivenName,
        surname: row.Surname,
        secondSurname: row.MothersMaiden,
        document: {
          type: 'dni',
          number: row.NationalID,
        },
        email: row.EmailAddress,
        phone: {
          countryCode: row.TelephoneCountryCode,
          number: row.TelephoneNumber,
        },
        address: {
          street: row.StreetAddress.split(" ").slice(0, -1).join(" "),
          number: row.StreetAddress.split(" ").at(-1),
          city: row.City,
          state: row.StateFull,
          postalCode: row.ZipCode,
          country: row.CountryFull,
        },
      };
      clientsData.push(client);
    })
    .on("end", () => {
      console.log(clientsData);
      console.log("Finished reading document")
    });
}

(async () => await seedClients())();