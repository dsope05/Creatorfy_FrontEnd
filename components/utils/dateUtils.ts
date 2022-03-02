export const parseDateToTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timePeriod = hours < 12 ? 'AM' : 'PM';
  return `${hours < 13 ? hours : hours - 12}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${timePeriod}`;
};
