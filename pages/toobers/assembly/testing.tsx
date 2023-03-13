import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Electronics & Testing</h1>
      <h2>Getting Permanent</h2>
      <p>
        Take a look at the custom PCB that we've made for your Toober! A PCB
        like this can often help with compacting the size of your toy. The
        downside of a custom PCB is it can take a while to design and print. A
        good compromise is sometimes to use a perfboard (short for a perforated
        board, which has holes that you can solder connections onto). If done
        correctly, this can make your electronics more reliable.
      </p>
      <h2>Transferring the Electronic Components</h2>
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
      <h3>Power Switch & Battery</h3>
      <p>
        Remove the jerry-rigged power setup, and separate the wires that join
        the <strong>battery module</strong> and the{' '}
        <strong>power switch</strong>. Take the JST-XH connectors and place onto
        the connectors on the PCB.
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
        And finally, take the four JST-PH 4-Pin Jumper cables and connect them
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
