/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import styles from '../../../styles/Customize.module.scss';
import cx from 'classnames';

const Page = () => {
  const [color, setColor] = useState('#666666');

  return (
    <div>
      <h1>Customizing the Sugar Cubes</h1>

      <div className={styles.container}>
        <img
          className={styles.cubeImage}
          width="100%"
          src="/images/toobers/color-selector.png"
          alt="Toobers Cube"
          draggable={false}
        />
        <label className={styles.cubeContainer}>
          <div
            className={cx(styles.cube1, styles.cube)}
            style={{ backgroundColor: color }}
          />
          <div
            className={cx(styles.cube1Color, styles.cubeColor)}
            style={{ backgroundColor: color }}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default Page;
