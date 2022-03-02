import Image from 'next/image'
import styles from '../../styles/BookMeNavigation.module.css';

interface Props {
  month: string;
  onTodayClick: () => void;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const BookMeNavigation = ({
  month,
  onTodayClick,
  onPreviousClick,
  onNextClick,
}: Props): JSX.Element => (
  <section className={styles.navigationContainer}>
    <select className={styles.timezones}>
      <option>USA/Pacific</option>
    </select>
    <label className={styles.monthLabel}>{month}</label>
    <div className={styles.navigationButtons}>
      <button onClick={onTodayClick} className={styles.todayButton} aria-label="today">
        <Image
          alt="today"
          src="/bookmeNavigationCalendar.png"
          width="20"
          height="20"
        />
      </button>
      <button onClick={onPreviousClick} className={styles.previousButton} aria-label="previous week">
        <Image
          alt="today"
          src="/bookmeNavigationLeft.png"
          width="20"
          height="20"
        />
      </button>
      <button onClick={onNextClick} className={styles.nextButton} aria-label="next week">
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
