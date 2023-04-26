import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import cx from 'classnames';

import { PAGES_LAYOUT } from '../Sidebar';

import styles from './WhatsDue.module.scss';

export const WhatsDue = ({
  chapter,
  checklist,
  checklistTitle,
}: {
  chapter?: string;
  checklistTitle?: React.ReactNode;
  checklist?: { [id: string]: string | React.ReactNode };
}) => {
  const dueItems =
    checklist ??
    (PAGES_LAYOUT['/toobers'].chapters?.[chapter ?? '']?.whatsDue as {
      [id: string]: string;
    });

  const [trackedItems, setTrackedItems] = useState(dueItems);
  const [dontShowConfetti, setDontShowConfetti] = useState(true);

  useEffect(() => {
    // get from local storage if any of these have been read already
    // if so, mark them as read
    if (window && dueItems) {
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
    <div
      className={cx(styles.whatsDueContainer, {
        [styles.themeOverride]: checklist,
      })}
    >
      {checklist ? (
        checklistTitle ?? (
          <>
            <h1>Submission Checklist. Before you Submit!</h1>
            <p>
              Please carefully review this list and check off all items before
              submitting! Ensuring that you've done these checks will help us
              reduce errors and save time in your printing process.
            </p>
          </>
        )
      ) : (
        <h1>
          What's Due{' '}
          {PAGES_LAYOUT['/toobers'].chapters?.[chapter ?? '']?.due_date}
        </h1>
      )}
      <div className={styles.dueContainer}>
        {dueItems &&
          Object.entries(dueItems).map((item: any, index: any) => {
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
              <div
                key={item[1]}
                className={styles.dueItemContainer}
                onClick={clickItem}
              >
                <div className={styles.checkbox}>
                  <div
                    className={cx(styles.checkboxSquare, {
                      [styles.hasCheckmark]: trackedItems[item[0]] === true,
                    })}
                  />
                </div>
                <div className={styles.dueItem}>{item[1]}</div>
              </div>
            );
          })}
        {!dontShowConfetti &&
          Object.values(trackedItems).every((item: any) => item === true) && (
            <div className={styles.confettiContainer}>
              <ConfettiExplosion
                particleCount={100}
                width={2000}
                height={'300vh'}
                duration={6000}
                force={0.8}
              />
            </div>
          )}
      </div>
      <div className={styles.dueTime} />
    </div>
  );
};
