import { useState } from 'react';

import cx from 'classnames';
import styles from './Toggle.module.scss';
import GuideImage from '../../../components/GuideImage';

const PageToggle = ({ options }: { options: { [text: string]: JSX.Element } }) => {
  const choices = Object.keys(options);
  const [choice, setChoice] = useState(choices[1]);
  return (
    <>
      <div className={styles.choices}>
        {choices.map((c) => {
          return (
            <div
              key={c}
              className={cx(styles.choice, { [styles.selected]: c === choice })}
              onClick={() => {
                setChoice(c);
              }}
            >
              {c}
            </div>
          );
        })}
      </div>
      {options[choice]}
    </>
  );
};

const windowsVersion = (
  <>
    <h2>Windows Arduino IDE Installation</h2>
    <p>To install the Windows version of the Arduino IDE:</p>
    <ul>
      <li>
        Go to the{' '}
        <a href="https://www.arduino.cc/en/software" target="_blank" rel="noreferrer">
          Arduino software downloads page.
        </a>
      </li>
      <li>
        Click on the <code>Windows Win 10 and newer, 64 bits</code> option.
      </li>
      <li>
        On the subsequent page, click the "Just Download" button (or contribute, if you wish) and the installer will
        start to download onto your computer.
      </li>
      <li>Once the download is finished, "Open" the installer.</li>
      <li>
        The installer will start. Agree to everything. There may be a number of popups asking for various permissions.
      </li>
    </ul>
    <p>
      Once the installer is complete, there will be a shortcut to the Arduino IDE on your desktop, or a square in the
      Windows 10 interface.
    </p>
  </>
);

const macVersion = (
  <>
    <h2>Mac OS Arduino IDE Installation</h2>
    <p>To install the Mac OS version of the Arduino IDE:</p>
    <ul>
      <li>
        Go to the{' '}
        <a href="https://www.arduino.cc/en/software" target="_blank" rel="noreferrer">
          Arduino software downloads page.
        </a>
      </li>
      <li>
        Click on the <code>macOS Intel, 10.14: "Mojave" or newer, 64 bits</code> option.
      </li>
      <li>
        On the subsequent page, click the "Just Download" button (or contribute, if you wish) and the installation zip
        file will start to download onto your computer.
      </li>
      <li>
        Once the download is finished, "Open" the installation zip file. The zip file will uncompress and Finder will
        open with the contents of the zip file.
      </li>
      <li>
        Drag the <strong>Arduino</strong> application to the <strong>Applications</strong> folder.
      </li>
      <li>
        (Optional) Drag the <strong>Arduino</strong> application to your <strong>Dock</strong>.
      </li>
    </ul>
  </>
);

const installOptions = {
  'Show Windows': windowsVersion,
  'Show MacOS (Intel)': macVersion,
  'Show MacOS (Apple Silicon)': macVersion,
};

const Install = () => {
  return (
    <div>
      <h1>Installing the Arduino IDE</h1>
      <h2>Set Up your Computer for Programming</h2>
      <p>
        We'll be using an Arduino "Integrated Development Environment" (IDE). An IDE is a program made for editing code
        files. Although code files are text files and could be edited in a text-editing program, an IDE usually includes
        many features that help make programming easier. The Arduino IDE not only lets us write and edit programs for
        the Arduino microcontrollers, it also helps us to upload the programs to the Arduino microcontrollers.
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="LARGE"
        src="/images/toobers/arduino-ide.png"
        alt="Arduino IDE"
      />
      <p>
        There are several versions of the Arduino IDE. We strongly recommend that you use{' '}
        <strong>Arduino IDE 2.0.3</strong>. While there is a web editor, we recommend <strong>against</strong> using
        this version, as the plugins and drivers required can sometimes be difficult to work with. The staff will also
        be more familiar with the desktop version of the IDE.
      </p>
      <p>
        If you have an older version of the IDE and aren't actively using it, we recommend that you uninstall the older
        version to avoid confusion. Version 2 has autocompletion, better code navigation, and debugging tools that will
        help greatly.
      </p>
      <PageToggle options={installOptions} />
      <h2>Open the Arduino IDE</h2>
      <p>
        Go ahead and click on the icon that downloaded to open the Arduino IDE. If you see a nice teal-looking text
        editor like the screenshot shown above, you're all set for lab! See you soon!
      </p>
    </div>
  );
};

export default Install;
