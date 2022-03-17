import { MouseEventHandler } from 'react';
import styles from '../../styles/CalendarDate.module.css';

interface CalendarDateProps {
  DD: number;
  name: string;
  isSelectedDate?: boolean;
  isPlaceholder?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const CalendarDate = ({
  DD,
  name,
  isSelectedDate = false,
  isPlaceholder = false,
  handleClick,
}: CalendarDateProps) => (
  <button
    aria-label={name}
    className={
      isSelectedDate
        ? styles.selectedCalendarDate
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
