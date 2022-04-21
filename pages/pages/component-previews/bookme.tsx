import BookMe from '../../../components/BookMe';
import styles from '../../../styles/PageLayout.module.css';

const BookMePreview = () => {
  const createAppointments = (newAppointments: Date[]): void => {
    console.log('Appointments: ', newAppointments);
  };

  return (
    <div className={styles.container}>
      <BookMe
        creatorName="Creatorfy"
        description="Choose a time that works for you."
        previouslyScheduledAppointments={[]}
        createAppointments={createAppointments}
      />
    </div>
  );
};

export default BookMePreview;
