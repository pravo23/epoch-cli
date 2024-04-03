const getTimeZoneDifferenceWithGMT = () => {
  const localDate = new Date();
  const localOffsetInMinutes = localDate.getTimezoneOffset();
  const gmtOffsetInMinutes = 0; // GMT has an offset of 0 minutes

  const differenceInMinutes = gmtOffsetInMinutes + localOffsetInMinutes;
  const hours = Math.floor(Math.abs(differenceInMinutes) / 60);
  const minutes = Math.abs(differenceInMinutes) % 60;

  // Determine the sign of the offset
  const sign = differenceInMinutes > 0 ? "-" : "+";

  return `GMT${sign}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

const isTimestampFormatInMilliSeconds = (timestamp) => {
  return timestamp.toString().length > 12;
};

module.exports = {
  getTimeZoneDifferenceWithGMT,
  isTimestampFormatInMilliSeconds,
};
