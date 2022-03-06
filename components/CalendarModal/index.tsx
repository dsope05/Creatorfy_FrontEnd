import { Dispatch, SetStateAction } from 'react';
import CalendarDate from './CalendarDate';
import { getMonthPlaceholderDates } from '../utils/dateUtils';
import styles from '../../styles/CalendarModal.module.css'

interface CalendarModalProps {
  isOpen: boolean;
  startDate: Date;
  startDateMonth: string;
  dayLabels?: string[];
  setStartDate: Dispatch<SetStateAction<Date>>;
  closeCalendarModal: () => void;
}

const CalendarModal = ({
  isOpen,
  startDate,
  startDateMonth,
  dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  setStartDate,
  closeCalendarModal,
}: CalendarModalProps) => {
  const year = startDate.getFullYear();
  const month = startDate.getMonth();
  const { lastDate, lastDay, previousMonthDates, nextMonthDates } =
    getMonthPlaceholderDates({ year, month });

  return isOpen ? (
    <div className={styles.modalContainer} onClick={closeCalendarModal}>
      <div className={styles.modal}>
        <label className={styles.monthLabel}>{startDateMonth}</label>
        <article className={styles.month} aria-label="month">
          {dayLabels.map((label) => (
            <span key={label} className={styles.dayLabel}>
              {label}
            </span>
          ))}
          {previousMonthDates.map((previousMonthDate) => (
            <CalendarDate
              name={previousMonthDate.toLocaleDateString()}
              key={previousMonthDate.toLocaleDateString()}
              DD={previousMonthDate.getDate()}
              handleClick={() => setStartDate(previousMonthDate)}
              isPlaceholder
            />
          ))}
          {Array.from({ length: lastDate }, (_, i) => i + 1).map((DD) => {
            const dateString = `${month + 1}/${DD}/${year}`;
            return (
              <CalendarDate
                name={dateString}
                key={DD}
                DD={DD}
                handleClick={() => setStartDate(new Date(dateString))}
                isToday={startDate.toLocaleDateString() === dateString}
              />
            );
          })}
          {lastDay !== 6
            ? nextMonthDates.map((nextMonthDate) => (
                <CalendarDate
                  name={nextMonthDate.toLocaleDateString()}
                  key={nextMonthDate.toLocaleDateString()}
                  DD={nextMonthDate.getDate()}
                  handleClick={() => setStartDate(nextMonthDate)}
                  isPlaceholder
                />
              ))
            : null}
        </article>
      </div>
    </div>
  ) : null;
};

export default CalendarModal;
