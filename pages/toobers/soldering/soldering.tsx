import GuideImage from '../../../components/GuideImage';
import GuideVideo from '../../../components/GuideVideo';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Now Soldering!</h1>
      <h2>Time to get Heated!</h2>
      <p>
        Turn your soldering irons on. These are particularily fancy and have a
        temperature adjust - turn the knob so it shows 800F. The temperature
        should slowly rise until it reaches that. We're going to be soldering
        JST-XH connectors to both the components.{' '}
        <strong>
          note how they are different than the ones for the speaker (the Molex
          ones)
        </strong>
      </p>
      <GuideImage
        src={'/images/toobers/jst-xh-charging-circuit.png'}
        border={false}
      />
      <p>
        Let's start with the charging circuit. Put the wires into the through
        holes in the charging circuit board, noting where the red and the black
        wires go respectively. Flip it around to the other side (you can bend
        the wires over a little on the other side to keep it in place)
      </p>
      <GuideImage
        src={'/images/toobers/closeup-charging-circuit.jpg'}
        border={false}
        size={'MEDIUM'}
      />
      <p>
        Hold the soldering iron tip to where the contact of the component meets
        the exposed wire. Next, take the spool of solder, and touch some solder
        gently to the contact of the component. You should see a very nice cone
        form between the contact of the component and the wire.
      </p>
      <GuideVideo src={'/soldering-charging-circuit.mp4'} />
      <p>
        Inspect your solder. Make sure the solder has good contact between the
        wire and the soldering pad.
      </p>
      <GuideImage
        src={'/images/toobers/good-soldering-01.png'}
        border={false}
        size={'LARGE'}
      />
      <p>
        In general, after you solder, you should always take a moment and make
        sure there's no unwanted bridges/connections between adjacent pins,
        especially if you don't fully trust your soldering skills yet. To do
        this, you can use the multimeter tool. Turn your multimeter on and set
        it to the diode/speaker symbol. Place the red and black probes in the
        slots as shown below:
      </p>
      <GuideImage
        src={'/images/toobers/continuity-test-multimeter.png'}
        border={false}
        size={'SMALL'}
      />
      <p>
        In this mode, the multimeter will make a beep if there is an electrical
        connection (continuity) between the two probes. You can also see the
        display show a 0 (or something close to 0) if it's a connection (no
        resistance). If there is an open circuit, you'll see a 1 digit on the
        far left.
      </p>
      <p>
        To test for unwanted connections in your circuit, hold up each probe to
        a pin. If it beeps, you probably have too much solder and will need to
        remove some before proceeding (in order to break the connection.)
      </p>
      <h2>Made a mistake?</h2>
      <p>
        No worries! Happens all the time. If you need to remove solder, grab the
        solder wick (or the de-soldering braid) and simply place the end of the
        wick over the solder you want to remove and then place your heated
        solder tip over it. The braid heats up and encourages the solder to wick
        up into it.
      </p>
      <p>
        The other (more fun) tool we have is a solder sucker, which is a mini
        mechanically powered vacuum that can suck the solder up when it's still
        molten and remove it from your work piece.
      </p>
      <GuideVideo src={'/solder-sucker.mp4'} />
      <p>
        (These are tools that you'll probably need to grab from the 'common'
        pile. Feel free to grab one to investigate.)
      </p>
      <h2>Repeat for Switch!</h2>
      <p>
        Go ahead and proceed to do this again but for the switch. Once again,
        pay attention to where the red wire goes and where the black wire goes.
      </p>
      <GuideImage
        src={'/images/toobers/switch.jpg'}
        size={'MEDIUM'}
        border={true}
      />
      <WhatsDue chapter={'/soldering'} />
    </div>
  );
};

export default Page;
