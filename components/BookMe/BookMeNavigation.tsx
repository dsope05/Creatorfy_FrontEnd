import { ChangeEventHandler } from 'react';
import IconButton from '../Button/IconButton';
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
      <IconButton
        onClick={openCalendarModal}
        ariaLabel="today"
        imageAlt="calendar navigation icon"
        imageSrc="/bookmeNavigationCalendar.png"
        buttonClass={styles.todayButton}
      />
      <IconButton
        onClick={onPreviousClick}
        ariaLabel="previous week"
        imageAlt="left arrow"
        imageSrc="/bookmeNavigationLeft.png"
        buttonClass={styles.previousButton}
      />
      <IconButton
        onClick={onNextClick}
        ariaLabel="next week"
        imageAlt="right arrow"
        imageSrc="/bookmeNavigationRight.png"
        buttonClass={styles.nextButton}
      />
    </div>
  </section>
);

export default BookMeNavigation;
