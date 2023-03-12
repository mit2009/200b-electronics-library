import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Electronics & Testing</h1>
      <h2>Together!</h2>
      <p>
        Take a look at the custom PCB that we've made for your Toober! A PCB
        like this can often help with compacting the size of your toy. The
        downside of a custom PCB is it can take a while to design and print. A
        good compromise is sometimes to use a perfboard (short for a perforated
        board, which has holes that you can solder connections onto). If done
        correctly, this can make your electronics more reliable.
      </p>
      <p>
        Let's transfer the electronics from your breadboard to the PCB. Remove
        the <strong>Arduino Nano</strong> from the breadboard (using a{' '}
        <GuideLink href="https://en.wikipedia.org/wiki/Spudger" target="_BLANK">
          spudger
        </GuideLink>{' '}
        if necessary). Place it onto the breadboard paying attention to the
        direction of the USB port. Next, remove the <strong>DFPlayer</strong>{' '}
        and place it on the PCB, paying attention to the direction the MicroSD
        card faces.
      </p>
      <p>
        Remove the jerry-rigged power setup, and separate the wires that join
        the <strong>battery module</strong> and the{' '}
        <strong>power switch</strong>. Take the JST-XH connectors and place onto
        the connectors on the PCB.
      </p>
      <p>
        Disconnect the speaker from the breadboard, and plug it into the PCB.
      </p>
      <p>
        And finally, take the four JST-PH 4-Pin Jumper cables and connect them
        from the PCB to the Sugar Cubes. Once again,{' '}
        <strong className="color">
          pay attention to which way the connectors face
        </strong>
        !
      </p>
      <p>
        Test the setup by turning the switch on. If you still have the original
        code on the Arduino Nano, the speaker should play, and the Sugar Cubes
        should light up!
      </p>
    </div>
  );
};

export default Page;
