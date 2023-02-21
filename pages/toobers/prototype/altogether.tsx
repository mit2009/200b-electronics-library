import GuideImage from '../../../components/GuideImage';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Playable Prototype</h1>
      <h2>Almost there!</h2>
      <WhatsDue chapter="/prototype" />
      <p>
        Now that we have our power module, let's attach it to the rest of the
        circuit! Below is the diagram of what we're trying to wire up.
      </p>
      <GuideImage
        src="/images/toobers/power-module-diagram.png"
        border={false}
        size={'LARGE'}
      />
      <p>
        Start by <strong>making sure the power switch is OFF</strong>. Next, add
        a jumper wire (color doesn't matter) between the red wire (JST
        connector-terminated) of the charging circuit to the black wire (JST
        connector-terminated) of the switch. When we actually assemble our
        Toobers toy in the final housing, we won't need to jerry rig it like
        this - this is just to get our prototype to work.
      </p>
      <GuideImage src="/images/toobers/wire-jerry-rig.jpg" />
      <p>Now we're left with two unused JST connections.</p>
      <ol>
        <li>Unplug the USB mini connection to the Arduino Nano. </li>
        <li>
          Connect the red of the power switch to any point of the{' '}
          <span className="pin red">3.7v</span> power rail using a red jumper
        </li>
        <li>
          Connect the black of the charging circuit to any point of the{' '}
          <span className="pin black">GND</span> power rail using a black jumper
        </li>
        <li>
          <strong>Important: </strong>Because we're now working with the
          battery, you'll want the Arduino's{' '}
          <span className="pin red">Vin</span> to be connected to the power
          rail. Remove the Arduino's <span className="pin red">5v</span> to
          Ground rail connection if it is there.
        </li>
      </ol>
      <p>Your final product should look something like the below.</p>
      <GuideImage
        src="/images/toobers/final-assembly.jpg"
        border={false}
        size={'FULL'}
      />
      <p>
        At this point, you should still have the 'audio' test code on your
        Arduino Nano. If you flip the switch to <strong>on</strong> , (making
        sure the computer is NOT connected to the Arduino), you should hear the
        audio clip play!
      </p>
      <p>
        If you don't hear anything, don't fret. Breadboards can be finicky and
        this is all part of the process.{' '}
        <strong>Press the reset button once</strong> on the Arduino Nano, and
        give it a few seconds. Sometimes, the power-up part draws more power
        than expected. Other things to try if it still doesn't work:
      </p>
      <ul>
        <li>
          Double check all the wiring and connections to make sure nothing has
          come loose since you last worked on this part. Ask a teammate to
          double check for you
        </li>
        <li>
          Plug the Arduino Nano into your computer. Sometimes this can help
          stabilize the power problems
        </li>
        <li>Try a different battery (is yours dead?)</li>
        <li>Reach out on #ask-the-tas</li>
      </ul>
    </div>
  );
};

export default Page;
