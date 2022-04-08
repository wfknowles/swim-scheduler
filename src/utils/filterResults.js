export const filterResults = (results, filter) => {

  let filteredResults = results;

  if (filter.dayOfWeek !== '') {

    filteredResults = filteredResults.map(days => {
      return {
        date: days.date,
        times: days.times.filter(day => day.students[0].opening.day_of_week === parseInt(filter.dayOfWeek))
      };
    });

  }

  if (filter.timeOfDay !== '') {

    filteredResults = filteredResults.map(days => {
      return {
        date: days.date,
        times: filterTimeOfDay(days, filter.timeOfDay)
      };
    });

  }

  if (filter.instructorGender !== '') {

    filteredResults = filteredResults.map(days => {
      return {
        date: days.date,
        times: days.times.filter(day => day.students[0].opening.employee.gender === filter.instructorGender)
      };
    });

  }

  return filteredResults;
}

const filterTimeOfDay = (days, filter) => {
    
  let min, max;

  if (filter === "morning") {
    min = Date.parse(`${days.date} 08:00:00`);
    max = Date.parse(`${days.date} 11:59:00`);
  }

  if (filter === "afternoon") {
    min = Date.parse(`${days.date} 12:00:00`);
    max = Date.parse(`${days.date} 15:59:00`);
  }

  if (filter === "evening") {
    min = Date.parse(`${days.date} 16:00:00`);
    max = Date.parse(`${days.date} 23:59:00`);
  }

  return days.times.filter(day => {
    
    const currentDateTime = Date.parse(`${days.date} ${day.time}`);

    if (currentDateTime >= min && currentDateTime <= max) {
      return true;
    } else {
      return false;
    }

  });

}