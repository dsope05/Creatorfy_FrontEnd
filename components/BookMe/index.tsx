import { ChangeEventHandler, MouseEventHandler, ReactNode, useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import BookMeNavigation from './BookMeNavigation';
import CalendarModal from '../CalendarModal';
import { MODAL_TYPES, useModalContext } from '../providers/ModalProvider';
import { convertDateToUtc } from '../utils/dateUtils';
import { TimeZone } from '../utils/constants';
import styles from '../../styles/BookMe.module.css';

interface BookMeProps {
  creatorName: string;
  description: string;
  previouslyScheduledAppointments: Date[];
  createAppointments: (appointments: Date[]) => void;
};

const BookMe = ({
  creatorName,
  description,
  previouslyScheduledAppointments,
  createAppointments,
}: BookMeProps) => {
  const { modalType, openModal } = useModalContext();
  const openCalendarModal = (): void => openModal(MODAL_TYPES.BOOK_ME_CALENDAR_MODAL);

  const today = new Date();
  const todayString = today.toLocaleDateString();
  const timeInMilliseconds = today.getTime();

  const [appointments, setAppointments] = useState<Date[]>([]);
  const [startDate, setStartDate] = useState<Date>(today);
  const [timeZone, setTimeZone] = useState<TimeZone>(
    TimeZone[Intl.DateTimeFormat().resolvedOptions().timeZone] || TimeZone.UTC
  );

  const startDateMonth = `${startDate.toLocaleString('default', {
    timeZone,
    month: 'long',
  })} ${startDate.getFullYear()}`;

  const onTimeZoneChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTimeZone(TimeZone[e.target.value] || TimeZone.UTC);
  };

  const selectAppointment = (newAppointments: Date[]): void =>
    setAppointments(newAppointments);

  const onPreviousClick = () => {
    const previousWeekStartDate = new Date(startDate.getTime());
    previousWeekStartDate.setDate(previousWeekStartDate.getDate() - 7);
    setStartDate(previousWeekStartDate);
  };

  const onNextClick = () => {
    const nextWeekStartDate = new Date(startDate.getTime());
    nextWeekStartDate.setDate(nextWeekStartDate.getDate() + 7);
    setStartDate(nextWeekStartDate);
  };

  const onConfirmClick: MouseEventHandler<HTMLButtonElement> = () => {
    const newAppointments = appointments
      .filter((date: Date) => !previouslyScheduledAppointments.includes(date))
      .map((date: Date) => convertDateToUtc(date));
    createAppointments(newAppointments);
  };

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
      previouslyScheduledAppointments.includes(date);
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
        isOpen={modalType === MODAL_TYPES.BOOK_ME_CALENDAR_MODAL}
        startDate={startDate}
        startDateMonth={startDateMonth}
        setStartDate={setStartDate}
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
            startDate={startDate}
            selection={appointments}
            minTime={8}
            maxTime={17}
            dateFormat="D"
            rowGap="8px"
            columnGap="24px"
            onChange={selectAppointment}
            renderDateLabel={renderDateLabel}
            renderDateCell={renderDateCell}
          />
        </section>
        <button className={styles.confirmButton} onClick={onConfirmClick}>
          CONFIRM
        </button>
      </div>
    </>
  );
};

export default BookMe;
