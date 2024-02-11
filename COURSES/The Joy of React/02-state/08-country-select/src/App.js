import React from 'react';

import { COUNTRIES } from './data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function App() {
  const [country, setCountry] = React.useState('');

  const countryArr = Object.entries(COUNTRIES);

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          required
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">- Select a country -</option>
          <optgroup label="Countries">
            {countryArr.map(([code, name]) => {
              return (
                <option key={code} value={code}>
                  {name}
                </option>
              );
            })}
          </optgroup>
        </select>
      </fieldset>

      <p className="country-display">
        Selected country: {COUNTRIES[country]}
      </p>

      <button>Submit</button>
    </form>
  );
}

export default App;