import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Testing & Troubleshooting Tips</h1>
      <h2>Time to Turn it on!</h2>
      <p>
        Test the setup by turning the switch on. If you completed the
        breadboarding exercise from a few labs ago, you should still have the
        original code on the Arduino Nano. The game should start: the speaker
        should play, and the sugar cubes should light up!
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
      <h4>If the Toober turns on, starts up normally, but then stops...</h4>
      <ul>
        <li>
          This is most likely due to your Toober not having enough power. Charge
          the battery for 5 minutes and then try again!
        </li>
      </ul>
      <h4>If your audio player is still making crackling sounds</h4>
      <ul>
        <li>
          Make sure the Toober is <strong>only</strong> connected to the battery
          (no USB!)
        </li>
        <li>Make sure your battery is charged</li>
      </ul>
      <h2>Speed up the Charging!</h2>
      <p>
        This charging circuit actually has a faster charging mode. The board is
        initially set to the slower mode, as the board is intended to be used
        with a variety of different batteries, but ours can actually handle
        500mA of charging current. If needed,{' '}
        <strong>an instructor or mentor will help you solder the gap</strong> to
        increase your battery charging speed.
      </p>
      <GuideImage
        src="/images/toobers/charging-500mA.jpg"
        size="MEDIUM"
        border={false}
      />
    </div>
  );
};

export default Page;
