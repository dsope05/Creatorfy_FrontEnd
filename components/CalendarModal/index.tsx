import { Dispatch, SetStateAction } from 'react';
import CalendarDate from './CalendarDate';
import { getMonthPlaceholderDates } from '../utils/dateUtils';
import styles from '../../styles/CalendarModal.module.css'

interface CalendarModalProps {
  isOpen: boolean;
  date: Date;
  startDateMonth: string;
  todayString: string;
  dayLabels?: string[];
  setStartDate: Dispatch<SetStateAction<Date>>;
  closeCalendarModal: () => void;
}

const CalendarModal = ({
  isOpen,
  date,
  startDateMonth,
  todayString,
  dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  setStartDate,
  closeCalendarModal,
}: CalendarModalProps) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const {
    lastDate,
    lastDay,
    previousMonthPlaceholderDates,
    nextMonthPlaceholderDates,
  } = getMonthPlaceholderDates({ year, month });

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
          {previousMonthPlaceholderDates.map((placeholderDate) => (
            <CalendarDate
              name={`placeholder-${placeholderDate}`}
              key={`placeholder-${placeholderDate}`}
              DD={placeholderDate}
              handleClick={() => setStartDate(new Date())}
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
                handleClick={() => setStartDate(new Date())}
                isToday={todayString === dateString}
              />
            )
          })}
          {lastDay !== 6
            ? nextMonthPlaceholderDates.map((placeholderDate) => (
                <CalendarDate
                  name={`placeholder-${placeholderDate}`}
                  key={`placeholder-${placeholderDate}`}
                  DD={placeholderDate}
                  handleClick={() => setStartDate(new Date())}
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
