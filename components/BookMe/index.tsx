import { ChangeEventHandler, ReactNode, useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import BookMeNavigation from './BookMeNavigation';
import CalendarModal from '../CalendarModal';
import { TimeZone } from '../utils/constants';
import styles from '../../styles/BookMe.module.css';

interface BookMeProps {
  creatorName: string;
  description: string;
  appointments: Date[];
  unavailableAppointments?: Date[];
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
  onPreviousClick,
  onNextClick,
  handleChange,
  handleSubmit,
}: BookMeProps) => {
  const today = new Date();
  const todayString = today.toLocaleDateString();
  const timeInMilliseconds = today.getTime();

  const [startDate, setStartDate] = useState<Date>(today);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState<boolean>(false);
  const [timeZone, setTimeZone] = useState<TimeZone>(
    TimeZone[Intl.DateTimeFormat().resolvedOptions().timeZone] || TimeZone.UTC
  );

  const startDateMonth = `${today.toLocaleString('default', {
    timeZone,
    month: 'long',
  })} ${today.getFullYear()}`;

  const onTimeZoneChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTimeZone(TimeZone[e.target.value] || TimeZone.UTC);
  };

  const openCalendarModal = (): void => setIsCalendarModalOpen(true);
  const closeCalendarModal = (): void => setIsCalendarModalOpen(false);

  const renderDateLabel = (date: Date): ReactNode => (
    <article className={styles.dateLabelCell}>
      {todayString === date.toLocaleDateString() && (
        <label className={styles.todayLabel}>TODAY</label>
      )}
      <label className={styles.weekdayLabel}>
        {date.toLocaleString('default', { timeZone, weekday: 'short' })}
      </label>
      <label className={styles.dateLabel}>{date.getDate()}</label>
    </article>
  );

  const renderDateCell = (date: Date, selected: boolean): ReactNode => {
    const isUnselectable =
      timeInMilliseconds > date.getTime() ||
      unavailableAppointments.includes(date);
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
        {date.toLocaleTimeString('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
        })}
      </article>
    );
  };

  return (
    <>
      <CalendarModal
        isOpen={isCalendarModalOpen}
        date={startDate}
        startDateMonth={startDateMonth}
        todayString={todayString}
        setStartDate={setStartDate}
        closeCalendarModal={closeCalendarModal}
      />
      <div className={styles.bookMeContainer}>
        <h1 className={styles.creatorName}>{creatorName}</h1>
        <p className={styles.description}>{description}</p>
        <BookMeNavigation
          month={startDateMonth}
          timeZone={timeZone}
          openCalendarModal={openCalendarModal}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
          onTimeZoneChange={onTimeZoneChange}
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
            renderDateLabel={renderDateLabel}
            renderDateCell={renderDateCell}
          />
        </section>
      </div>
    </>
  );
};

export default BookMe;
