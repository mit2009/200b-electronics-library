import styles from './Ws2812bLed.module.scss';
import cx from 'classnames';

export enum PIN {
  Vin = 'Vin',
  Gnd = 'GND',
  Dout = 'Dout',
  Din = 'Din',
}

export const Ws2812bLed = ({ pin }: { pin: PIN }) => {
  return (
    <span className={styles.pin}>
      <span className={styles.ledText}>WS2812b LED</span>
      <span
        className={cx(styles.pinText, {
          [styles.ground]: pin === PIN.Gnd,
          [styles.vin]: pin === PIN.Vin,
          [styles.dout]: pin === PIN.Dout,
          [styles.din]: pin === PIN.Din,
        })}
      >
        {pin === PIN.Vin ? (
          <>
            V<span className={styles.subscript}>in</span>
          </>
        ) : pin === PIN.Gnd ? (
          'GND'
        ) : pin === PIN.Dout ? (
          'Dout'
        ) : pin === PIN.Din ? (
          'Din'
        ) : (
          ''
        )}
      </span>
    </span>
  );
};
