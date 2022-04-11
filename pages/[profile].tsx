import styles from '../styles/Profile.module.css'
import Header from '../components/header'
import CreatorCard from '../components/creatorCard'
import Services from '../components/services'
import { useQuery } from '@apollo/client';

interface ProfileProps {
  handle: string;
}

export default function Profile({ handle }: ProfileProps) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.creatorCard}>
        <CreatorCard handle={handle} />
      </div>
      <div className={styles.services}>
        <Services handle={handle}/>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  return { paths: ['/profile'], fallback: true }
}
export async function getStaticProps({ params }: { params: { profile: string }}) {
  // Fetch necessary data for the blog post using params.id
  return { props: { handle: params.profile } }
}