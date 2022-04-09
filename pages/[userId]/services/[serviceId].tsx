import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceTiersCard from '../../../components/ServiceCheckout/ServiceTiersCard';

import styles from '../../../styles/ServiceCheckout.module.scss';

function renderCarousel() {
  return (
    <Carousel slide={true} controls={true} touch={true}>
      <Carousel.Item>
        <img
          className={styles.carouselImg}
          src="https://i.picsum.photos/id/294/800/600.jpg?hmac=X4RiVynizog5zMK1YZqNYt7sT1XJVHx4bRv9ZDCpPwI"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carouselImg}
          src="https://i.picsum.photos/id/450/800/600.jpg?hmac=fAIt1IVhzEQvLDMLgNCWhcjPg5umHJOUNc03F9Rajxw"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carouselImg}
          src="https://i.picsum.photos/id/89/800/600.jpg?hmac=jttYVfCxmmpZ7KDg9eYKLWLfedgtY7txmpySXNHtw5k"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function renderFAQAccordian() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default function ServiceCheckout() {
  const { userId, serviceId } = useRouter().query;
  const [isStickyScroll, setIsStickyScroll] = useState(false);
  const [serviceTiersCardYOffset, setServiceTiersCardYOffset] =
    useState(undefined);

  const serviceTiersContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isStickyScroll &&
        serviceTiersCardYOffset === undefined &&
        serviceTiersContainerRef.current
      ) {
        setServiceTiersCardYOffset(
          serviceTiersContainerRef.current.offsetTop - 48
        );
      }
      if (serviceTiersContainerRef.current) {
        if (!isStickyScroll && window.pageYOffset >= serviceTiersCardYOffset) {
          setIsStickyScroll(true);
        } else if (
          isStickyScroll &&
          window.pageYOffset < serviceTiersCardYOffset
        ) {
          setIsStickyScroll(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    serviceTiersContainerRef,
    isStickyScroll,
    setIsStickyScroll,
    serviceTiersCardYOffset,
    setServiceTiersCardYOffset,
  ]);

  return (
    <>
      <p>
        {userId}/{serviceId}
      </p>
      <Row>
        <Col lg={6} md={12}>
          {renderCarousel()}
          <div className={styles.serviceCardInfo}>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus
              consectetur netus non faucibus malesuada in amet. Ut risus
              consectetur netus non faucibus malesuada in amet.
            </p>
          </div>

          <div className={styles.serviceCardInfo}>
            <h3>FAQs</h3>
            {renderFAQAccordian()}
            <button
              type="button"
              className={`btn btn-secondary ${styles.serviceBtn}`}
            >
              Ask a Question?
            </button>
          </div>

          <div className={styles.serviceCardInfo}>
            <h3>Reviews</h3>

            <button
              type="button"
              className={`btn btn-primary ${styles.serviceBtn}`}
              disabled={true}
            >
              <strong>Leave a Review</strong>
            </button>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div
            ref={serviceTiersContainerRef}
            className={`${styles.serviceTiersContainer} ${
              isStickyScroll ? styles.stickyScroll : ''
            }`}
          >
            <ServiceTiersCard />
          </div>
        </Col>
      </Row>
    </>
  );
}
