import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>The Humble Sugar Cube</h1>
      <h2>What is a Sugar Cube?</h2>
      <p>
        Sugar Cubes are custom components we'll be using as our push buttons for
        Toobers! The top part of the Sugar Cube, the silicone layer, can be
        purchased on{' '}
        <GuideLink
          target="_blank"
          href="https://www.sparkfun.com/products/7835"
        >
          Sparkfun
        </GuideLink>
        , a site that not only is great for all of your cubic button needs but
        also is a reliable place to source electronic parts.
      </p>
      <GuideImage src="/images/toobers/sugar-cube.jpg" border={false} />
      <p>
        From the finished Toobers example, you can see four Sugar Cube buttons
        peeking through the 3D-printed housing; there's actually more to the
        Sugar Cube buttons than just the visible, milky silicone. Recall: in
        product design, we often create a finished product using smaller
        modules. Just like how biological cells form a larger tissue which can
        form the overall organ, we use individual components to create modules
        that join together to form the product. The Sugar Cube module consists
        of:
      </p>
      <ol>
        <li>A Milky, silicone button</li>
        <li>A Printed Circuit Board (PCB)</li>
        <li>An Acrylic mounting plate</li>
      </ol>
      <p>
        As a completed module, the silicone button acts as the interface between
        the user and Toobers. When pressed, the silicone button has a conductive
        ring on its underside that comes into contact with the PCB metal traces
        (called fingers), and the Arduino Nano can detect that contact as a
        button press. The acrylic mounting plate gives structure to the button,
        and also holds the entire module in place on the housing, using 2 screws
        on the diagonal corners of the plate, screwed into threaded inserts (the
        same brass threaded insert used in the power module)
      </p>
      <p>
        The PCB also has a 4 pin, WS2812B LED already soldered onto it. 2 of the
        4 pins are for the essential power and ground leads to the LED, and the
        other 2 pins are for "data in" and "data out."" We looked a little at
        the Sugar Cube circuit diagram in a{' '}
        <GuideLink href="/toobers/breadboarding/first-circuit">
          previous section
        </GuideLink>
        , but here it is again just as a refresher.
      </p>
      <GuideImage
        src="/images/toobers/led-sugarcube.png"
        alt="LED diagram with the sugar cube"
        border={false}
        size={'LARGE'}
      />
      <p>
        The fun, customizable aspect of the WS2812b LED is that you can give it
        color and brightness specifications from the Arduino. This information
        gets fed into the “data in” pin, and when you have multiple WS2812B
        LEDs, you can link them together and feed the color and brightness
        information from the “data out” pin on one LED and into the "data in"
        pin on another LED.{' '}
      </p>
      <p>
        Instead of just the traditional red, green, blue, and yellow lights that
        light up in our default code, we've made it easy for you to change these
        colors! As you design your Toober, think about what colors would work
        with your design. For example, this waffle-shaped Toober has butter
        buttons that are a delicious butter-yellow color when it lights up.
      </p>
      <GuideImage
        src="/images/toobers/waffle.png"
        alt="Toober with butter buttons"
        border={false}
        size={'LARGE'}
        caption={'Tasty, tasty butter buttons'}
      />
    </div>
  );
};

export default Page;
