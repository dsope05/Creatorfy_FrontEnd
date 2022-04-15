import Image from 'next/image';
import styles from '../../styles/Onboarding.module.css';
import CreatorInput from '../../components/utils/input';
import CreatorButton from '../../components/utils/button';

const Onboarding = () => {
  return (
    <div className={styles.container}>
      <Image alt="CreatorFy Logo" src="/logo.svg" width="200" height="100" />
      <p className={styles.signUp}>Sign up with Creatorfy</p>
      <p className={styles.welcome}>Welcome to the Creator Sign-up page!</p>
      <p className={styles.getStarted}>Le&lsquo;s get started.</p>
      <CreatorInput placeholder="Email" />
      <CreatorInput placeholder="Password" />
      <CreatorInput placeholder="Confirm Password" />
      <p className={styles.respect}>
        Creatorfy respects you as a creator, influencer, business, or fan. We
        make your platform a safe and respectful space.
      </p>
      <span className={styles.policyContainer}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.policy}>I accept the</span>
        <span className={styles.policyBold}>privacy policy</span>
        <span className={styles.policy}>and</span>
        <span className={styles.policyBold}>terms!</span>
      </span>
      <CreatorButton
        onClick={() => console.log('hi')}
        text="Continue"
        type="primary"
        size="large"
      />
      <p className={styles.orSignUp}>Or Sign up With</p>
      <div className={styles.socialLogin}>Google</div>
      <div className={styles.socialLogin}>Facebook</div>
      <div className={styles.socialLogin}>Twitter</div>
    </div>
  );
};

export default Onboarding;
