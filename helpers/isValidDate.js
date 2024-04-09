function isValidDate(dateString) {
  // Regular expression to match 'yyyy-mm-dd' format
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  // Check if the string matches the regex
  if (!regex.test(dateString)) {
      return false;
  }

  // Parse the string into a Date object
  const dateObject = new Date(dateString);

  // Check if the dateObject is a valid date
  // and if the parsed year, month, and day match the input string
  return !isNaN(dateObject.getTime()) &&
      dateObject.toISOString().slice(0, 10) === dateString;
}

const dates = ['2021-03-08', '1981-12-17'];

// valid dates
dates.every((date) => isValidDate(date));

// empty array
[].every((date) => isValidDate(date)); // somehow it works

// there is one invalid date
['1981-12-17', '2023-02-29'].every((date) => isValidDate(date));
