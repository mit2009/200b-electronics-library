/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import styles from '../../../styles/Customize.module.scss';
import cx from 'classnames';
import { GuideLink } from '../../../components/GuideLink';

const getRgbValuesFromHex = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

// determine to show white text or black based on background color hue
const getTextColor = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 140 ? '#FFFFFF' : '#000000';
};

const Page = () => {
  useEffect(() => {
    // get four colors from local storage (if any) and set them as initial color
    const colors = localStorage.getItem('colors');
    if (colors) {
      setColor(JSON.parse(colors));
    }

    // detect if using a touch screen. if so, switch action text to 'tap'
    if (typeof window !== 'undefined' && window.document) {
      if ('ontouchstart' in window) {
        setActionText('tap');
      }
    }
  }, []);

  const [color, setColor] = useState<any>({});
  const [actionText, setActionText] = useState<string>('click');
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  const getPcbButton = (index: number) => {
    switch (index) {
      case 0:
        return 2;
      case 1:
        return 3;
      case 2:
        return 1;
      case 3:
      default:
        return 0;
    }
  };

  const reverseGetPcbButton = (index: number) => {
    switch (index) {
      case 0:
        return 3;
      case 1:
        return 2;
      case 2:
        return 0;
      case 3:
      default:
        return 1;
    }
  };

  const getButton = (index: number) => {
    return color[getPcbButton(index)]?.toUpperCase() ?? '#FFFFFF';
  };

  return (
    <div>
      <h1>Customizing the Sugar Cubes</h1>
      <h2>A Hint of Color</h2>
      <p>
        Because these sugar cubes are loaded with our friend the WS2812b LEDs,
        we can set them to be any color! Place your Toober flat on the table,
        and orient it such that the{' '}
        <strong>speaker is facing towards you</strong>). Referencing the Toober
        in front of you, {actionText} on the sugar cubes in the image below to
        select the colors, then upload the generated code to your Toobers.{' '}
      </p>
      <p>
        Note that individual LEDs are very simple components - the actual color
        that you may see on your Toober may vary from what you're able to see on
        your device screen, which has gone through many layers of tuning.
        Additionally, because our diffuser (the silicone cubes) are white, you
        won't be able to get dark colors like black or brown. The best way to
        get something you want is to experiment!
      </p>
      <div className={styles.container}>
        {hasChanged && (
          <div
            className={styles.resetButton}
            onClick={() => {
              setColor({});
              localStorage.setItem('colors', JSON.stringify({}));
              setHasChanged(false);
            }}
          >
            Reset all to white
          </div>
        )}
        <img
          className={styles.cubeImage}
          width="100%"
          src="/images/toobers/color-selector.png"
          alt="Toobers Cube"
          draggable={false}
        />
        {[...Array(4)].map((_, key) => {
          return (
            <label
              key={key}
              className={cx(
                styles.cubeContainer,
                styles[`cubeContainer${key + 1}`]
              )}
            >
              <div
                className={cx(styles.cube, styles[`cube${key + 1}`])}
                style={{ backgroundColor: color[key] }}
              />
              <div
                className={cx(styles.cubeColor, styles[`cube${key + 1}Color`])}
                style={{ backgroundColor: color[key] }}
              />
              <input
                type="color"
                value={(color[key] as any) ?? '#000000'}
                onChange={(e) => {
                  const newColors = {
                    ...color,
                    [key]: e.target.value,
                  };
                  setColor(newColors);
                  localStorage.setItem('colors', JSON.stringify(newColors));
                  setHasChanged(true);
                }}
              />
              {key === 0 && hasChanged === false && (
                <div className={styles.tooltip}>
                  {actionText} to select a color!
                </div>
              )}
              <div className={styles.buttonPcbNumbering}>
                Button <strong>{reverseGetPcbButton(key)}</strong>
              </div>
            </label>
          );
        })}
      </div>
      <p>
        Your selected colors are (using our 0-3 numbering system from before):
      </p>
      <div className={styles.buttonColorGrid}>
        {[...Array(4)].map((_, key) => {
          return (
            <>
              <strong>Button {key}</strong>
              <label
                className={styles.buttonColorText}
                style={{
                  backgroundColor: getButton(key),
                  color: getTextColor(getButton(key)),
                }}
              >
                hex: {getButton(key)}
                <br />
                rgb: {getRgbValuesFromHex(getButton(key))}
                <input
                  type="color"
                  value={(color[getPcbButton(key)] as any) ?? '#000000'}
                  onChange={(e) => {
                    const newColors = {
                      ...color,
                      [getPcbButton(key)]: e.target.value,
                    };
                    setColor(newColors);
                    localStorage.setItem('colors', JSON.stringify(newColors));
                    setHasChanged(true);
                  }}
                />
              </label>
            </>
          );
        })}
      </div>
      <h2>Some Code Tweaks</h2>
      <h3>Changing the Colors</h3>
      <p>
        Changing the colors of your sugar cubes require a teensy bit of code
        change, but it's actually fairly straight forward! Open up the Arduino
        sketch from last time (it should be called{' '}
        <code>ToobersArduino.ino</code>).
      </p>
      <p>
        If you don't have the code anymore, you can refer back to{' '}
        <GuideLink href="/toobers/prototype/final">this section</GuideLink> to
        download it again.
      </p>
      <p>
        On roughly line <code>37</code>, you should see a variable being defined
        called <code>colorMap</code>. This is a 2D array that defines the values
        for each of the sugar cube lights, in RGB format from Button 0 to Button
        3. Replace what you have from line <code>37</code> - <code>42</code>{' '}
        with the below (automatically populated with your selected colors):
      </p>
      <pre>
        <p
          dangerouslySetInnerHTML={{
            __html: `int colorMap[4][3] = {
  {${getRgbValuesFromHex(getButton(0))}},
  {${getRgbValuesFromHex(getButton(1))}},
  {${getRgbValuesFromHex(getButton(2))}},
  {${getRgbValuesFromHex(getButton(3))}},
};`,
          }}
        ></p>
      </pre>
      <p>
        Compile the code to make sure it works! To upload this to the Arduino,
        gently lift up just the PCB portion and plug it into your computer - you
        don't need to remove anything from the Toober other than lifting the PCB
        about half an inch!
      </p>
      <p> XXXXX MISSING PHOTO HERE, WILL TAKE MONDAY NIGHT XXXXX </p>
      <h3>Adjust the Volume</h3>
      <p>
        We had some issues last time while breadboarding with the volume of your
        Toober. Now that you have a nice and sturdy PCB, with a fully charged
        battery, head to around line 85 and look for this line:
      </p>
      <pre>
        <p>myDFPlayer.volume(15);</p>
      </pre>
      <p>and change it to:</p>
      <pre>
        <p>myDFPlayer.volume(25);</p>
      </pre>
      <p>
        This should increase the volume, and make it more audible while inside
        the case. If you're experiencing errors, you'll probably want to turn
        that number back down.
      </p>
    </div>
  );
};

export default Page;
