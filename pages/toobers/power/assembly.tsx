import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Power Module Assembly</h1>
      <h2>The Battery and Charger</h2>
      <p>
        In this section, we'll assemble the power module which we'll actually
        use, as is, in your final Toobers toy. The module is a combination of
        two parts that we've sourced, along with a lasercut acrylic piece that
        gives us a mounting surface and a component to attach things to. Go
        ahead and peel the protective covering on both sides of the acrylic.
      </p>
      <p>
        Once you've peeled it and cleaned it up, take special note of the
        difference in sides. The 'charger' text should face up and be readable.
      </p>
      <GuideImage
        src={[
          '/images/toobers/power-module-peeling.jpg',
          '/images/toobers/power-module-crisp.jpg',
        ]}
        border={false}
      />
      <p>
        The next pieces we'll attach are brass threaded inserts. Thread inserts
        provide us a way to mount components repeatedly without stripping away
        threads of a softer material like plastic or cracking a more brittle
        material like acrylic. We sourced these brass thread inserts from{' '}
        <GuideLink href="https://www.mcmaster.com/94510A360/" target="_blank">
          McMaster-Carr
        </GuideLink>
        . They are a great resource for getting hardware components. Using
        something solid, like the back of your wire strippers, press the brass
        threaded insert into the back of your piece of acrylic (the 'Charger'
        text should be backwards). This is an interference fit, where two parts
        are sized such that the friction between them fasten them together.
      </p>
      <GuideImage
        src={[
          '/images/toobers/power-module-threaded-inserts.jpg',
          '/images/toobers/power-module-correct-orientation.jpg',
        ]}
        border={false}
      />
      <p>
        After adding your threaded brass inserts, we will be adding the charging
        circuit. We sourced our charging circuit from{' '}
        <GuideLink href="https://www.adafruit.com/product/4410" target="_blank">
          Adafruit
        </GuideLink>
        . Adafruit is a great resource for getting electronic components. The
        charging circuit regulates the amount of electrical current that flows
        into the battery and monitors the battery's charge level. The goal is to
        safely and efficiently recharge and discharge our battery. This is a
        very common component in portable electronics, like your smartphones,
        laptops, and cameras.
      </p>
      <p>
        Use two Phillips head screws (the ones with a plus sign shape on top) to
        secure the charging circuit to your piece of acrylic. The charging
        circuit should cover the 'Charger' text on the side where it is face up
        and readable. The screws should go through the holes in the charging
        circuit and into the brass threaded inserts we previously installed. We
        use Phillips head screw over flathead screws (the ones with a minus sign
        shape on top) because they are easier to register your screwdriver on
        and prevent your screwdriver from slipping out.
      </p>
      <GuideImage
        src={[
          '/images/toobers/power-module-other-side.jpg',
          '/images/toobers/power-module-charging-circuit.jpg',
        ]}
        border={false}
      />
      <p>
        Now, we can attach our battery to our Power Module. We will be using
        double-sided tape to attach the battery. Double-sided tape is sticky on
        both sides. It comes in handy when trying to attach two flat surfaces
        together. The double-sided tape we are using is from{' '}
        <GuideLink
          href="https://www.3m.com/3M/en_US/p/d/b40070392/"
          target="_blank"
        >
          3M
        </GuideLink>
        . This tape is the industry standard for mechanical engineers because of
        its strength and how cleanly it comes off of surfaces.
      </p>
      <p>
        Fun Fact: The first iPhone used this doubled-side tape inside it as
        well.
      </p>
      <GuideImage src="/images/toobers/power-module-tape.jpg" border={false} />
      <p>
        Cut yourself a strip of double-sided tape a little shorter than the
        width of your piece of acrylic. Make sure you are actually peeling the
        tape off of the roll and not just the green protective layer. You can
        leave the green protective layer on for now.
      </p>
      <p>
        Place your strip of double-sided tape onto the back of your piece of
        acrylic. It should be on the opposite side of the charging circuit. Once
        you have secure your strip of tape, remove the green protective layer.
        Secure your battery onto the newly exposed adhesive side of the tape.
        Your battery wires should come out on the side of the acrylic with two
        holes and the same side as the connector of the charging circuit. Make
        sure none of the holes of the acrylic are blocked by your battery.
      </p>
      <GuideImage src="/images/toobers/power-module-done.jpg" border={false} />
      <p>
        When you plug in the charger, you should see a small red LED turn on.
        Once it turns green, it's done charging! If{' '}
        <strong>both red and green LEDs</strong> turn on (one may be flashing),
        that means the battery may be dead.
      </p>
      <GuideImage
        src="/images/toobers/charger-done.jpg"
        border={true}
        caption="This is what it'll look like when it's done charging!"
      />
      <WhatsDue chapter="/power" />
    </div>
  );
};

export default Page;
