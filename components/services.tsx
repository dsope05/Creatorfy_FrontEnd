import styles from '../styles/services.module.css'
import Image from 'next/image'
import { useQuery } from '@apollo/client';
import { USER_CREATOR } from '../graphql/queries';

interface createStars {
  rating: string;
}


const createStars = (ratingInput: string) => {
  const rating = Number(ratingInput);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span className={styles.star}>
        <Image
          alt="Image"
          src={ rating > i ? "/yellowStar.svg" : "/emptyStar.svg"}
          width="25"
          height="25"
         />
      </span>
    );
  }
  return stars;
}
interface Service {
  reviewAverage: string;
  description: string;
  title: string;
  bronzeServicePrice: number;
}

const Service = ({ reviewAverage, description, title, bronzeServicePrice }) => {
  const [rating, totalReviews] = reviewAverage.split(',')
  const stars = createStars(rating);
  return (
    <div className={styles.service}>
      <div className={styles.serviceImageWrapper}>
        <Image
          className={styles.servicesImage}
          alt="Image"
          src="/creatorCardImage.jpg"
          width="357"
          height="286"
      />
    </div>
    <div className={styles.titleContainer}>
     <div className={styles.logoImageWrapper}>
       <Image
         className={styles.servicesImage}
         alt="Image"
         src="/smashLogo.jpeg"
         width="70"
         height="40"
        />
     </div>
     <p className={styles.serviceTitle}>
       { title }
     </p>
    </div>
    <p className={styles.serviceDescription}>
      { description }
    </p>
    <div className={styles.starWrapper}>
      { stars }
      ({totalReviews} Reviews)
    </div>
    <div className={styles.priceWrapper}>
      <div className={styles.startingAt}>
        Starting at
      </div>
    <div className={styles.price}>
      ${ bronzeServicePrice }
    </div>
  </div>
</div>
)
}

export default function Services() {
  const { loading, error, data } = useQuery(USER_CREATOR, {
    variables: { id: 3 }
  });
  const services = data?.userCreators?.items?.[0]?.services ?? [];
  const servicesDisplay = services.map((service) => {
    const { reviewAverage, description, title, tiers: [bronzeTier] } = service;
    const bronzeServicePrice = bronzeTier.price;
    return (
      <Service 
        reviewAverage={reviewAverage}
        description={description}
        title={title}
        bronzeServicePrice={bronzeServicePrice}
    />);
  })
  return (
    <div>
      <div className={styles.menu}>
        <span className={`${styles.servicesMenuButton} ${styles.selected}`}>
          Services
        </span>
        <span className={styles.merchMenuButton}>
          Merch
        </span>
      </div>
      <div className={styles.servicesContainer}>
        { servicesDisplay }
      </div>
    </div>
  )
}
