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

const getPreviousDay = (date: Date = new Date()) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);
  return previous;
};

const getNextDay = (date: Date = new Date()) => {
  const next = new Date(date.getTime());
  const nextDate = date.getDate() + 1;
  next.setDate(nextDate);

  if (nextDate === 1) {
    next.setMonth(date.getMonth() + 1);
  }

  return next;
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
  previousMonthDates: Date[];
  nextMonthDates: Date[];
} => {
  const isJanuary = month === 1;
  const monthStartDay = isJanuary
    ? new Date(year - 1, 12).getDay()
    : new Date(year, month - 1).getDay();
  const previousMonthEnd = isJanuary
    ? new Date(year - 1, 12, 0)
    : new Date(year, month - 1, 0);
  const monthEnd = new Date(year, month, 0);

  const previousMonthDates = [];
  let prevMonthDate = previousMonthEnd;
  while (previousMonthDates.length < monthStartDay) {
    previousMonthDates.unshift(prevMonthDate);
    prevMonthDate = getPreviousDay(prevMonthDate);
  }

  const nextMonthDates = [];
  let nextMonthDate = getNextDay(monthEnd);
  while (nextMonthDates.length < 6 - monthEnd.getDay()) {
    nextMonthDates.push(nextMonthDate);
    nextMonthDate = getNextDay(nextMonthDate);
  }

  return {
    lastDate: monthEnd.getDate(),
    lastDay: monthEnd.getDay(),
    previousMonthDates,
    nextMonthDates,
  };
};
