import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
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
      <ol>
        <li>
          Make sure the power switch is <strong>OFF</strong>.
        </li>
        <li>
          Next, add a jumper wire (color doesn't matter) between the{' '}
          <span className="pin red">red wire</span> (JST connector-terminated)
          of the charging circuit to the{' '}
          <span className="pin black">black wire</span> (JST
          connector-terminated) of the switch.
        </li>
      </ol>
      <GuideImage src="/images/toobers/power-diagram.jpg" size={'FULL'} />
      <p>Now we're left with two unused JST connections.</p>
      <ol start={3}>
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
      <p>
        This jerry-rigged setup is not the best but will work for prototyping
        purposes. The Dupont jumpers aren't intended to go into the JST
        connectors; in the final product, these JST connectors will seat into
        the appropriate receptacle on the final PCB. Your final product should
        look something like the below.
      </p>
      <GuideImage
        src="/images/toobers/final-assembly.jpg"
        border={false}
        size={'FULL'}
      />
      <h2>Debugging</h2>
      <p>
        At this point, you should still have the 'audio' test code on your
        Arduino Nano. If you flip the switch to <strong>on</strong>, (making
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
      <ol>
        <li>
          Turn the switch <strong>off</strong> before you modify anything,
          especially if it involves moving power around!
        </li>
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
        <li>
          Move the power that's coming into the board from the battery closer to
          the Audio player, as shown in the image below. Having the battery
          power enter the breadboard physically as close as possible to the
          audio player chip reduces the distance through the breadboard the
          current has to flow through.
        </li>
      </ol>
      <GuideImage
        src="/images/toobers/move-power-closer-to-speaker.png"
        size={'FULL'}
      />
      <ol start={6}>
        <li>
          Still having problems? As always, please feel free to reach out on{' '}
          <GuideLink
            href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
            target="_blank"
          >
            #ask-the-tas
          </GuideLink>
        </li>
      </ol>
    </div>
  );
};

export default Page;
