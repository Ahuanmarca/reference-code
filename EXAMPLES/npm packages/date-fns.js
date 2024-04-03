// date-fns examples
import { format, isValid, isBefore, isSameMonth } from "date-fns";

// Format current date in yyyy-mm-dd format
format(new Date(), "yyyy-MM-dd");

// Check if a string is a valid date
// Will consider any day up to 31 as a valid date, for any month
isValid(new Date('foo'));
isValid(new Date('2024-02-29'));

function isValidDate(dateString: any) {
    // Regular expression to match 'yyyy-mm-dd' format
    var regex = /^\d{4}-\d{2}-\d{2}$/;

    // Check if the string matches the regex
    if (!regex.test(dateString)) {
        return false;
    }

    // Parse the string into a Date object
    var dateObject = new Date(dateString);

    // Check if the dateObject is a valid date
    // and if the parsed year, month, and day match the input string
    return !isNaN(dateObject.getTime()) &&
        dateObject.toISOString().slice(0, 10) === dateString;
}

isValidDate('2020-02-29'); // true
isValidDate('2021-02-29'); // false (2021 is not a leap year)
isValidDate('hello');
isValidDate('17-12-1981');
isValidDate(undefined);

isBefore(new Date('2023-02-01'), new Date('2023-03-01'));
isBefore(new Date('2023-02-01'), new Date('2023-01-01'));
isSameMonth(new Date('2023-02-01'), new Date('2023-02-15'));
isSameMonth(new Date('2023-02-01'), new Date('2023-03-15'));
