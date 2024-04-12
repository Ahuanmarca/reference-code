// Debug Helper
import { format } from 'date-fns';

function debugHelper(incidences) {
  
  const title = incidences[0].title;
  const date = incidences[0].date;
  const time = incidences[0].time;
  
  const formattedTime = format(new Date(time), 'HH:mm');
  const formattedDate = format(new Date(date), 'yyyy-MM-dd');

  const mergedFormattedDateTime = formattedDate + ' ' + formattedTime;
  const mergedDateObject = new Date(mergedFormattedDateTime);
  const formattedMergedDateObject = format(mergedDateObject, 'yyyy-MM-dd HH:mm');

   console.debug({
    title,
    formattedTime,
    formattedDate,
    mergedFormattedDateTime,
    mergedDateObject,
    formattedMergedDateObject
   }) 
}

export default debugHelper;
