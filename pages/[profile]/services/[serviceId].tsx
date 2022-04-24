import { NextPage } from 'next';
import Banner from '../../../components/Banner/index';
import styles from '../../../styles/ServicePage.module.css';

const ServicePage: NextPage = (): JSX.Element => {
    return(
        <div className={styles.container}>
            <Banner />
        </div>
    )
}

export default ServicePage;