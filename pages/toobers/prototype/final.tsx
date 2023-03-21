import { GuideLink } from '../../../components/GuideLink';
import GuideVideo from '../../../components/GuideVideo';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Upload the Final Code</h1>
      <h2>Wrap it up!</h2>
      <p>
        We're at the last step of the Toobers prototype, which is to upload
        code! If all goes according to plan, this code will upload and run
        smoothly on your Arduino. However- this is real life, and usually things
        don't go right on the first try. Don't be discouraged. You got this!
      </p>
      <div className="advanced">
        <h3>note</h3>
        <p>
          Remember to extract the <strong>entire folder</strong>, and not just
          the <code>ToobersArduino.ino</code> file. The{' '}
          <code>DFRobotDFPlayerMini.cpp</code> and the{' '}
          <code>DFRobotDFPlayerMini.h</code> file need to be in the same folder
          as the sketch file for the DFPlayer libraries to work!
        </p>
      </div>
      <div className="center">
        <GuideLink
          target="_blank"
          href="https://github.com/mit2009/200b-toobers/blob/main/2023/arduino/ToobersArduino.zip?raw=true"
        >
          <span className={'download-btn'}>
            Get the <strong>Final Toobers Code</strong>
          </span>
        </GuideLink>
      </div>
      <p>
        Try running it with your computer attached to your arduino (as well as
        the battery.) If that works, disconnect your computer, turn the battery
        power switch off (your Arduino Nano should be off at this point), give
        it a couple of seconds, then turn it back on. If it works,
        congratulations! You now have a working Toobers prototype!
      </p>
      <p>If it doesn't work, here are a couple of things to try:</p>
      <ul>
        <li>
          If it turns on for a little bit, and it shuts off, this may be a power
          issue. Charge the battery for longer, or go into the code and change
          the value for <code>volume</code> down to something lower.
        </li>
        <li>
          You can always upload code from previous sections to test individual
          components. For example, just the first LED, the four LEDs and the
          four buttons etc.
        </li>
        <li>
          Remove certain components (usually starting with the DFPlayer) to see
          if it resolves any issues. Even if sounds don't play, the game may
          still be playable. If that's the case, you may not have your DFplayer
          wired up correctly, or something may be off with it.
        </li>
        <li>
          Work with your team to help each other out! If you're working
          remotely, this is a great chance to use Slack and reach out.
        </li>
      </ul>
      <p>Below is a video of the expected behavior.</p>
      <GuideVideo src="full-toobers.mp4" />
      <p>
        If you've made it this far, congrats! Give yourself a pat on the back -
        despite it being a seemingly simple toy, there's a whole lot going on
        here! Next up will be making a CAD model of your Toobers toy. See you in
        a bit!
      </p>
      <WhatsDue chapter="/prototype" />
    </div>
  );
};

export default Page;
