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
        Soldering is the process of joining different types of metal together by
        melting a filler material (the solder). Solder is typically made of lead
        or lead-free alloys (which have low melting-points). We'll discuss the
        safety of soldering and soldering fumes in the next section.
      </p>
      <GuideImage
        removeMargin={true}
        border={false}
        size="MEDIUM"
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
      <h2>Sourced Parts</h2>
      <p>
        To prototype something quickly, often times you'll want to procure
        existing parts rather than build everything from scratch. In this case,
        the two parts we will be using don't have 'breadboard-friendly'
        connectors. The two parts are <strong>the power switch</strong> and the{' '}
        <strong>charging circuit</strong>.
      </p>
      <GuideImage
        src="/images/toobers/charging-circuit-and-switch.png"
        size="MEDIUM"
        border={false}
      />
      <p>
        When we solder, we'll connect wires to them such that we can attach them
        more easily to our breadboard, and then eventually to the printed
        circuit board (PCB) of our final toy prototype.
      </p>
    </div>
  );
};

export default Page;
