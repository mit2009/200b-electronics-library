import Image from 'next/image';
import GuideImage from '../../../components/GuideImage';
import GuideVideo from '../../../components/GuideVideo';
import { GuideLink } from '../../../components/GuideLink';

const Test = () => {
  return (
    <div>
      <h1>Test the Microcontroller</h1>
      <h2>Hello Arduino!</h2>
      <p>
        We'll be using an Arduino Nano microcontroller.{' '}
        <GuideLink href="https://arduino.cc" target="_BLANK">
          Arduino
        </GuideLink>{' '}
        makes a whole line of controllers, and many of them can be programmed
        and controlled in the same way. Once you learn how to work with an
        Arduino, you'll be able to use fancier Arduinos- some of which even have
        built-in WiFi, Bluetooth, etc.!
      </p>
      <GuideImage
        src="/images/toobers/arduino-nano.jpeg"
        alt="Arduino Nano"
        caption="Arduino Nano, the Brains of our operation"
        size="SMALL"
        border={false}
      />
      <p>
        The basic idea behind an Arduino is that it allows us to
        programmatically take in inputs from the real world, have software
        applied to them, and send outputs back out into the real world. This is
        the 'brains' behind our operations, and how we'll be controlling the
        logic for our Simon-esque game!
      </p>
      <h2>Place your Arduino on the Breadboard</h2>
      <p>
        With the USB port side of the Arduino facing towards the edge of
        breadboard, insert your Arduino into the breadbaord. The Arduino should
        bridge the middle channel with its pins on opposite sides. Your
        Arduino's <span className="pin">D13</span> pin should fall into the
        breadboard's <span className="pin">D1</span> hole.
      </p>
      <GuideImage
        src="/images/toobers/nano_seated.jpg"
        alt="Arduino on Breadboard"
        border={false}
        size={'FULL'}
      />
      <p>
        Make sure your Arduino is fully seated in the breadboard. The black
        plastic underneath the Arduino should be flush with the breadboard. If
        you can still see the pins between the breadboard and the Arduino, keep
        pushing it down. New breadboards can be a little stiff and you may find
        it difficult to push your Arduino all the way in. We recommend
        flattening the box your Arduino Nano came in and using it to cover the
        pins to protect your hands while pushing down. It can also help to
        alternate sides rather than trying get one side completely seated before
        moving onto the other.
      </p>
      <GuideImage
        src={[
          '/images/toobers/nano_not_seated.jpg',
          '/images/toobers/nano_push_in.jpg',
        ]}
        alt="Arduino on Breadboard"
        border={false}
      />
      <p>
        For components like the Arduino Nano, we have spudgers available to help
        you remove them from your breadboard if you ever need or want to.
      </p>
      <GuideImage
        src="/images/toobers/spudger.jpg"
        alt="Arduino on Breadboard"
        border={false}
        size={'MEDIUM'}
      />

      <p>
        While we will be powering our Arduino Nano using a USB cable in the next
        step, it is still a good idea to connect it the{' '}
        <span className="pin red">3.7V</span> and{' '}
        <span className="pin black">GND</span> rails.
      </p>
      <ul>
        <li>
          Using a short black wire connect <span className="pin">A14</span>{' '}
          (Arduino Nano's <span className="pin black">GND</span>) to the{' '}
          <span className="pin black">GND</span> rail
        </li>
        <li>
          Using a short red wire connect <span className="pin">A15</span>{' '}
          (Arduino Nano's <span className="pin red">VIN</span>) to the{' '}
          <span className="pin red">3.7V</span> rail
        </li>
      </ul>
      <GuideImage
        src="/images/toobers/arduino-in-breadboard.jpg"
        alt="Arduino on Breadboard"
        border={false}
        size={'MEDIUM'}
      />
      <h2>Connecting & Uploading Code to the Arduino</h2>
      <p>
        Connect the Mini-B USB end of the USB cable (that's the one that might
        look like it connects to an older smart phone or electronic device) to
        the Arduino, and then connect the other end (USB type A or USB type C,
        depending on which cable you grabbed) to your computer.
      </p>
      <p>
        As soon as you plug in your Arduino, you'll notice a red LED may turn
        on, and another red LED may blink. This means the Arduino is on (and is
        currently being powered by your laptop!) If not, please try reattaching
        the USB cables and also trying out a different USB port on your
        computer. In the future, you can plug in your arduino to a usb wall
        adapter if you just need it to turn on (for demonstration purposes, or
        if your laptop isn't handy.)
      </p>
      <GuideImage
        src="/images/toobers/arduino-blink-2.gif"
        size={'MEDIUM'}
        alt="Arduino On"
      />
      <p>
        Before we start programming the Arduino, we need to tell the Arduino IDE
        what type of microcontroller we are using and what port it is connected
        to on the computer. To do this:
      </p>
      <ol>
        <li>
          From the Arduino IDE board selector dropdown, click{' '}
          <span className="instruction">Select other board and port...</span>
        </li>
        <li>
          Type in <span className="instruction">nano</span> to look for the
          Arduino Nano
        </li>
        <li>
          Select the port on your computer that's connected to the Arduino. The
          specific port name may vary, but usually it'll say 'Arduino' or 'USB'.
        </li>
      </ol>
      <GuideVideo src="arduino-ide-board-port-select.mp4" />
      <h2>Explore the File Editor</h2>
      <p>
        The Arduino IDE always starts up with a File Editor, a screen to edit
        files, opened to an empty "sketch" template. "Sketch" files are what
        Arduino calls it's programs. The File Editor has a toolbar with a couple
        of buttons which are frequently used. From left to right:
      </p>
      <p>
        <strong>Verify</strong> - this checks your code for errors. If there are
        errors, the error messages will appear in the area at the bottom called
        the console. If there are no errors, the code will be compiled, meaning
        turned into a format that the microcontroller will understand.
      </p>
      <p>
        <strong>Upload</strong> - this will compile your code (if not already
        compiled) and upload it to the connected microcontroller. Any errors in
        the process will appear in the console. Clicking this button also
        automatically verifies your code first before uploading it.
      </p>
      <p>
        <strong>Debug</strong> - this tool is used to test and debug programs,
        hence the name. It can be used to navigate through a program's execution
        in a controlled manner. This feature, however, is not supported on the
        Arduino Nano, so we won't be using it for this exercise.
      </p>
      <p>
        <strong>The Serial Plotter</strong> - this tool is great for visualizing
        data using graphs, and to monitor for example peaks in voltage. You can
        monitor several variables simultaneously, with options to enable only
        certain types.
      </p>
      <p>
        <strong>Serial Monitor</strong> - this opens up the Serial Monitor,
        which is an area that can be used for status information from the
        microcontroller while it is attached to your computer and running a
        program.
      </p>
      <h2>Understand the Sketch Template</h2>
      <p>
        The sketch template includes the two functions that must be included in
        every Arduino sketch. The <strong>setup function</strong>{' '}
        <code>setup()</code> is run after each time the Arduino starts up or
        restarts. Once the setup function is completed, the{' '}
        <strong>loop function</strong> <code>loop()</code> runs continuously,
        meaning that once it is completed, it starts to run again from its
        beginning.
      </p>
      <p>
        There are different programming languages that code can be written in.
        Arduino sketches are written in the programming language C++. Each
        programming language has its own rules, called syntax, for how the lines
        of code must be written. We'll review a few of the basic principles
        here.
      </p>
      <p>
        C++ is <strong>case-sensitive</strong>, so a name "greg" would be
        different from a name "Greg". Each line of C++ code ends in a semicolon.
        In addition to lines of code, you may put comments in code.
      </p>
      <h2>Comments</h2>
      <p>
        Comment lines are ignored by the compiler, so they aren't translated
        into machine language. Their purpose is to make the code more
        human-readable and understandable. There are two types of comment
        characters in C++. The two forward slash comment character used in the
        sketch template means that everything on the line after the two forward
        slashes is a comment. Notice how the IDE color-codes different parts of
        the code. Comments are in gray by default.
      </p>
      <pre>
        <p>
          {'//'} This is an example of a comment. You can write whatever after
          two slashes
        </p>
        <p>
          {'//'} Like this if you want to take notes (or see what past-you have
          written!)
        </p>
      </pre>
      <p>
        The second method of doing comments is by wrapping it in a slash and an
        asterisk (and closing with an asterisk and a slash.)
      </p>
      <pre>
        <p>{'/*'} this is also an example of a comment</p>
        <p> It can span multiple lines!</p>
        <p> You just need to wrap everything like this {'*/'}</p>
      </pre>
      <p>
        Functions are lines of code that work together to do something and can
        be reused. For example, a function might implement an algorithm to
        figure out the fastest design from different sets of parameters.
        Functions may also send and receive data, such as telling a display what
        text to show and how. Each function has a name, like setup, and the code
        for the function is written between a set of open and close curly
        brackets.
      </p>
      <p>
        Functions can return values that may be used by other bits of code. For
        example, a function may return a number representing the average value
        of a series of numbers, or more complicated data structures. In C++, the
        type of the returned value is the first part of the function definition,
        followed by the function's name. A type of void means that the function
        does not return a value to be used elsewhere in the program.
      </p>
      <p>
        Whew! That was a whirlwind tour of coding. It's ok if you don't
        understand it all. Now let's do something!
      </p>
      <h2>Running an example program</h2>
      <p>
        Now that we've told the IDE what kind of microcontroller we are working
        with and how to communicate with it, let's try out a test program.
      </p>
      <p>
        <span className="instruction">
          File → Examples → 01. Basics → Blink
        </span>
      </p>
      <p>
        Be careful not to type anything into the file, or you may inadvertently
        introduce an error. If the File Editor window is small, just grab a
        corner and drag to make it bigger.
      </p>
      <p>
        Click "Verify". You should get a "Done compiling." status message in the
        status bar. Then click "Upload". You should get a "Done uploading."
        status message. If this is successful, you should then see the built-in
        LED near <span className="pin">RST</span> pin on the Arduino Nano blink
        one second on and one second off.
      </p>
      <p>
        (Note: In the future, you can hit upload without hitting verify first -{' '}
        <span className="instruction">Upload</span> will automatically compile
        and verify your code)
      </p>
      <GuideVideo src="arduino-uploading-blink.mp4" />
      <p>
        Take a second to look at the code. If this is your first time working
        with the Arduino, take a note at the <code>delay</code> function in the
        code. This is a delay value in <strong>milliseconds</strong>. Change the
        two delay values from <code>1000</code> to <code>100</code>. Upload your
        code. The blinking should be faster now!
      </p>
      <p>
        If you have problems, please ask for help! Take a moment to look at the
        code uploaded, and see if it makes sense to you. If not, no worries. At
        this point, we do not expect you to understand any of the program. The
        goal right now is just to be able to run pre-written programs.
      </p>
    </div>
  );
};

export default Test;
