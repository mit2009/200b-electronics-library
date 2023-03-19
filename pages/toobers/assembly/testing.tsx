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
      <p>Screw the module down with three M3 x 7mm screws.</p>
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
      <h3>Arduino Nano</h3>
      <p>
        Let's transfer the electronics from your breadboard to the PCB.{' '}
        <strong>
          We won't be placing these components into your Toober just yet, as
          there are still a few things we want to test
        </strong>
        . Remove the <strong>Arduino Nano</strong> from the breadboard (using a{' '}
        <GuideLink href="https://en.wikipedia.org/wiki/Spudger" target="_BLANK">
          spudger
        </GuideLink>{' '}
        if necessary). Place it onto the breadboard paying attention to the
        direction of the USB port.
      </p>
      <h3>DFPlayer</h3>
      <p>
        Next, remove the <strong>DFPlayer</strong> and place it on the PCB,
        paying attention to the direction the MicroSD card faces.
      </p>

      <h3>Speaker</h3>
      <p>
        Disconnect the speaker from the breadboard. You may have additional
        connectors to the speaker wires, like a small Molex connector or
        alligator clips. We won't need those. Plug the speaker directly into the
        PCB.
      </p>
      <h3>Buttons & LEDs</h3>
      <p>
        And finally, take the four JST-XH 4-Pin Jumper cables and connect them
        from the PCB to the Sugar Cubes. As you insert the Jumper cable into the
        PCB end, take note of the button number. Make sure the other end is{' '}
        <strong>
          connected to the corresponding button you've labeled (0 through 3).
        </strong>
      </p>
      <p>
        Once again,{' '}
        <strong className="color">
          pay attention to which way the connectors face
        </strong>
        ! The orientation of the jumper cable into the PCB is fixed, but
        unfortunately due to a sourcing error the connectors on the Sugar Cube
        is ambiguous. Make sure it's oriented as shown in the photo below.
      </p>
      <h2>Testing</h2>
      <p>
        Test the setup by turning the switch on. If you completed the
        breadboarding exercise from a few labs ago, you should still have the
        original code on the Arduino Nano. The game should start: the speaker
        should play, and the Sugar Cubes should light up!
      </p>
      <p>
        Your breadboard is now a little empty looking, and won't do much for you
        anymore, but that's ok! Keep all the breadboard components and feel free
        to use it in future projects!
      </p>
      <h2>Troubleshooting</h2>
      <h4>If nothing is happening...</h4>
      <ul>
        <li>
          Make sure that you have the final Toobers code loaded onto your
          Arduino Nano. If not, check back to{' '}
          <GuideLink href="/toobers/prototype/final">
            the Code, Test & Play
          </GuideLink>{' '}
          section to download the Final Toobers code and re-upload it to your
          Nano.
        </li>
        <li>Make sure your battery is charged.</li>
      </ul>
      <h4>If you're not hearing anything...</h4>
      <ul>
        <li>Check that the orientation of the DFPlayer is correct</li>
        <li>Check to make sure the speaker is plugged into the PCB</li>
        <li>
          Check that the MicroSD card is fully seated in the DFPlayer and didn't
          get accidentally removed during the transfer
        </li>
      </ul>
      <h4>If none or only some of the Sugar Cubes are lighting up...</h4>
      <ul>
        <li>
          Check that the <strong>orientation</strong> of each connector is
          correct
        </li>
        <li>
          Swap a working Sugar Cube with one that does not work. If the Sugar
          Cube is working in the new position, then it may not be the Sugar Cube
          that's broken, but consider double checking the wire or the PCB
        </li>
      </ul>
    </div>
  );
};

export default Page;
