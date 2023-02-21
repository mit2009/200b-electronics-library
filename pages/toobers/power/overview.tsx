import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Li-Ion Battery</h1>
      <h2>Additional Form of Power</h2>
      <WhatsDue chapter="/power" />
      <p>
        You may have heard of the two common types of batteries used in
        modern-day gadgets - Li-po (lithium polymer) batteries and Li-ion
        (lithium-ion) batteries.
      </p>
      <p>
        Li-po and Li-ion batteries are similar in a lot of ways, but can differ
        in a few when it comes down to commercial applications. While both are
        suitable for portable devices, a Li-ion battery is an excellent choice
        for long-lasting devices. On the other hand, a Li-po battery is more
        efficient and is less likely to explode. However, you will find more
        Li-ion batteries used in many devices because of their accessibility and
        affordability.
      </p>
      <GuideImage
        src="/images/toobers/li-ion.jpg"
        border={false}
        size="MEDIUM"
        caption="Your Li-Ion Battery!"
      />
      <h2>Charging your Li-ion Battery</h2>
      <p>
        Because of the chemical properties of the battery, it's important to
        charge your li-ion battery when it's low. If it's depleted to below
        their minimum voltage, the battery may appear to be "dead" on some
        chargers. Conversely, be careful about overcharging it. The reason we
        have a fancy charging circuit is because it will automatically stop
        charging when the battery is full. If you overcharge a Li-ion battery,
        it can cause the battery to swell, which can damage the battery and the
        device it's in.
      </p>
      <h2>Li-ion Battery Safety</h2>
      <p>
        According to OSHA, the US government agency responsible for occupational
        safety and health, "Lithium batteries are generally safe and unlikely to
        fail, but only so long as there are no defects and the batteries are not
        damaged. When lithium batteries fail to operate safely or are damaged,
        they may present a fire and/or explosion hazard."
      </p>
      <p>
        While this certainly is good to know, be aware you're working in an
        environment which has items with high temperature (soldering irons),
        machinery (tools) and the occasional screws/screwdriver that could
        puncture your battery if you're not careful!
      </p>
      <p>
        In the rare case of a li-ion battery fire, the fires are very difficult
        to put out. With batteries like these, the most common practice is just
        to move the battery into an area with as few combustables as possible,
        and just wait for the reaction to burn out. Remember, MIT's policy is to
        not fight fires.
      </p>
      <h2>Powering the Arduino Nano</h2>
      <p>
        There are a couple of ways to power your Arduino Nano. Up until now, the
        power from your Arduino Nano comes from your laptop's USB cable. In a
        toy product prototype, it's not practical to have an entire laptop
        embedded with the toy if it has a microcontroller.
      </p>
      <p>
        The Li-ion battery is a great solution that's small and energy efficient
        which can power your Arduino and your electronics for a reasonable
        amount of time. Note that on the Arduino Nano, there is a{' '}
        <span className="pin red">Vin</span> pin. While the{' '}
        <GuideLink target="_BLANK" href="https://docs.arduino.cc/hardware/nano">
          specifications sheet
        </GuideLink>{' '}
        says the Arduino Nano requires 7V, we've found that it works just fine
        with the 3.7V input from the Li-ion battery because of some of the
        internal chips & circuitry.
      </p>
    </div>
  );
};

export default Page;
