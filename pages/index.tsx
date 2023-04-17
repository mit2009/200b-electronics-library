import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import cx from 'classnames';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mainImage}>
        <Image src="/images/home.jpg" alt="2.00b" width={960} height={520} />
      </div>
      <h1>
        2.00b <span className={styles.themed}>Resources</span> Website!
      </h1>
      <p>
        Hello! This is the companion website to{' '}
        <a href="https://mit.edu/2.00b">2.00b's Homepage</a> containing some
        helpful toy design tips!
      </p>
      <div className={styles.topics}>
        <Link href="/toobers/">
          <div className={styles.topic}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/toobers-icon.png"
                alt="Toobers"
                width={257}
                height={183}
              />
            </div>
            <div className={styles.text}>Toobers!</div>
          </div>
        </Link>
        <Link href="/electronics-library/">
          <div className={styles.topic}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/electronics-library-icon.png"
                alt="Toobers"
                width={222}
                height={190}
              />
            </div>
            <div className={styles.text}>Electronics Library</div>
          </div>
        </Link>
        <Link href="/casting-library/">
          <div className={styles.topic}>
            <div className={cx(styles.imageContainer, styles.casting)}>
              <Image
                src="/images/casting-library-icon-full.png"
                alt="Casting Library"
                width={280}
                height={215}
              />
            </div>
            <div className={styles.text}>Casting Library</div>
          </div>
        </Link>
        <Link href="https://web.mit.edu/2.00b/www/index.html">
          <div className={styles.topic}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/website-icon.png"
                alt="Toobers"
                width={215}
                height={164}
              />
            </div>
            <div className={styles.text}>2.00b Main Site</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
