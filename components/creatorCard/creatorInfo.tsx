import styles from '../../styles/creatorCard.module.css'
import Image from 'next/image'
import CreatorButton from '../utils/button'
import { useQuery } from '@apollo/client';
import { USER_CREATOR } from '../../graphql/queries';
import { useRouter } from 'next/router';

export default function CreatorInfo() {
  const { profile: handle } = useRouter().query;
  const { loading, error, data } = useQuery(USER_CREATOR, {
    skip: !handle,
    variables: { handle }
  });
  const { email, firstName, lastName, extraPublic: { country = '', verified_info = {} } = {} } = data?.userCreators?.items?.[0] ?? {};
  const socialMediaIcons = Object.keys(verified_info).map(mediaApp => {
    return (
      <div className={styles.icon}>
        <Image
          className={styles.image1}
          alt={`${mediaApp} icon`}
          src={`/${mediaApp}Icon.svg`}
          width="19"
          height="18.3"
        />
      </div> 
    );
  })
  return (
    <div className={styles.creatorInfoContainer}>
      <div className={styles.creatorName}>
        { firstName } { lastName }
      </div>
      <div className={styles.creatorHandle}>
        @{ handle }
      </div>
      <div className={styles.icons}>
        { socialMediaIcons }
      </div>
      <div className={styles.creatorDescription}>
        Smash streamer and competitor
      </div>
      <div className={styles.creatorQuote}>
        {'"I play smash competitively! (Sonic is my main) Fire emoji"'}
      </div>
      <div className={styles.country}>
        Country:
        <div className={styles.creatorCountry}>
          { country }
        </div>
      </div>
    </div>
  )
}
