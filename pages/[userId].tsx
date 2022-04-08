import { useRouter } from 'next/router';

// todo(mike): Fill out User Page.
export default function UserServices() {
  const { userId } = useRouter().query;
  return (
    <h2>{userId}</h2>
  );
}