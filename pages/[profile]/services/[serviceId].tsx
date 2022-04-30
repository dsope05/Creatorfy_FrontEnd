import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceTiersCard from '../../../components/ServiceCheckout/ServiceTiersCard';
import ServiceCarousel from '../../../components/ServiceCheckout/ServiceCarousel';
import { useServiceQuery } from '../../../graphql/queries';

import styles from '../../../styles/ServiceCheckout.module.scss';
import Loading from '../../../components/loading';
import QuestionsAccordion from '../../../components/ServiceCheckout/QuestionsAccoridan';

export default function ServiceCheckout() {
  const router = useRouter();
  const { profile, serviceId } = router.query;
  const [isStickyScroll, setIsStickyScroll] = useState(false);
  const [serviceTiersCardYOffset, setServiceTiersCardYOffset] =
    useState(undefined);

  const serviceTiersContainerRef = useRef(null);

  const { loading, error, data } = useServiceQuery({
    variables: { id: Number(serviceId) },
  });

  // If there's an error, then bail out to seller's service page
  // TODO(ahmed.elzeiny): If specified seller doesn't match retrieved data also bail. Ask how to get seller handle from
  // backend.
  if (error || (data && data.services.items.length !== 1)) {
    console.error(error);
    router.push(`/pages/${profile}`);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isStickyScroll &&
        serviceTiersCardYOffset === undefined &&
        serviceTiersContainerRef.current
      ) {
        setServiceTiersCardYOffset(
          // 48 px is the hard-coded top-padding. Revisit this someday.
          serviceTiersContainerRef.current.offsetTop - 48
        );
      }
      if (serviceTiersContainerRef.current) {
        if (!isStickyScroll && window.scrollY >= serviceTiersCardYOffset) {
          setIsStickyScroll(true);
        } else if (isStickyScroll && window.scrollY < serviceTiersCardYOffset) {
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

  if (loading || error) {
    return <Loading />;
  }

  const service = data.services.items[0];

  console.table(service.photos);
  return (
    <>
      <h2>{service.title}</h2>
      <Row>
        <Col lg={6} md={12}>
          <ServiceCarousel images={service.photos} />
          <div className={styles.serviceCardInfo}>
            <h3>About</h3>
            <p>{service.description}</p>
          </div>

          <div className={styles.serviceCardInfo}>
            <h3>FAQs</h3>
            <QuestionsAccordion questions={service.questions} />
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
            <ServiceTiersCard tiers={service.tiers} />
          </div>
        </Col>
      </Row>
    </>
  );
}
