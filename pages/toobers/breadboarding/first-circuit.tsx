import Link from 'next/link';
import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { Ws2812bLed, PIN } from '../../../components/Ws2812bLed';

const Page = () => {
  return (
    <div>
      <h1>The First Circuit</h1>
      <h2>Just one LED & Button</h2>
      <p>
        For our first circuit, we want to test a couple of basic components that
        are critical to the success of our toy. Doing a test like this is also
        called a sketch model. For this first exercise, we're going to see if we
        can have the Arduino read one input (through the press of a button) and
        then output it (by turning an LED on for a set amount of time). Once
        we're reasonably comfortable with doing this, we'll be more confident
        when expanding it to 4 buttons and 4 lights, and eventually constructing
        our Toobers prototype.
      </p>
      <p>
        Below is an image of what the product of this section will look like.
      </p>
      <GuideImage
        src="/images/toobers/one-led-button.jpg"
        alt="First Circuit"
        border={false}
      />
      <p>Below is the circuit diagram.</p>
      <GuideImage
        src="/images/toobers/led-diagram.png"
        alt="First Circuit Diagram"
        border={false}
        size={'LARGE'}
      />
      <p>
        In the future, when we begin working with the actual sugar cubes, we'll
        simplify the diagram to be what it's shown below. Take a look and see if
        you understand the difference. If not, check-in with your instructor!
      </p>
      <GuideImage
        src="/images/toobers/led-sugarcube.png"
        alt="LED diagram with the sugar cube"
        border={false}
        size={'LARGE'}
      />
      <p>
        Take a look at one of the LEDs in your kit. LEDs are light emitting
        diodes - but these are rather special. Inside each LED is actually a
        small integrated circuit (IC) which can help process the data sent by
        the Arduino and change it into any color. These are{' '}
        <strong>WS2812b LEDs</strong>. These are designed to be{' '}
        <strong>chained together in a series</strong>.
      </p>
      <GuideImage
        src="/images/toobers/ic-diagram.png"
        alt="A closer look at the LED"
        size={'FULL'}
        border={false}
      />
      <p>
        Each pin of this LED does something different. Take a look at the
        diagram below.
      </p>
      <GuideImage
        src="/images/toobers/ws2812b-pinout-diagram.png"
        alt="A closer look at the LED"
        size={'MEDIUM'}
        border={false}
      />
      <p>
        The microcontroller sends data to all the WS2812b LEDs through one of
        the data in pins <span className="pin">Di</span>. For example, the
        microcontroller might tell the sequence of LEDs to show{' '}
        <code>orange, blue, red, pink</code>. The first LED in the sequence
        removes the first color data, and then sends the rest of the data down
        the line. So the data out <span className="pin">Dout</span> of LED 1
        would remove <code>orange</code> and then send{' '}
        <code>blue, red, pink</code> to LED 2. And so on and so on with the rest
        of the LEDs.
      </p>
      <GuideImage
        src="/images/toobers/top-down-one-led-one-button.jpg"
        alt="One Light and One Button in Top Down View"
      />
      <h2>Connecting the LED</h2>
      <p>
        Let's start by assembling one LED. Throughout this guide, we'll provide
        locations of pins as suggestions - as long as you have the right
        connections, you're good to go.
      </p>
      <ul>
        <li>
          Grab the LED. The pins, in order from left to right, should be{' '}
          <em>short, short, long, long</em>. Place the shorter{' '}
          <Ws2812bLed pin={PIN.Din} /> into <span className="pin">F20</span>
        </li>
        <li>
          It might be easier for you to line up the longer{' '}
          <Ws2812bLed pin={PIN.Dout} /> into <span className="pin">F23</span>{' '}
          and then pivot the shorter pins into place.
        </li>
        <GuideImage
          src={[
            '/images/toobers/LED_in_place.jpg',
            '/images/toobers/LED_inserted.jpg',
          ]}
          alt="Inserting the first LED"
        />
        <li>
          The other pins <Ws2812bLed pin={PIN.Vin} />,{' '}
          <Ws2812bLed pin={PIN.Gnd} />, and <Ws2812bLed pin={PIN.Dout} /> should
          fall into <span className="pin">F21</span>,{' '}
          <span className="pin">F22</span>, and <span className="pin">F23</span>{' '}
          respectively
        </li>
        <li>
          Connect <span className="pin">J20</span> (<Ws2812bLed pin={PIN.Din} />
          ) to <span className="pin">J9</span> (Arduino Nano's{' '}
          <span className="pin">D4</span>)
        </li>
        <li>
          Connect <span className="pin">G21</span> (<Ws2812bLed pin={PIN.Vin} />
          ) to the <span className="pin red">3.7V</span> rail
        </li>
        <li>
          Connect <span className="pin">I22</span> (<Ws2812bLed pin={PIN.Gnd} />
          ) to the <span className="pin black">GND</span> rail
        </li>
      </ul>
      <p>
        Note that you'll likely have red wire, black wire, and a random color in
        your kit. In general, you want to keep red and black consistent. The
        random color is there to help you distinguish the different wires (and
        so the actual wire color itself doesn't matter.)
      </p>
      <h2>Connecting the Button</h2>
      <p>
        Next, let's attach the button. If you grab one of the buttons from your
        kit, you'll notice it also has two contacts, which, very conveniently,
        will sit nicely into the breadboard. These buttons do not have polarity,
        but for them to work, the two contacts should be on different rows, e.g.
        row 2 and 4 (otherwise they're connected to each other, and thus always{' '}
        <em>on</em>.) There's a little cap which can go onto the button, to give
        it some color and a slightly larger push area.
      </p>
      <ul>
        <li>
          Place your button so that the pins fall into{' '}
          <span className="pin">C20</span> and <span className="pin">C22</span>
        </li>
        <li>
          As always, make sure your button is fully seated into the breadboard
        </li>
        <GuideImage
          src={[
            '/images/toobers/button_in_place.jpg',
            '/images/toobers/button_inserted.jpg',
          ]}
          alt="Inserting the first Button"
        />
        <li>
          Connect <span className="pin">A20</span> to the{' '}
          <span className="pin black">GND</span> rail
        </li>
        <li>
          Connect <span className="pin">E22</span> to{' '}
          <span className="pin">J5</span> (Arduino Nano's{' '}
          <span className="pin">D8</span>)
        </li>
      </ul>
      <GuideImage src="/images/toobers/button_wired.jpg" size={'MEDIUM'} />
      <p>
        That's all for wiring! If we've done it correctly, we should now be able
        to control the LED and monitor the input from the code. Let's jump into
        the Arduino software now.
      </p>
      <h2>The Arduino Code</h2>
      <p>We've provided some test code for you. Check out the link below!</p>
      <div className="center">
        <GuideLink
          target="_blank"
          href="https://github.com/mit2009/200b-toobers/blob/main/2023/arduino/LEDandButtonTest.zip?raw=true"
        >
          <span className={'download-btn'}>
            Get the <strong>One WS2812b LED & Button Test Code</strong>
          </span>
        </GuideLink>
      </div>
      <p>
        Our code comes in a folder called <code>LEDandButtonTest</code>. While
        you can place this folder anywhere you would like in your filesystem,
        the file <code>LEDandButtonTest.ino</code> has to remain in the folder.
        Arduino requires the primary <code>.ino</code> file to match the folder
        name.
      </p>
      <p>
        Open the file up in your Arduino IDE. For this file, you'll need a
        library called <strong>FastLED</strong>. One way to add a library is to
        install it using Arduino's built-in Library Manager. Open Arduino IDE
        and then go to{' '}
        <code>Sketch &gt; Include Library &gt; Manage Libraries</code>.
      </p>
      <GuideImage src="/images/toobers/include_library.png" size={'MEDIUM'} />
      <p>
        Search for <strong>FastLED by Daniel Garcia</strong> and then click{' '}
        <strong>Install</strong>.
      </p>
      <GuideImage src="/images/toobers/installFastLED.png" size={'MEDIUM'} />
      <p>
        When you are ready, you can close the library manager by clicking on the
        library manager icon. This icon will also bring up the library manager
        when you need to access it again.
      </p>
      <GuideImage
        src="/images/toobers/library_manager_icon.png"
        size={'NARROW'}
      />
      <p>
        Once you have the library installed, upload the code to the Arduino. Be
        sure your IDE is correctly configured and you've selected the right
        settings. If you don't remember this, you can always jump back to{' '}
        <GuideLink href="http://localhost:3000/toobers/breadboarding/test-microcontroller">
          the previous section
        </GuideLink>{' '}
        to take a look.
      </p>
      <p>
        Once the code has uploaded (the TX/RX light should stop blinking) the
        new software should be on your Arduino! Go ahead and test it out.{' '}
        <strong>
          When you press the button and release, the light should switch between
          three different colors.
        </strong>
      </p>
      <p>
        If this looks correct, hooray! Take a few minutes to take a look at the
        code to see if you understand it.
      </p>
      <p>
        Also note that on the Arduino, there is a <strong>reset</strong> button
        you can click (near the center of the board). Clicking it is the same as
        unplugging and plugging in the Arduino.
      </p>
    </div>
  );
};

export default Page;
