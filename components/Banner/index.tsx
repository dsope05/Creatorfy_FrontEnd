import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { DIGG_MUTATION } from '../../graphql/mutations';
import { GET_SERVICE_INFO, GET_SERVICE_OWNER } from '../../graphql/queries';
import MainBanner from "./MainBanner";
import MiniBanner from "./MiniBanner";
import { onDiggParameters } from '../utils/types';
import styles from '../../styles/Banner.module.css';

const Banner: FC = (): JSX.Element => {
    const [location, setLocation] = useState('');    

    useEffect(() => {
        setLocation(window.location.origin)
    }, [])
    const { query } = useRouter();

    const [diggMutation] = useMutation(DIGG_MUTATION);

    const QueriedBanner = (): JSX.Element => {
        const { data } = useQuery(GET_SERVICE_INFO, {
            variables: {id: Number(query.id)}
        });

        const {id, meetable, reviewAverage, title, serviceType} = data?.services?.items[0] ?? {};
        const reviewAverages = reviewAverage?.split(',');
        const starScore = reviewAverages ? reviewAverages[0] : null;
        const reviewScore = reviewAverages ? reviewAverages[1] : null;
        const { data: handle } = useQuery(GET_SERVICE_OWNER, {
            variables: {id: Number(id)}
        })
        const username = handle?.userCreators?.items[0]?.handle;

        if(!username){
            return(<></>)
        }

        const onDigg = () => {
            diggMutation({
                variables: {
                    input: {
                        id: Number(id),
                        reviewType: 'SERVICE',
                        helpful: true
                    }
                }
            });
        };

        return(
            <>
                <MiniBanner 
                    creatorText = {username}
                    creatorUrl = {`${location}/${username}`}
                    pageText = {serviceType}
                    pageUrl = {`${location}/services/${id}`}
                />
                <MainBanner
                    title = { title }
                    onDigg = { onDigg }
                    starScore = { starScore }
                    reviewScore = { reviewScore }
                    eventable = { meetable }
                    username= { username }
                />
            </>
        )
    }

    return(
        <div className={styles.banner}>
            <QueriedBanner />
        </div>
    )
}

export default Banner;