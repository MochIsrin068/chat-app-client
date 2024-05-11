export function convertUTCtoCustomFormat(utcString: string): string {
  const date = new Date(utcString);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();

  const formattedDate = `${month} ${day < 10 ? "0" + day : day}`;

  return formattedDate;
}

export function convertUTCtoCustomTime(utcString: string): string {
  const date = new Date(utcString);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;

  return formattedTime;
}
