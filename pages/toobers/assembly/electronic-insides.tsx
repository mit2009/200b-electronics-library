import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Electronics & Testing</h1>
      <h2>Getting Permanent</h2>
      <p>
        Take a look at the custom PCB that we've made for your Toober! This is
        what the PCB looks like, without the soldered components.
      </p>
      <GuideImage src="/images/toobers/pcb.jpeg" size="MEDIUM" border={false} />
      <p>
        A PCB like this can often help with compacting the size of your toy. The
        downside of a custom PCB is it can take a while to design and print. A
        good compromise is sometimes to use a perfboard (short for a perforated
        board, which has holes that you can solder connections onto). If done
        correctly, this can make your electronics more reliable.
      </p>
      <GuideImage
        src="/images/toobers/perfboard.webp"
        size="SMALL"
        border={false}
        caption={
          "An example of something that you may want to use for your toy product prototype! But we won't need it for our Toober."
        }
      />
      <h2>Power Module</h2>
      <p>
        Separate the wires of the jerry-rigged power setup, and grab just the
        power module (the battery, the acrylic plate, and the charging unit).
        Place this entire unit inside your toobers housing like shown, aligning
        the 3 screws. Be extra careful to not pull or damage any of the wires
        that are already soldered/connected (there should be the wire going from
        the battery to the charging module, and the JST-XH 2-Pin Jumper coming
        out of the charging module.)
      </p>
      <GuideImage
        src="/images/toobers/power-module-placed.jpg"
        size="FULL"
        border={false}
      />
      <p>
        Move the wires around as necessary so they're not pinched between your
        Toober bottom housing and the acrylic plate. You may need to wiggle the
        module in there. in there. The USB-C connector should sit nicely inside
        the pill-shaped cutout, and from the outside you should be able to see
        the metal of the charging port.
      </p>
      <p>Screw the module down with three M3 x 8mm screws.</p>
      <GuideImage
        src="/images/toobers/power-module-screwed.jpg"
        size="FULL"
        border={false}
      />
      <h2>Power Switch</h2>
      <p>
        Remove any Dupont Jumper wires so you're just left with the power
        switch. It should look like the below.
      </p>
      <GuideImage
        src="/images/toobers/power-switch.jpg"
        size="MEDIUM"
        border={false}
      />
      <p>
        Push the switch into the rectangular hole in your Toober bottom housing.
        The lip of the switch should be right up against the edge of the housing
        when it's fully inserted.
      </p>
      <GuideImage
        src={[
          '/images/toobers/power-switch-1.jpg',
          '/images/toobers/power-switch-2.jpg',
        ]}
        size="FULL"
        border={false}
      />
      <h2>Speaker</h2>
      <p>
        <strong>Very carefully</strong> separate the Molex Picoblade connector
        that's connecting the speaker.
      </p>
      <GuideImage
        src="/images/toobers/molex-picoblade.png"
        size="MEDIUM"
        border={false}
      />
      <p>
        You may have additional connectors to the speaker wires, like a small
        Molex connector or alligator clips. We won't need those - you can keep
        them for future projects!
      </p>
      <p>
        Slide the speaker into the speaker slot of the bottom housing. The foam
        on the back of the tiny speaker helps with the friction fit of this
        part! While it may be the most secure when it's seated, all we need is
        for the speaker to be pressed up against the housing to help sound
        travel out of the Toober shell. The top housing will keep the speaker in
        place once it's screwed closed.
      </p>
      <GuideImage
        src="/images/toobers/speaker-slot.jpg"
        border={false}
        size={'FULL'}
      />
      <p>
        And finally, press the speaker wire into the wire clip to provide the
        wire some strain relief. These are small features that you can design in
        to help with wire organization inside your toy!
      </p>
      <GuideImage
        src="/images/toobers/speaker-wire-tucked.jpg"
        size={'MEDIUM'}
        border={false}
        caption={
          "The best way we've found to do this is to tuck the wire in with two fingers until there is a small click. The final result should look like the below."
        }
      />
      <GuideImage
        src="/images/toobers/speaker-wire-clip.jpg"
        size={'FULL'}
        border={false}
      />
      <h2>Arduino Nano</h2>
      <p>
        Now we'll transfer the Arduino Nano from your breadboard to the PCB.
        Note that instead of directly soldering the Arduino onto the PCB, we
        will be placing it in these female header pins. Chips sometimes are also
        placed in what's called a DIP socket, which is what is soldered to the
        board. This allows them to be replaced easily (and avoid being subjected
        to the heat of the soldering iron.)
      </p>
      <p>
        Remove the <strong>Arduino Nano</strong> from the breadboard (using a{' '}
        <GuideLink href="https://en.wikipedia.org/wiki/Spudger" target="_BLANK">
          spudger
        </GuideLink>{' '}
        if necessary).
      </p>
      <GuideImage
        src="/images/toobers/arduino-nano-spudger-2.jpg"
        caption="A little bit of a persuasive pry..."
        border={false}
      />
      <GuideImage
        src="/images/toobers/arduino-nano-spudger-1.jpg"
        caption="A little more from the other side now..."
        border={false}
      />
      <h3>Trim the Unused Pins</h3>
      <p>
        There are a couple of unused pins which unfortunately collide into some
        parts of the upper housing (we really tried to make these thin!) Find a
        nice pair of flushcutters and trim these 6 pins off.
      </p>
      <h3>Onto the PCB</h3>
      <p></p>
      <GuideImage
        src={'/images/toobers/trim-the-pins.jpg'}
        size="FULL"
        caption="If you're not sure which pins you're trimming, double check with your instructor!"
      />
      <p>
        Press the Arduino Nano down onto the PCB, paying special attention to
        the orientation of the <strong>USB-B mini port.</strong>
      </p>
      <GuideImage
        src={'/images/toobers/arduino-nano-onto-pcb.jpg'}
        border={false}
        size="FULL"
      />
      <h2>DFPlayer</h2>
      <p>
        Next, remove the <strong>DFPlayer</strong> and place it on the PCB,
        paying attention to the direction the MicroSD card faces.
      </p>
      <GuideImage
        src={'/images/toobers/dfplayer-onto-pcb.jpg'}
        border={false}
        size="FULL"
      />
      <h2>PCB into the Housing!</h2>
      <p>
        Place the PCB into the housing as shown, taking note of the orientation
        and alignment features. There will only be one orientation that 'seats'
        nicely. Temporarily move the other wires out of the way as best you can.
      </p>
      <GuideImage
        src={'/images/toobers/pcb-into-the-housing.jpg'}
        border={true}
        size="MEDIUM"
      />
      <p>
        We're going to do a 'dry fit' and a test of all the parts first. Once we
        know everything is working, we'll use double sided foam tape to adhere
        the PCB to the bottom housing.
      </p>
      <p>
        Attach the speaker to the PCB (the smallest Molex Picoblade connector.)
      </p>
      <GuideImage
        src={'/images/toobers/molex-picoblade-with-green-circle.jpg'}
        border={true}
        size="FULL"
      />
      <div className="advanced">
        <h3>note</h3>
        <p>
          Make a mistake? No biggie. If you need to remove the connectors,
          please be gentle with the wires. It's often advised to grip the
          plastic part (as opposed to the wire). If you're unable to do that
          with your fingers, we highly recommend you use needle-nose pliers, as
          shown in the image below, to reduce the risk of damaging the wire.
        </p>
      </div>
      <GuideImage
        src={'/images/toobers/removing-connector.jpg'}
        border={true}
        size="MEDIUM"
        caption="You have enough to worry about in your life, let's play this one safe."
      />
      <h2>Switch and Power Module</h2>
      <p>
        Connect the Switch JST and the Power Module to the board as shown (the
        PCB is also labelled to help with disambiguation.)
      </p>
      <GuideImage
        src={'/images/toobers/pcb-jsts.jpg'}
        border={false}
        size="FULL"
      />
    </div>
  );
};

export default Page;
