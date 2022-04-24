import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useMutation, useQuery, MutationTuple, OperationVariables, DefaultContext, ApolloCache, QueryResult } from '@apollo/client';
import { DIGG_MUTATION } from '../../graphql/mutations';
import { GET_BANNER_INFO } from '../../graphql/queries';
import MainBanner from "./MainBanner";
import MiniBanner from "./MiniBanner";
import { ServiceInfo } from '../utils/types';
import gravatar from '../../public/logo.svg';
import styles from '../../styles/Banner.module.css';

export const Banner: FC = (): JSX.Element => {
    const [location, setLocation]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');

    useEffect(() => {
        setLocation(window.location.origin)
    }, []);

    const { query }: NextRouter = useRouter();

    const [diggMutation]:MutationTuple<any, OperationVariables, DefaultContext, ApolloCache<any>> = useMutation(DIGG_MUTATION);

    const QueriedBanner: FC = (): JSX.Element => {
        const { data }: QueryResult<any, { handle: string | string[]; }> = useQuery(GET_BANNER_INFO, {
            variables: {handle: query.profile}
        });

        const service = data?.userCreators?.items?.[0]?.services?.find(service => service.id === query.serviceId);
        if(!service) return (<></>);
        const { id, meetable, reviewAverage, title }: ServiceInfo = service;
        const reviewAverages: string[] = reviewAverage?.split(',') ?? [];
        const starScore: string = reviewAverages ? reviewAverages[0] : '';
        const reviewScore: string = reviewAverages ? reviewAverages[1] : '';
        const username: string = data?.userCreators?.items[0]?.handle;
        const gravatarUrl:string = data?.userCreators?.items[0]?.extraPublic?.profile_photo ?? gravatar;

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
                    creatorUrl={ `${location}/${ username }` }
                    pageText={ 'Services' }
                    pageUrl={ `${location}/${ username }/services` }
                    gravatarUrl={ gravatarUrl }
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