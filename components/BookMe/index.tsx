import { ReactNode } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import { parseDateToTime } from '../utils/dateUtils';
import styles from '../../styles/BookMe.module.css';
import BookMeNavigation from './BookMeNavigation';

interface BookMeProps {
  creatorName: string;
  description: string;
  appointments: Date[];
  unavailableAppointments?: Date[];
  onTodayClick: () => void;
  onPreviousClick: () => void;
  onNextClick: () => void;
  handleChange: (appointments: Date[]) => void;
  handleSubmit: (appointments: Date[]) => void;
};

const BookMe = ({
  creatorName,
  description,
  appointments,
  unavailableAppointments = [],
  onTodayClick,
  onPreviousClick,
  onNextClick,
  handleChange,
  handleSubmit,
}: BookMeProps) => {
  const today = new Date();
  const todayString = today.toLocaleDateString();
  const timeInMilliseconds = today.getTime();

  const renderDateLabel = (date: Date): ReactNode => (
    <article className={styles.dateLabelCell}>
      {todayString === date.toLocaleDateString() && (
        <label className={styles.todayLabel}>TODAY</label>
      )}
      <label className={styles.weekdayLabel}>
        {date.toLocaleString('default', { weekday: 'short' })}
      </label>
      <label className={styles.dateLabel}>{date.getDate()}</label>
    </article>
  );

  const renderDateCell = (time: Date, selected: boolean): ReactNode => {
    const isUnselectable =
      timeInMilliseconds > time.getTime() ||
      unavailableAppointments.includes(time);
    return (
      <article
        className={
          isUnselectable
            ? styles.unselectableDateCell
            : selected
              ? styles.selectedDateCell
              : styles.dateCell
        }
      >
        {parseDateToTime(time)}
      </article>
    );
  };

  return (
    <div className={styles.bookMeContainer}>
      <h1 className={styles.creatorName}>{creatorName}</h1>
      <p className={styles.description}>{description}</p>
      <BookMeNavigation
        month={`${today.toLocaleString('default', {
          month: 'long',
        })} ${today.getFullYear()}`}
        onTodayClick={onTodayClick}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
      />
      <section className={styles.scheduleSelectorContainer}>
        <ScheduleSelector
          selection={appointments}
          minTime={8}
          maxTime={17}
          dateFormat="D"
          rowGap="8px"
          columnGap="24px"
          onChange={handleChange}
          onSubmit={handleSubmit}
          renderDateLabel={renderDateLabel}
          renderDateCell={renderDateCell}
        />
      </section>
    </div>
  );
};

export default BookMe;
