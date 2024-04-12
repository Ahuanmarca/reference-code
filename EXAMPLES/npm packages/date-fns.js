// date-fns examples
import { format, isBefore, isSameMonth } from "date-fns";

// Format current date in yyyy-mm-dd format
format(new Date(), "yyyy-MM-dd");

// Chech if some date is before / after another
isBefore(new Date('2023-02-01'), new Date('2023-03-01'));
isBefore(new Date('2023-02-01'), new Date('2023-01-01'));
isSameMonth(new Date('2023-02-01'), new Date('2023-02-15'));
isSameMonth(new Date('2023-02-01'), new Date('2023-03-15'));

// Get range from one year back (first day of month) to current date
const currentDate = new Date();
const end = format(currentDate, "yyyy-MM-dd"); `end: ${end}`;
currentDate.setDate(1);
currentDate.setMonth(currentDate.getMonth() - 11);
const start = format(currentDate, "yyyy-MM-dd"); `start: ${start}`;


