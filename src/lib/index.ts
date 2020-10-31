const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
];
var newDate = new Date();
var day = newDate.getDay();
var hours = newDate.getHours();
var minutes =
  newDate.getMinutes().toString().length > 1
    ? newDate.getMinutes()
    : `0${newDate.getMinutes()}`;

export const today = `${dayList[day]}, ${hours}:${minutes}`;

export const greeting =
  hours < 12
    ? 'Good Morning,'
    : hours < 18
    ? 'Good Afternoon,'
    : 'Good Evening,';
