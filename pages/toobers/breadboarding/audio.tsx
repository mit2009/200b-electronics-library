import GuideImage from '../../../components/GuideImage';
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
        convention depends on the mode you're using it in. We've preloaded your
        microSD card with sounds so that it'll work with the Toobers game
      </p>
      <p>
        The microSD card only goes in one orientation, and to remove it, simply
        push the microSD card in once for it to spring back out (known as a
        push-push mechanism or a catch/latch in mechanical design)
      </p>
      <h2>Wiring up the DFPlayer</h2>
      <p>
        We'll start with placing the DFPlayer. The DFPlayer has two rows of
        pins, which can straddle the trough nicely to prevent its own pins from
        shorting (coming into contact) with itself.
      </p>
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
      <h4>If the wrong files are playing:</h4>
      <ul>
        <li>
          Talk to a lab staff regarding re-loading audio files onto your microSD
          card. The issue may be the dotfiles as mentioned below.
        </li>
      </ul>
      <h4>An LED isn't turning on:</h4>
      <ul>
        <li>
          Double check your wiring for the LED (and if it's just a specific one,
          see if you can find a difference between that LED and another LED that
          is working.
        </li>
        <li>
          Make sure the LED isn't burnt out. Did you remember to put in your
          resistor?
        </li>
        <li>Is the orientation of the LED correct?</li>
        <li>What happens if you try a different LED?</li>
        <li>
          You can always upload the old code (FourNewFriends.ino) to test just
          your LED setup, and go back to the previous step.
        </li>
      </ul>
      <h4>A Button isn't working:</h4>
      <ul>
        <li>
          It's sometimes hard to see where the contacts are- double check to
          make sure the contacts are indeed seated where they're supposed to be.
        </li>
        <li>
          Is it just that button? What happens if you try a different button?
        </li>
        <li>
          Similarly to the LED test, you can always upload the old code
          (FourButtonFriends.ino) to test just the malfunctioning button.
        </li>
      </ul>
      <p>
        Play around with your prototype for a bit. Bask in the glory. See how
        high of a score you can get. Exciting, isn't it?
      </p>
      <WhatsDue chapter="/breadboarding" />
    </div>
  );
};

export default Page;
