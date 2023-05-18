/* eslint-disable @next/next/no-img-element */
import useSWR from 'swr';

import styles from '../../styles/AllToobers.module.scss';

const Page = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readFiles', fetcher);

  return <div>
    <h1>Toobers!</h1>
    <h2 className={styles.customHeader2}>Presenting... the Toobers designed by the 2.00b Students of <strong>Spring 2023</strong>!</h2>
    <div className={styles.toobersContainer}>
      {data?.map((toober: any) => {
        return <a key={toober}
          href={toober}
          target="_BLANK"
          className={styles.toober}
          rel="noreferrer">
          <img alt={toober} src={toober} />
        </a>
      })}
    </div>
  </div>;
};

export default Page;