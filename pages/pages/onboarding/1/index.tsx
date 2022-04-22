import Image from 'next/image';
import styles from '../../../../styles/Onboarding.module.css';
import CreatorInput from '../../../../components/utils/input';
import CreatorButton from '../../../../components/utils/button';

const Onboarding = () => {
  return (
    <div className={styles.container}>
      <Image alt="CreatorFy Logo" src="/logo.svg" width="200" height="100" />
      <p className={styles.onboardingTitleOne}>So You're a Creator and Influencer</p>
      <p className={styles.signUp}>Congratulations! 🎉 </p>
      <p className={styles.getStarted}>From here, you will start doing things like: </p>
      <div className={styles.cardContainer}>
        <div className={styles.onboardingOneCard}>
          <i className={`bi bi-cup-fill creatorfy-pink ${styles.cardIcon}`}></i>
          <div className={styles.setUp}> Set up your own Services</div>
          <ul>
            <li className={styles.setUpList}>
              Offer your talents
            </li>
            <li className={styles.setUpList}>
              Connect with fans
            </li>
            <li className={styles.setUpList}>
              Cooking lessons, Zoom Parties, and whaever you want! 
            </li>
          </ul>
        </div>
        <div className={styles.onboardingOneCard}>
          <i className={`bi bi-tags-fill creatorfy-pink ${styles.cardIcon}`}></i>
          <div className={styles.setUp}> Create Business Packages </div>
          <ul>
            <li className={styles.setUpList}>
              Create new avenues for businesses to partner with you*
            </li>
            <li className={styles.setUpList}>
              Offer product shout-outs
            </li>
            <li className={styles.setUpList}>
              Do product reviews
            </li>
            <li className={styles.setUpList}>
              Sell some ad space
            </li>
            <li className={styles.setUpList}>
              We'll guide you through marketing, business, and spaces
            </li>
          </ul>
        </div>
        <div className={styles.onboardingOneCard}>
          <i className={`bi bi-box2-heart-fill creatorfy-pink ${styles.cardIcon}`}></i>
          <div className={styles.setUp}> Sell your own Merch</div>
          <ul className={styles.setUpMerch}>
            <li className={styles.setUpList}>
              Set up Merch
            </li>
            <li className={styles.setUpList}>
              Connect with Printify
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.dontWorryCard}>
        Don't worry. We'll help you learn about marketing, sponsorships, and ad space along the way.
      </div>
      <CreatorButton
        onClick={() => console.log('onboarding 1')}
        text="Continue"
        type="primary"
        size="large"
      />
      <div className={styles.backBtn}>
        <CreatorButton
          onClick={() => console.log('onboarding 1')}
          text="Back"
          type="secondary"
          size="large"
        />
      </div>
    </div>
  );
};

export default Onboarding;
