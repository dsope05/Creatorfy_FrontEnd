import { useState } from 'react';
import styles from '../styles/services.module.css'
import Image from 'next/image'
import { useQuery } from '@apollo/client';
import { USER_CREATOR } from '../graphql/queries';
import CreatorfyStars from './CreatorfyStars';
import { useRouter } from 'next/router';
import ReactStars from 'react-rating-stars-component';

interface Service {
  reviewAverage: string;
  description: string;
  title: string;
  bronzeServicePrice: number;
  photos: string;
}

const Service = ({ reviewAverage, description, title, bronzeServicePrice, photos }) => {
  const [rating, totalReviews] = reviewAverage.split(',');
  return (
    <div className={styles.service}>
      <div className={styles.serviceImageWrapper}>
        <Image
          className={styles.servicesImage}
          alt="Image"
          src="/creatorCardImage.jpg"
          width="392"
          height="305"
      />
      </div>
      <div className={styles.container}>
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
          <ReactStars
            value={rating}
            count={1}
            size={24}
            color="#f0f0f0"
            activeColor="#C637B3"
          />
          <span className={styles.creatorfyStarsText}>
            <div className={styles.rating}>
              {rating} 
              <div className={styles.reviews}>
              ({totalReviews} Reviews)
              </div>
            </div>
          </span>
          <div className={styles.startingAt}>
            Starting at
          </div>
          <div className={styles.price}>
            ${ bronzeServicePrice }
          </div>
        </div>
      </div>
</div>
)
}
const ServicesView = ({ servicesDisplay }) => (
  <div className={styles.servicesContainer}>
    { servicesDisplay }
  </div>
);

const MerchView= () => (
  <div className={styles.merchContainer}>
    MerchView
  </div>
);

export default function Services() {
  const { profile: handle } = useRouter().query;
  const [selectedService, selectMenu] = useState('services');
  const { loading, error, data } = useQuery(USER_CREATOR, {
    skip: !handle,
    variables: { handle }
  });
  const services = data?.userCreators?.items?.[0]?.services ?? [];
  const servicesDisplay = services.map((service) => {
    const { reviewAverage, description, title, tiers: [bronzeTier], photos } = service;
    const bronzeServicePrice = bronzeTier.price;
    return (
      <Service
        photos={photos}
        reviewAverage={reviewAverage}
        description={description}
        title={title}
        bronzeServicePrice={bronzeServicePrice}
    />);
  })
  const servicesView = selectedService === 'services' ? 'selected' : 'unSelected';
  const merchView = selectedService === 'merch' ? 'selected' : 'unSelected';
  return (
    <div>
      <div className={styles.menu}>
        <span
          onClick={() => selectMenu('services')}
          className={`${styles.servicesMenuButton} ${styles[servicesView]}`}
        >
          Services
        </span>
        <span
          onClick={() => selectMenu('merch')}
          className={`${styles.merchMenuButton} ${styles[merchView]}`}
          >
            Merch
        </span>
      </div>
      {
        servicesView === 'selected' && (
          <ServicesView servicesDisplay={servicesDisplay}/>
        )
      }
      {
        merchView === 'selected' && (
          <MerchView />
        )
      }
    </div>
  )
}
