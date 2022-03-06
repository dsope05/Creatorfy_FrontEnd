import { useState } from 'react';
import BookMe from '../../components/BookMe';
import { convertDateToUtc } from '../../components/utils/dateUtils';

const BookMePreview = () => {
  const [appointments, setAppointments] = useState<Date[]>([]);

  const selectAppointment = (newAppointments: Date[]): void =>
    setAppointments(newAppointments);

  const createAppointment = (newAppointments: Date[]): void => {
    const appointments = newAppointments.map((date: Date) => convertDateToUtc(date));
    console.log('Appointments: ', appointments);
  };

  return (
    <BookMe
      appointments={appointments}
      creatorName="Creatorfy"
      description="Choose a time that works for you."
      handleChange={selectAppointment}
      handleSubmit={createAppointment}
    />
  );
};

export default BookMePreview;
