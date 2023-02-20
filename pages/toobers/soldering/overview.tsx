import Image from 'next/image';
import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Soldering Overview</h1>
      <h2>Hot Stuff</h2>
      <WhatsDue chapter={'/soldering'} />
      <p>
        This is what you'll end up with today. This is sometimes known as an{' '}
        <strong>Arduino Shield</strong>, a printed circuit board (PCB) component
        that can sit directly ontop of the Arduino.{' '}
        <strong>
          The long leads you see on the PCB go into the Arduino pins
        </strong>
        , and the board has connectors which allow us to later assemble and
        connect our components easier. Take a look below at what your end result
        will be.
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="LARGE"
        src="/images/toobers/404"
        alt="End Result"
      />
      <h2>Soldering</h2>
      <p>
        Soldering is the process of joining different types of metal together by
        melting a filler material (the solder). Solder is typically made of lead
        or lead-free alloys (which have low melting-points). We'll discuss the
        safety of soldering and soldering fumes in a later section.
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="LARGE"
        src="/images/toobers/soldering-closeup.gif"
        alt="Close-up of Soldering"
      />
      <p>
        While soldering and welding both involve melting metal to join two or
        more work pieces, soldering is different from welding. Unlike welding,
        soldering does not involve melting the work pieces. In addition to
        electronics, soldering has applications in plumbing, flashing,
        metalwork, jewelry, musical instruments, etc.!
      </p>
      <h2>The Upgrades!</h2>
      <p>
        Before jumping into the hot stuff, let's take a look at what's going to
        be happening. We'll be condensing the form factor of our current toy
        into something more manageable. With that, we'll be soldering and
        permanently attaching parts so that wires and components don't
        accidentally fall out if the toy is shaken about. And lastly, we'll be
        making it so our Toobers doesn't use our computer as a power source, by
        adding a 9v battery (rechargeable!) and a toggle power switch.
      </p>
      <h2>Printed Circuit Board & Perfboards</h2>
      <p>
        Printed Circuit Boards (or PCBs) are everywhere in our world today. If
        you're using anything that involves electricity, it's likely that
        there's a PCB in the device. A PCB forgoes the wires in a breadboard
        circuit in exchange for <strong>traces</strong> - the network of
        conductive paths that make up a printed circuit board and connect the
        different components. Your components (like resistors, or buttons) are
        then soldered to this PCB.
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="LARGE"
        src="/images/toobers/404"
        alt="Anatomy of a PCB"
      />
      <p>
        While getting a professionally made PCB is relatively cheap and easy
        nowadays, you may not have a chance to design and make a PCB for this
        class, as the turnaround & shipping time for a PCB tend to not work very
        well with the milestones of this class. We also have tools in the PDL
        that helps with making your PCB, although that can also be time
        consuming.
      </p>
      <p>
        So, what do we want to do if we want something more reliable than a
        breadboarded circuit in our final product? A reasonable solution is a
        'perfboard'! A perfboard doesn't have traces, so you'll need to solder
        your own wires, but it still has the reliability and permanence of a
        printed circuit board.
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="LARGE"
        src="/images/toobers/404"
        alt="PCB Permanence"
      />
      <p>
        Alright, now that we understand that option, back to the PCB. Take a
        look at the PCB, and take a few seconds to identify all the different
        components that you'll attach to it. You may notice that we're missing
        locations for the resistors for the LEDs on the PCBs. That's because the
        buttons you have are extra special! Each arcade button is actually a
        button AND a LED with a built-in resistor.
      </p>
      <h2>The PCB File</h2>
      <p>
        This PCB was made in{' '}
        <GuideLink href="https://easyeda.com/" target="_blank">
          EasyEDA
        </GuideLink>
        , a free, online-based PCB design tool. If you're curious, you can
        download the file{' '}
        <GuideLink href="404 TODO" target="_blank">
          here
        </GuideLink>
        .
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="LARGE"
        src="/images/toobers/404"
        alt="PCB Design Screenshot"
      />
    </div>
  );
};

export default Page;
