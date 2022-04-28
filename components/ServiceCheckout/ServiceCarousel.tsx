import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/ServiceCarousel.module.scss';

export interface CarouselImgProps {
  title: string;
  url: string;
}

export default function ServiceCarousel(props: { images: CarouselImgProps[] }) {
  return (
    <Carousel slide={true} controls={true} touch={true}>
      {props.images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className={styles.carouselImg}
            src={image.url}
            alt={image.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
