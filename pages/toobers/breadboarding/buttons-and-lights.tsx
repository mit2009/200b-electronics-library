import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { PIN, Ws2812bLed } from '../../../components/Ws2812bLed';

const Page = () => {
  return (
    <div>
      <h1>Four Buttons & Lights</h1>
      <h2>Multiply by Four</h2>
      <p>
        It's time to kick it up a notch! We'll be hooking up all four of the
        LEDs and buttons now. Because we're using the WS2812b LEDs, we can wire
        these up in series, with the data out <span className="pin">Dout</span>{' '}
        of one LED going into the data in <span className="pin">Di</span> of the
        next LED.
      </p>
      <p>The final inputs/outputs on the Arduino should be as follows</p>
      <p>
        <span className="pin">PIN 8</span> Red Button
        <br />
        <span className="pin">PIN 7</span> Green Button
        <br />
        <span className="pin">PIN 6</span> Blue Button
        <br />
        <span className="pin">PIN 5</span> Yellow Button
        <br />
        <span className="pin">PIN 4</span> WS2812b LEDs
      </p>
      <p>
        If you think you understand how you built the red LED and button, see if
        you can duplicate this setup 3 times. If you don't feel comfortable yet,
        don't worry - keep reading for a handy guide!
      </p>
      <p>Your result should look something like this:</p>
      <GuideImage
        src="/images/toobers/four-new-friends-perspective.jpg"
        alt="Four LEDs"
        size={'SMALL'}
      />
      <p>
        In this photo, we used different colored wires, just to make it easier
        to identify. You can ask around for different colors of wire (we always
        have plenty extra). You can also use the jumper wires we provided you to
        save yourself some time when it comes to stripping wires.
      </p>
      <GuideImage
        src="/images/toobers/jumpers.png"
        border={false}
        caption="And yes! you can peel them apart to separate them."
        alt="Jumper wires"
      />
      <p>
        Remember to <strong>KEEP IT NEAT!</strong> notice that in our example,
        we press down as many of the wires as possible to the board so they're
        easy to follow. When building your final toy, you also want to keep
        wires as clean as possible. Messy wires are super hard to debug and
        figure out if something is wrong - and instructors have a much harder
        time helping you!
      </p>
      <GuideImage
        size="SMALL"
        border={false}
        src="/images/toobers/lots-of-wires.jpg"
        alt="An image showing a lot of wires"
        caption="This is an actual project from a while back we've encountered. Try to keep your wires neater than this!"
      />
      <p>
        If you'd like, you're free to follow the pin markings below to get to
        build your circuit so it's identical to ours.
      </p>

      <GuideImage
        src="/images/toobers/four-new-friends-top-down.jpg"
        alt="Four LEDs"
        border={true}
        size={'LARGE'}
      />
      <h4>Green</h4>
      <p>(everything is shifted 6 from red)</p>
      <ul>
        <li>
          Place the WS2812b LED on the breadboard. The pins, in order from left
          to right, should be <em>short, short, long, long</em>. The leftmost
          pin, <Ws2812bLed pin={PIN.Vin} />, should be in position{' '}
          <span className="pin">F26</span>.
        </li>
        <li>blah blah</li>
        <li>blah blah</li>
        <li>blah blah</li>
      </ul>
      <h4>Blue</h4>
      <p>(everything is shifted 6 from green)</p>
      <ul>
        <li>
          LED Arduino Output to Breadboard <span className="pin">PIN 4</span> to
          <span className="pin">J15</span>
        </li>
        <li>
          Button Arduino Button to Breadboard
          <span className="pin">PIN 8</span> to <span className="pin">J14</span>
        </li>
        <li>
          Wire to ground
          <span className="pin">A16</span> to{' '}
          <span className="pin black">GND</span>
        </li>
      </ul>
      <h4>Yellow</h4>
      <p>(everything is shifted 6 from blue)</p>
      <ul>
        <li>
          LED Arduino Output to Breadboard <span className="pin">PIN 5</span> to
          <span className="pin">J21</span>
        </li>
        <li>
          Button Arduino Button to Breadboard
          <span className="pin">PIN 9</span> to <span className="pin">J20</span>
        </li>
        <li>
          Short wire to bring Input to button
          <span className="pin">G20</span> to <span className="pin">E20</span>
        </li>
        <li>
          Button from wire to ground <span className="pin">C20</span> to
          <span className="pin">C22</span>
        </li>
        <li>
          Wire to ground <span className="pin">A22</span> to
          <span className="pin black">GND</span>
        </li>
      </ul>
      <GuideImage
        src={'/images/toobers/four-new-friends-perspective.jpg'}
        size={'LARGE'}
        alt="Four LEDs"
      />
      <GuideImage
        src={'/images/toobers/four-new-friends-weird.jpg'}
        size={'LARGE'}
        alt="Four LEDs"
      />
      <h2>Software for our Four New Friends</h2>
      <p>
        It's always good to test your wiring in stages. Once you have a lot of
        wires, it can be difficult to find what's wrong if there's a lot going
        on. Once again, for this, we've prepared some code for you to see if
        you've got all the LEDs and buttons wired up correctly.
      </p>
      <div className="center">
        <GuideLink
          target="_blank"
          href="https://github.com/mit2009/200b-toobers/blob/main/2023/arduino/FourNewFriends.zip?raw=true"
        >
          <span className={'download-btn'}>
            Get the <strong>Four New Friends code</strong>
          </span>
        </GuideLink>
      </div>
      <p>
        The correct behavior is: once you click on each button, the
        corresponding LED should blink twice! If it works, you're good to go!
      </p>
    </div>
  );
};

export default Page;
