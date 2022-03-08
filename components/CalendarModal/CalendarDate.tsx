import { MouseEventHandler } from 'react';
import styles from '../../styles/CalendarDate.module.css';

interface CalendarDateProps {
  DD: number;
  name: string;
  isToday?: boolean;
  isPlaceholder?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const CalendarDate = ({
  DD,
  name,
  isToday = false,
  isPlaceholder = false,
  handleClick,
}: CalendarDateProps) => (
  <button
    aria-label={name}
    className={
      isToday
        ? styles.todayCalendarDate
        : isPlaceholder
        ? styles.placeholderCalendarDate
        : styles.calendarDate
    }
    onClick={handleClick}
  >
    {DD}
  </button>
);

export default CalendarDate;
