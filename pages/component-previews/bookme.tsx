import { useState } from 'react';
import BookMe from '../../components/BookMe';

const BookMePreview = () => {
  const [appointments, setAppointments] = useState<Date[]>([]);

  const selectAppointment = (newAppointments: Date[]): void =>
    setAppointments(newAppointments);

  const createAppointment = (newAppointments: Date[]): void =>
    setAppointments(newAppointments);

  const onTodayClick = () => {
    console.log('click');
  };

  const onPreviousClick = () => {
    console.log('click');
  };

  const onNextClick = () => {
    console.log('click');
  };

  return (
    <BookMe
      appointments={appointments}
      creatorName="Creatorfy"
      description="Choose a time that works for you."
      onTodayClick={onTodayClick}
      onPreviousClick={onPreviousClick}
      onNextClick={onNextClick}
      handleChange={selectAppointment}
      handleSubmit={createAppointment}
    />
  );
};

export default BookMePreview;
