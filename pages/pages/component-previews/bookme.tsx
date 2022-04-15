import BookMe from '../../../components/BookMe';

const BookMePreview = () => {
  const createAppointments = (newAppointments: Date[]): void => {
    console.log('Appointments: ', newAppointments);
  };

  return (
    <BookMe
      creatorName="Creatorfy"
      description="Choose a time that works for you."
      previouslyScheduledAppointments={[]}
      createAppointments={createAppointments}
    />
  );
};

export default BookMePreview;
