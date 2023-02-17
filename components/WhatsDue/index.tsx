import { useEffect, useState } from 'react';
import { PAGES_LAYOUT } from '../Sidebar';
import styles from './WhatsDue.module.scss';
import cx from 'classnames';

export const WhatsDue = ({ chapter }: { chapter: string }) => {
  const [dueItems, setDueItems] = useState(PAGES_LAYOUT['/toobers'].chapters?.[chapter].whatsDue);
  const [trackedItems, setTrackedItems] = useState(dueItems);

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

  console.log(trackedItems);

  return (
    <div className={styles.whatsDueContainer}>
      <h1>What's Due {PAGES_LAYOUT['/toobers'].chapters?.[chapter].due_date}</h1>
      <div className={styles.dueContainer}>
        {Object.entries(dueItems).map((item: any, index: any) => {
          const clickItem = () => {
            if (window) {
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
      </div>
      <div className={styles.dueTime}></div>
    </div>
  );
};
