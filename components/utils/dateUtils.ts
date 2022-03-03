export const convertDateToUtc = (date: Date): Date => {
  const utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes()
  );

  return new Date(utc);
};

export const getMonthPlaceholderDates = ({
  year,
  month,
}: {
  year: number;
  month: number;
}): {
  lastDate: number;
  lastDay: number;
  previousMonthPlaceholderDates: number[];
  nextMonthPlaceholderDates: number[];
} => {
  const isJanuary = month === 1;
  const monthStartDay = isJanuary
    ? new Date(year - 1, 12).getDay()
    : new Date(year, month - 1).getDay();
  const previousMonthEnd = isJanuary
    ? new Date(year - 1, 12, 0)
    : new Date(year, month - 1, 0);
  const monthEnd = new Date(year, month, 0);

  const previousMonthPlaceholderDates = [];
  let previousMonthDate = previousMonthEnd.getDate();
  while (previousMonthPlaceholderDates.length < monthStartDay) {
    previousMonthPlaceholderDates.unshift(previousMonthDate);
    previousMonthDate -= 1;
  }

  const nextMonthPlaceholderDates = [];
  let nextMonthDate = 1;
  while (nextMonthPlaceholderDates.length < 6 - monthEnd.getDay()) {
    nextMonthPlaceholderDates.push(nextMonthDate);
    nextMonthDate += 1;
  }

  return {
    lastDate: monthEnd.getDate(),
    lastDay: monthEnd.getDay(),
    previousMonthPlaceholderDates,
    nextMonthPlaceholderDates,
  };
};
