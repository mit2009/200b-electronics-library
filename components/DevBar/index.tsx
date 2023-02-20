import React, { useState } from 'react';

import cx from 'classnames';
import styles from './DevBar.module.scss';

const HIDDEN_DURATION = 8000;

export const DevBar = () => {
  const [shrink, setShrink] = useState(true);
  const [visible, setVisible] = useState(true);

  return (
    <div className={cx(styles.devMarker, { [styles.hidden]: !visible })}>
      <button
        onClick={() => {
          setShrink((current) => !current);
        }}
      >
        {shrink ? '<' : '>'}
      </button>
      {shrink ? 'dev' : 'development'}
      {!shrink && (
        <>
          <button
            onClick={() => {
              console.log('Clearing local storage');
              localStorage.clear();
            }}
          >
            Clear Storage
          </button>
          <button
            onClick={() => {
              setVisible(false);
              setTimeout(() => {
                setVisible(true);
              }, HIDDEN_DURATION);
            }}
          >
            Hide
          </button>
        </>
      )}
    </div>
  );
};
