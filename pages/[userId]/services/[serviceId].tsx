import { useRouter } from 'next/router';

export default function Service() {
  const { userId, serviceId } = useRouter().query;
  return (
    <h2>{userId}: {serviceId}</h2>
  );
}