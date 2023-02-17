import { useEffect, useState } from 'react';
import { PAGES_LAYOUT } from '../Sidebar';
import styles from './WhatsDue.module.scss';
import cx from 'classnames';

import ConfettiExplosion from 'react-confetti-explosion';

export const WhatsDue = ({ chapter }: { chapter: string }) => {
  const dueItems = PAGES_LAYOUT['/toobers'].chapters?.[chapter].whatsDue;
  const [trackedItems, setTrackedItems] = useState(dueItems);
  const [dontShowConfetti, setDontShowConfetti] = useState(true);

  useEffect(() => {
    // get from local storage if any of these have been read already
    // if so, mark them as read
    if (window) {
      Object.entries(dueItems).forEach((item: any) => {
        if (window.localStorage.getItem(item[0]) === 'true') {
          setTrackedItems((prev: any) => {
            return {
              ...prev,
              [item[0]]: true,
            };
          });
        }
      });
    }
  }, [dueItems]);

  useEffect(() => {
    // determine if the document loaded with all items already checked
    // if so, don't show the confetti
    if (window) {
      if (Object.values(trackedItems).every((item: any) => item === true)) {
        setDontShowConfetti(false);
      }
    }
  }, []);

  return (
    <div className={styles.whatsDueContainer}>
      <h1>What's Due {PAGES_LAYOUT['/toobers'].chapters?.[chapter].due_date}</h1>
      <div className={styles.dueContainer}>
        {Object.entries(dueItems).map((item: any, index: any) => {
          const clickItem = () => {
            if (window) {
              setDontShowConfetti(false);
              if (trackedItems[item[0]] === true) {
                window.localStorage.setItem(item[0], 'false');
                setTrackedItems((prev: any) => {
                  return {
                    ...prev,
                    [item[0]]: false,
                  };
                });
              } else {
                window.localStorage.setItem(item[0], 'true');
                setTrackedItems((prev: any) => {
                  return {
                    ...prev,
                    [item[0]]: true,
                  };
                });
              }
            }
          };

          return (
            <>
              <div className={styles.checkbox} onClick={clickItem}>
                <div
                  className={cx(styles.checkboxSquare, {
                    [styles.hasCheckmark]: trackedItems[item[0]] === true,
                  })}
                />
              </div>
              <div key={index} onClick={clickItem} className={styles.dueItem}>
                {item[1]}
              </div>
            </>
          );
        })}
        {!dontShowConfetti && Object.values(trackedItems).every((item: any) => item === true) && (
          <div className={styles.confettiContainer}>
            <ConfettiExplosion particleCount={100} width={2000} height={'300vh'} duration={6000} force={0.8} />
          </div>
        )}
      </div>
      <div className={styles.dueTime} />
    </div>
  );
};
