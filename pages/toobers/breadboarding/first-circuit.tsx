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
      {/* TODO: image of first circuit */}
      <p>Below is the circuit diagram.</p>
      {/* TODO: image of circuit diagram */}
      <p>
        Take a look at one of the LEDs in your kit. LEDs are light emitting
        diodes - but these are rather special. Inside each LED is actually a
        small integrated circuit (IC) which can help process the data sent by
        the Arduino and change it into any color. These are{' '}
        <strong>WS2812b LEDs</strong>. These are designed to be{' '}
        <strong>chained together in a series</strong>.
      </p>
      <p>
        Each pin of this LED does something different. Take a look at the
        diagram below.
      </p>
      {/* TODO: LED Diagram */}
      <p>
        The microcontroller sends data to all the WS2812b LEDs through one of
        the data in pins <span className="pin">Di</span>. For example, the
        microcontroller might tell the sequence of LEDs to show{' '}
        <code>orange, blue, red, pink</code>. The first LED in the sequence
        removes the first color data, and then sends the rest of the data down
        the line. So the data out <span className="pin">Dout</span> of LED 1
        would remove <code>orange</code> and then send{' '}
        <code>blue, red, pink</code>. And so on and so on with the rest of the
        LEDs.
      </p>
      <h2>Connecting the LED</h2>
      <p>
        Let's start by assembling one LED. Throughout this guide, we'll provide
        locations of pins as suggestions - as long as you have the right
        connections, you're good to go.
      </p>
      {/* TODO: Update instructions */}
      <ul>
        <li>
          Bring Pin 2 of the Arduino <span className="pin">PIN 2</span> to the
          board <span className="pin">J3</span>
        </li>
        <li>
          Grab the red LED. Place the longer end{' '}
          <span className="sign positive">+</span> into
          <span className="pin">H3</span> and the shorter end{' '}
          <span className="sign negative">-</span> into
          <span className="pin">H4</span>.
        </li>
        <li>
          Place a resistor on the board (220&#8486;) from
          <span className="pin">G4</span> to <span className="pin">E4</span>
        </li>
        <li>
          Finally, connect the resistor to ground
          <span className="pin">A4</span> to{' '}
          <span className="pin black">Gnd</span>
        </li>
      </ul>
      <p>
        Note that you'll likely have red wire, black wire, and a random color in
        your kit. In general, you want to keep red and black consistent. The
        random color is there to help you distinguish the different wires (and
        so the actual wire color itself doesn't matter.)
      </p>
      {/* TODO: LED Photo on breadboard photo */}
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
      {/* TODO: Update instructions */}
      <ul>
        <li>
          Bring Pin 6 of the Arduino <span className="pin">PIN 6</span> into the
          board <span className="pin">J2</span>
        </li>
        <li>
          Place a wire to jump across the trough
          <span className="pin">G2</span> to <span className="pin">E2</span>
        </li>
        <li>
          Place a button on the board from the input line
          <span className="pin">C2</span> to the ground
          <span className="pin">C4</span>
        </li>
      </ul>
      <p>
        That's all for wiring! If we've done it correctly, we should now be able
        to control the LED and monitor the input from the code. Let's jump into
        the Arduino software now.
      </p>
      <h2>The Arduino Code</h2>
      {/* TODO: Download button */}
      {/* TODO: Update Link */}
      <p>
        Open the file up in your Arduino IDE, and upload the file to the
        Arduino. Be sure your IDE is correctly configured and you've selected
        the right settings. If you don't remember this, you can always jump back
        to part 3 to take a look.
      </p>
      <p>
        Once the code has uploaded (the TX/RX light should stop blinking) the
        new software should be on your Arduino! Go ahead and test it out. When
        you press the button and release, the light should switch between three
        different colors.
      </p>
      <p>
        If this looks correct, hooray! Take a few minutes to take a look at the
        code to see if you understand it.
      </p>
      <p>
        Also note that on the Arduino, there is a <strong>reset</strong> button
        you can click (near the usb port). Clicking it is the same as unplugging
        and plugging in the Arduino.
      </p>
    </div>
  );
};

export default Page;
