import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useMutation, useQuery, MutationTuple, OperationVariables, DefaultContext, ApolloCache, QueryResult } from '@apollo/client';
import { DIGG_MUTATION } from '../../graphql/mutations';
import { GET_SERVICE_INFO, GET_SERVICE_OWNER } from '../../graphql/queries';
import MainBanner from "./MainBanner";
import MiniBanner from "./MiniBanner";
import { ServiceInfo } from '../utils/types';
import styles from '../../styles/Banner.module.css';

const Banner: FC = (): JSX.Element => {
    const [location, setLocation]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');    

    useEffect(() => {
        setLocation(window.location.origin)
    }, [])

    const { query }: NextRouter = useRouter();

    const [diggMutation]:MutationTuple<any, OperationVariables, DefaultContext, ApolloCache<any>> = useMutation(DIGG_MUTATION);

    const QueriedBanner: FC = (): JSX.Element => {
        const { data }: QueryResult<any, { id: number; }> = useQuery(GET_SERVICE_INFO, {
            variables: {id: Number(query.id)}
        });

        const { id, meetable, reviewAverage, title, serviceType }: ServiceInfo = data?.services?.items[0] ?? {};
        const reviewAverages: string[] = reviewAverage?.split(',');
        const starScore: string = reviewAverages ? reviewAverages[0] : null;
        const reviewScore: string = reviewAverages ? reviewAverages[1] : null;
        const { data: handle }: QueryResult<any, { id: number; }> = useQuery(GET_SERVICE_OWNER, {
            variables: { id: Number(id) }
        })
        const username: string = handle?.userCreators?.items[0]?.handle;

        if(!username){
            return(<></>)
        }
        
        const onDigg:Function = (): object => {
            return diggMutation({
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
            <div className={styles.BannerDiv}>
                <MiniBanner 
                    creatorText={ username }
                    creatorUrl={ `${ location }/${ username }` }
                    pageText={ 'Services' }
                    // TODO: update pageUrl value once routes are finalized.
                    pageUrl={ `${ location }/${ username }` }
                />
                <MainBanner
                    title={ title }
                    onDigg={ onDigg }
                    starScore={ Number(starScore) }
                    reviewScore={ Number(reviewScore) }
                    eventable={ meetable }
                    username={ username }
                />
            </div>
        )
    }

    return(
        <div className={styles.banner}>
            <QueriedBanner />
        </div>
    )
}

export default Banner;