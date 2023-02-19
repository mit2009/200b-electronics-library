import Image from 'next/image';
import GuideImage from '../../../components/GuideImage';
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
        makes a whole line of controllers, and many of them can be programmed and controlled in the same way. Once you
        learn how to work with an Arduino, you'll be able to use fancier Arduinos- some of which even have built-in
        WiFi, Bluetooth, etc.!
      </p>
      <GuideImage
        src="/images/toobers/arduino-nano.jpeg"
        alt="Arduino Nano"
        caption="Arduino Nano, the Brains of our operation"
        size="SMALL"
        border={false}
      />
      <p>
        The basic idea behind an Arduino is that it allows us to programmatically take in inputs from the real world,
        have software applied to them, and send outputs back out into the real world. This is the 'brains' behind our
        operations, and how we'll be controlling the logic for our Simon-esque game!
      </p>
      <h2>Place your Arduino on the Breadboard</h2>
      <p>// PLACE ARDUINO ON BREADBOARD INSTRUCTIONS</p>
      <h2>Connecting & Uploading Code to the Arduino</h2>
      <p>
        Connect the Mini-B USB end of the USB cable (that's the one that might look like it connects to an older smart
        phone or electronic device) to the Arduino, and then connect the other end (USB type A) to your computer. If you
        don't have a USB type A connector on your computer, we have plenty of adapters just for you.
      </p>
      <p>
        As soon as you plug in your Arduino, you'll notice a green LED may turn on, and a yellow LED may blink. This
        means the Arduino is on (and is currently being powered by your laptop!) If not, please try reattaching the USB
        cables and also trying out a different USB port on your computer. In the future, you can plug in your arduino to
        a usb wall adapter if you just need it to turn on (for demonstration purposes, or if your laptop isn't handy.)
      </p>
      <p>
        Before we start programming the Arduino, we need to tell the Arduino IDE what type of microcontroller we are
        using and what port it is connected to on the computer. To do this:
      </p>
      <ol>
        <li>
          From the Arduino IDE menu bar, select <span className="instruction">Tools → Boards → Arduino Nano</span>
        </li>
        <li>
          Next, we'll want to select the port on your computer that's connected to the Arduino. From the Arduino IDE
          menu bar, select <span className="instruction">Tools → Port → [ port name ]</span>. The specific port name may
          vary, but usually you'll see the word 'Arduino' pop up beside the port in parenthesis. You will only see
          options if the computer detects that the microcontroller is connected.
        </li>
      </ol>
      <p>Watch the video below for a demonstration of the steps above.</p>
      <video controls>
        <source src="/videos/board-port-select.mp4" type="video/mp4" />
        "Your browser does not support the video tag."
      </video>
      <h2>Explore the File Editor</h2>
      <p>
        The Arduino IDE always starts up with a File Editor, a screen to edit files, opened to an empty "sketch"
        template. "Sketch" files are what Arduino calls it's programs. The File Editor has a toolbar with six buttons
        which are typically used as follows:
      </p>
      <p>
        <strong>New</strong> - creates a new sketch. When you start the IDE, it usually creates a new sketch.
      </p>
      <p>
        <strong>Save</strong> - saves the sketch. If this is a new sketch, you will be prompted for a place to save the
        sketch and a filename. Sketch filenames end in ".ino". The file extension will be added by the IDE
        automatically. The <strong>IDE does not auto-save</strong>, so if you are working on a long program, be sure to
        hit the Save button periodically.
      </p>
      <p>
        Please note that the .ino file needs to be in a folder that is named <strong>exactly the same</strong> as the
        .ino file. When you first save, it should automatically create the folder.
      </p>
      <p>
        <strong>Open</strong> - if you have an existing sketch you want to work with, you can open it from here or from
        the Sketchbook, which is available via <span className="instruction">File → Sketchbook</span>.
      </p>
      <p>
        <strong>Verify</strong> - this checks your code for errors. If there are errors, the error messages will appear
        in the area at the bottom called the console. If there are no errors, the code will be compiled, meaning turned
        into a format that the microcontroller will understand.
      </p>
      <p>
        <strong>Upload</strong> - this will compile your code (if not already compiled) and upload it to the connected
        microcontroller. Any errors in the process will appear in the console.
      </p>
      <p>
        <strong>Serial Monitor</strong> - this opens up the Serial Monitor, which is an area that can be used for status
        information from the microcontroller while it is attached to your computer and running a program.
      </p>
      <h2>Understand the Sketch Template</h2>
      <p>
        The sketch template includes the two functions that must be included in every Arduino sketch. The setup function
        is run after each time the Arduino starts up or restarts. Once the setup function is completed, the loop
        function runs continuously, meaning that once it is completed, it starts to run again from its beginning.
      </p>
      <p>
        There are different programming languages that code can be written in. Arduino sketches are written in the
        programming language C++. Each programming language has its own rules, called syntax, for how the lines of code
        must be written. We'll review a few of the basic principles here.
      </p>
      <p>
        C++ is <strong>case-sensitive</strong>, so a name "greg" would be different from a name "Greg". Each line of C++
        code ends in a semicolon. In addition to lines of code, you may put comments in code.
      </p>
      <p>
        Comment lines are ignored by the compiler, so they aren't translated into machine language. Their purpose is to
        make the code more human-readable and understandable. There are two types of comment characters in C++. The two
        forward slash comment character used in the sketch template means that everything on the line after the two
        forward slashes is a comment. Notice how the IDE color-codes different parts of the code. Comments are in gray
        by default.
      </p>
      <pre>
        <p>{'//'} This is an example of a comment. You can write whatever after two slashes</p>
        <p>{'//'} Like this if you want to take notes (or see what past-you have written!)</p>
      </pre>
      <p>
        The second method of doing comments is by wrapping it in a slash and an asterisk (and closing with an asterisk
        and a slash.)
      </p>
      <pre>
        <p>{'/*'} this is also an example of a comment</p>
        <p> It can span multiple lines!</p>
        <p> You just need to wrap everything like this {'*/'}</p>
      </pre>
      <p>
        Functions are lines of code that work together to do something and can be reused. For example, a function might
        implement an algorithm to figure out the fastest design from different sets of parameters. Functions may also
        send and receive data, such as telling a display what text to show and how. Each function has a name, like
        setup, and the code for the function is written between a set of open and close curly brackets.
      </p>
      <p>
        Functions can return values that may be used by other bits of code. For example, a function may return a number
        representing the average value of a series of numbers, or more complicated data structures. In C++, the type of
        the returned value is the first part of the function definition, followed by the function's name. A type of void
        means that the function does not return a value to be used elsewhere in the program.
      </p>
      <p>Whew! That was a whirlwind tour of coding. It's ok if you don't understand it all. Now let's do something!</p>
      <h2>Running an example program</h2>
      <p>
        Now that we've told the IDE what kind of microcontroller we are working with and how to communicate with it,
        let's try out a test program.
      </p>
      <p>
        <span className="instruction">File → Examples → 01. Basics → Blink</span>
      </p>
      <p>
        Be careful not to type anything into the file, or you may inadvertently introduce an error. If the File Editor
        window is small, just grab a corner and drag to make it bigger.
      </p>
      <p>
        Click "Verify". You should get a "Done compiling." status message in the status bar. Then click "Upload". You
        should get a "Done uploading." status message. If this is successful, you should then see the built-in LED near{' '}
        <span className="pin">PIN 13</span> on the Arduino Uno blink one second on and one second off.
      </p>
      <p>
        (Note: You can hit upload without hitting verify first - <span className="instruction">Upload</span> will
        automatically compile and verify your code)
      </p>
      <p>The video shows how to open the example program and upload it to the microcontroller.</p>
      <video controls>
        <source src="/videos/blink-upload.mp4" type="video/mp4" />
        "Your browser does not support the video tag."
      </video>
      <p>The video below demonstrates what you should see on your microcontroller once the program is loaded.</p>
      <div className={'image-container'}>
        <Image src="/images/toobers/arduino-blink.gif" alt="Arduino Nano" height={235} width={320} />
      </div>
      <p>
        If you have problems, please ask for help! Take a moment to look at the code uploaded, and see if it makes sense
        to you. If not, no worries. At this point, we do not expect you to understand any of the program. The goal right
        now is just to be able to run pre-written programs.
      </p>
    </div>
  );
};

export default Test;
