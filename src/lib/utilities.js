export function fullName(firstName, lastName) {
  return firstName.concat(lastName);
}

export function shortenFileName(fileName) {
  if (fileName.length > 25) {
    let start = fileName.substring(0,15);
    let end = fileName.substring(fileName.length - 13);
    return start + '...' + end;
  } else {
    return fileName;
  }
}

export function formatDate(dateString) {
  let formattedDate = new Date(dateString);
  return formattedDate.toLocaleDateString();
}

export function nextDay(dateString) {
  let date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  let nextDayString = date.toISOString();
  return nextDayString;
}
