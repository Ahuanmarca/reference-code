import { Schema, model } from 'mongoose';

const Client = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  secondSurname: {
    type: String,
    required: false,
  },

})
{
  name: GivenName,
  surname: Surname,
  secondSurname: MothersMaiden,
  dni: NationalID,
  email: EmailAddress,
  phone {
    countryCode: TelephoneCountryCode,
    number: TelephoneNumber,
  },
  address: {
    street: StreetAddress.split(" ").slice(0, -1).join(" "),
    number: StreetAddress.split(" ").at(-1),
    city: City,
    state: StateFull,
    postalCode: ZipCode,
    country: CountryFull,
  }
}