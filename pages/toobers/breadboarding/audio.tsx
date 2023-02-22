import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Audio</h1>
      <h2>Let's Make some Noise!</h2>
      <p>
        Wow, it's been really quiet here. Let's add some sound to our toy! For
        sound, the Arduino will need to rely on an external chip to play audio.
        The storage on an Arduino is very limited (usually around 32k bytes) and
        so we need a device that can store and play audio files when the Arduino
        wants it to. Introducing the DFPlayer!
      </p>
      <p>The pin out diagram for the DFPlayer looks like the below:</p>
      <GuideImage
        src="/images/toobers/dfplayer.png"
        border={false}
        size="SMALL"
      />
      <p>
        While the DFPlayer has many different modes of operation, (some of which
        are standalone and don't require an Arduino), we'll be using the TX and
        RX pins on the DFPlayer (transmit and receive, respectively), to
        communicate with the DFPlayer.
      </p>
      <p>
        The DFPlayer pulls .mp3 files from a microSD card. The specific naming
        convention depends on the mode you're using it in.{' '}
        <strong>We've preloaded your microSD card with sounds</strong> so that
        it'll work with the Toobers game.
      </p>
      <p>
        The microSD card only goes in one orientation, and to remove it, simply
        <strong>push</strong> the microSD card in once for it to spring back out
        (known as a push-push mechanism or a catch/latch in mechanical design).
      </p>
      <GuideImage
        src={[
          '/images/toobers/microSD-placement.jpg',
          '/images/toobers/microSD-installed.jpg',
        ]}
        border={false}
      />
      <h2>Wiring up the DFPlayer</h2>
      <p>
        We'll start with placing the DFPlayer. The DFPlayer has two rows of
        pins, which can straddle the trough nicely to prevent its own pins from
        shorting (coming into contact) with itself. Very carefully note the
        direction of the DFPlayer. Note the direction of the notch in the PCB
        and make sure you know which pins are which.{' '}
        <strong>Check with an instructor if you're unsure!</strong>
      </p>
      <p>
        This is the wiring diagram. Pay attention to which pins are used on the
        DFPlayer
      </p>
      <GuideImage
        src="/images/toobers/wiring-diagram-with-speaker.png"
        border={false}
        size="FULL"
      />
      <p>
        Below is what your final breadboard for this step should look like. Note
        the alignment and perspective in the photo may be off, so we've added
        tiny dotted lines to indicate which pins go where.
      </p>
      <GuideImage
        src="/images/toobers/with-speaker.png"
        border={false}
        size="FULL"
      />
      <ol>
        <li>
          Place the <span className="pin red">VCC</span> of the DFPlayer into
          point <span className="pin">C46</span> on the breadboard, facing in
          the direction as shown
        </li>
        <li>
          Connect the DFPlayer's <span className="pin black">GND</span> pin to
          the <span className="pin black">GND</span> rail
        </li>
        <li>
          Connect the DFPlayer's <span className="pin red">VCC</span> pin to the{' '}
          <span className="pin red">3.7V</span> rail
        </li>
      </ol>
      <GuideImage
        src={[
          '/images/toobers/DFPlayer_position.jpg',
          '/images/toobers/DFPlayer_wired1.jpg',
        ]}
        border={false}
        size="SMALL"
      />
      <ol start={4}>
        <li>
          Connect the DFPlayer's <span className="pin">RX</span> to one end of a
          1kΩ resistor - point <span className="pin">B47</span> on the
          breadboard.
        </li>
        <li>
          Connect the other end of the resistor to point{' '}
          <span className="pin">B44</span> on the breadboard. The resistor leads
          might be a tad bit long - you're free to trim them down to keep it
          neat (as long as they still seat into the breadboard)
        </li>
        <li>
          Connect a jumper wire from <span className="pin">A44</span> to{' '}
          <span className="pin">J11</span> (resistor to the Arduino Nano's{' '}
          <span className="pin">D2</span> pin)
        </li>
        <li>
          Connect a jumper wire from <span className="pin">A48</span> to{' '}
          <span className="pin">D3</span> (the DFPlayer's{' '}
          <span className="pin">TX</span> to the Arduino Nano's{' '}
          <span className="pin">D3</span> pin)
        </li>
      </ol>
      <h2 id="molex">The Tiny Speaker Wires</h2>
      <p>
        The speaker we've sourced has an impedance of 8 Ohms (nominally) and
        draws 2 Watts. It uses a special connector different from all the other
        connectors we're using - this is called Molex-type connector,
        specifically the Molex Picoblade.
      </p>
      <GuideImage
        src="/images/toobers/molex-picoblade.png"
        border={false}
        size="MEDIUM"
      />
      <p>
        The two connectors go together, and the leads go into the breadboard.
        The wires are very tiny and aren't typically meant to go into a
        breadboard like this, but <strong>it should be possible</strong> if
        you're careful, and it should work for this prototyping stage (albeit a
        very precarious operation).
      </p>
      <GuideImage
        src="/images/toobers/molex-picoblade-lead.jpg"
        size="SMALL"
        caption="Not quite the right gauge, but should work for what we're trying to do"
      />
      <ul>
        <li>
          Connect the <span className="pin red">red</span> wire into{' '}
          <span className="pin">B51</span>
        </li>
        <li>
          Connect the <span className="pin black">black</span> wire into{' '}
          <span className="pin">B53</span>
        </li>
      </ul>
      <p>
        If you're not able to get the wires into the breadboard holes, we have
        some header-to-alligator jumpers that you can use. Use the alligator
        clips to grab onto the thin wires, and the other end should go easily
        into a breadboard.
      </p>
      <GuideImage
        src={[
          '/images/toobers/alligator.jpeg',
          '/images/toobers/alligator-connected.jpeg',
        ]}
        border={false}
      />
      <h2>Test some Audio!</h2>
      <p>
        Download this test code into your Arduino to test the DFPlayer playing
        the first sound file. When you download the .zip file, you may notice
        two additional files in there. These files are part of the DFPlayer
        library, and needed for your audio to work! Keep them in the same folder
        as the .ino sketch file.
      </p>
      <p>
        As soon as the Arduino Nano starts up, it should play the audio{' '}
        <em>Toobers, get ready to play!</em> Note that the buttons and lights{' '}
        <strong>won't do anything</strong> with this example code.
      </p>
      <div className="center">
        <GuideLink
          target="_blank"
          href="https://github.com/mit2009/200b-toobers/blob/main/2023/arduino/JustSomeNoise.zip?raw=true"
        >
          <span className={'download-btn'}>
            Get the <strong>Audio Test Code</strong>
          </span>
        </GuideLink>
      </div>
      <h2>Do you hear Crackling?</h2>
      <p>
        If you hear weird crackling, or if your speaker isn't quite working
        right, this may be a power problem! Move the wire that connects the
        Arduino <span className="pin">Vin</span> to the Arduino{' '}
        <span className="pin red">5V</span> instead, as shown below.
      </p>
      <GuideImage
        src="/images/toobers/crackling-fix.png"
        border={false}
        size={'LARGE'}
      />

      <h2>Debugging</h2>
      <p>
        If something doesn't look right, here are some steps that may help you
        debug:
      </p>
      <h4>No audio is playing:</h4>
      <ul>
        <li>
          Double check your wiring near the DFPlayer. Ensure that they're
          actually connected to the right pin of the DFPlayer.
        </li>
        <li>Ensure that the microSD card is actually in the DFPlayer.</li>
      </ul>
      <h4>The speaker is crackling:</h4>
      <ul>
        <li>
          Make sure you've moved the <span className="pin red">Vin</span> over
          to <span className="pin red">5V</span> as shown above.
        </li>
        <li>
          Go into the code and lower the <code>volume</code> (try something like
          10.) It might be quiet, but we won't have this problem once everything
          is powered off a charged and healthy battery.
        </li>
        <li>
          There is another, unused <span className="pin black">Gnd</span> pin
          out of the DFPlayer. Attach that to the{' '}
          <span className="pin black">GND</span> rail with a short black wire.
        </li>
      </ul>
      <GuideImage src="/images/toobers/DFPlayer_wired1b.jpg" border={false} />
      <h4>If the wrong files are playing:</h4>
      <ul>
        <li>
          Talk to a lab staff regarding re-loading audio files onto your microSD
          card.
        </li>
      </ul>
      <WhatsDue chapter="/breadboarding" />
    </div>
  );
};

export default Page;
