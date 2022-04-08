export const formatTime = (date, time) => {

  const dateTime = new Date(`${date} ${time}`);
  const hour = dateTime.getHours();
  const hourFormatted = hour > 12 ? (hour - 12) : hour;
  const minutes = dateTime.getMinutes();
  const minutesFormatted = minutes === 0 ? '00' : minutes;
  const meridiem = hour >= 12 ? "pm" : "am";
  const formattedTime = `${hourFormatted}:${minutesFormatted} ${meridiem}`;

  return formattedTime;
}

export const formatDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
  const dateTime = new Date(date);
  const currentMonth = months[dateTime.getMonth()];
  const currentDay = dateTime.getDay() + 1;
  const currentYear = dateTime.getFullYear();

  return `${currentMonth} ${currentDay}, ${currentYear}`;
}
