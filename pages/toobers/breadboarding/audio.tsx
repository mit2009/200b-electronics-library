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
        The microSD card only goes in one orientation, and to remove it, simply{' '}
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
          Place the <span className="pin red">VCC</span> of the DFPlayer (when
          notch is facing left, <span className="pin red">VCC</span> is the
          bottom left pin) into point <span className="pin">C46</span> on the
          breadboard, facing in the direction as shown
        </li>
        <li>
          Connect a short black wire from <span className="pin">J52</span> to
          the <span className="pin black">GND</span> rail (Grounding the
          DFPlayer)
        </li>
        <li>
          Connect a short red wire from <span className="pin">A46</span> to the{' '}
          <span className="pin red">3.7V</span> rail (Powering the DFPlayer)
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
          Connect a 1kΩ resistor from <span className="pin">B44</span> to{' '}
          <span className="pin">B47</span> (the DFPlayer's{' '}
          <span className="pin">RX</span> to a 1kΩ resistor)
        </li>
      </ol>
      <GuideImage
        src={'/images/toobers/audio-resistor.png'}
        border={false}
        size="LARGE"
      />
      <p>
        The resistor leads might be a tad bit long - you're free to trim them
        down to keep it neat (as long as they still seat into the breadboard)
      </p>
      <ol start={5}>
        <li>
          Connect a jumper wire from <span className="pin">A44</span> to{' '}
          <span className="pin">J11</span> (1kΩ resistor to the Arduino Nano's{' '}
          <span className="pin">D2</span> pin)
        </li>
        <li>
          Connect a jumper wire from <span className="pin">A48</span> to{' '}
          <span className="pin">J10</span> (the DFPlayer's{' '}
          <span className="pin">TX</span> to the Arduino Nano's{' '}
          <span className="pin">D3</span> pin)
        </li>
      </ol>
      <GuideImage
        src="/images/toobers/audio-resistor-transmit-wires.png"
        border={false}
        size="LARGE"
      />
      <h2 id="molex">The Tiny Speaker Wires</h2>
      <p>
        The speaker we've sourced has an impedance of 8 Ohms (nominally) and
        draws 2 Watts. It uses a special connector different from all the other
        connectors we're using - this is called Molex-type connector,
        specifically the <strong>Molex Picoblade</strong>.
      </p>
      <GuideImage
        src="/images/toobers/molex-picoblade.png"
        border={false}
        size="MEDIUM"
      />
      <p>
        The two connectors go together, and the leads need to be connected to
        the DFPlayer via the breadboard. However the wires are very tiny, and
        are stranded, and aren't typically meant to go into a breadboard like
        this.
      </p>

      <GuideImage
        src="/images/toobers/molex-picoblade-lead.jpg"
        size="SMALL"
        caption="Very thin wires!"
      />
      <p>
        For this reason, we have these alligator to Dupont jumper cables that
        you can use, such that the ends are breadboard friendly. Connect them
        like so:
      </p>

      <GuideImage
        src={[
          '/images/toobers/alligator.jpeg',
          '/images/toobers/alligator-connected.jpeg',
        ]}
        border={false}
      />
      <ul>
        <li>
          Connect the <span className="pin red">red</span> speaker wire into{' '}
          <span className="pin">B51</span> (your alligator/jumper cables may not
          be red)
        </li>
        <li>
          Connect the <span className="pin black">black</span> speaker wire into{' '}
          <span className="pin">B53</span> (your alligator/jumper cables may not
          be black)
        </li>
      </ul>
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
      <p>
        This is the most common issue we've encountered, so here's a list of
        things you can try in order to resolve the problem!
      </p>
      <ol>
        <li>
          {' '}
          Move the wire that connects the Arduino{' '}
          <span className="pin">Vin</span> to the Arduino{' '}
          <span className="pin red">5V</span> instead, as shown below.
        </li>
      </ol>
      <GuideImage
        src="/images/toobers/crackling-fix.png"
        border={false}
        size={'LARGE'}
      />
      <ol start={2}>
        <li>
          Go into the code and lower the <code>volume</code> (try something like
          10.) It might be quiet, but we won't have this problem once everything
          is powered off a charged and healthy battery.
        </li>
        <li>
          Change this line:{' '}
          <code>if (!myDFPlayer.begin(mySoftwareSerial)) &#123;</code> to{' '}
          <code>
            if (!myDFPlayer.begin(mySoftwareSerial, true, false)) &#123;
          </code>
        </li>
        <li>
          There is another, unused <span className="pin black">Gnd</span> pin
          out of the DFPlayer. Attach that to the{' '}
          <span className="pin black">GND</span> rail with a short black wire.
        </li>
      </ol>
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
