import { ChangeEventHandler } from 'react';
import Image from 'next/image'
import { TimeZone } from '../utils/constants';
import styles from '../../styles/BookMeNavigation.module.css';

interface BookMeNavigationProps {
  month: string;
  timeZone: TimeZone;
  onPreviousClick: () => void;
  onNextClick: () => void;
  openCalendarModal: () => void;
  onTimeZoneChange: ChangeEventHandler<HTMLSelectElement>;
}

const BookMeNavigation = ({
  month,
  timeZone,
  openCalendarModal,
  onPreviousClick,
  onNextClick,
  onTimeZoneChange,
}: BookMeNavigationProps): JSX.Element => (
  <section className={styles.navigationContainer}>
    <select
      className={styles.timezones}
      onChange={onTimeZoneChange}
      defaultValue={timeZone}
    >
      {Object.keys(TimeZone).map((tz: string) => (
        <option key={tz} value={tz}>
          {tz.replace('_', ' ')}
        </option>
      ))}
    </select>
    <label className={styles.monthLabel}>{month}</label>
    <div className={styles.navigationButtons}>
      <button
        onClick={openCalendarModal}
        className={styles.todayButton}
        aria-label="today"
      >
        <Image
          alt="today"
          src="/bookmeNavigationCalendar.png"
          width="20"
          height="20"
        />
      </button>
      <button
        onClick={onPreviousClick}
        className={styles.previousButton}
        aria-label="previous week"
      >
        <Image
          alt="today"
          src="/bookmeNavigationLeft.png"
          width="20"
          height="20"
        />
      </button>
      <button
        onClick={onNextClick}
        className={styles.nextButton}
        aria-label="next week"
      >
        <Image
          alt="today"
          src="/bookmeNavigationRight.png"
          width="20"
          height="20"
        />
      </button>
    </div>
  </section>
);

export default BookMeNavigation;
