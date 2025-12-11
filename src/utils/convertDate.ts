export default function convertUTCtoReadable(utc: string) {
  console.log(`ORIGINAL: ${utc}`);
  const date = new Date(utc);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  console.log(`DAY: ${day} MONTH: ${month} YEAR: ${year}`);
  return `${day}/${month}/${year}`;
}
