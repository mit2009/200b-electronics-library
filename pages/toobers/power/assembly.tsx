import GuideImage from '../../../components/GuideImage';
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
      <GuideImage
        src="/images/toobers/power-module-peeling.jpg"
        border={false}
        size={'MEDIUM'}
      />
      <p>
        Once you've peeled it and cleaned it up, take special note of the
        difference in sides. The 'charger' text should face up and be readable.
      </p>
      <GuideImage src="/images/toobers/power-module-crisp.jpg" border={false} />
      The next piece we'll attach is a brass threaded insert. ... blah blah blah
      explain more. This is the mcmaster part:
      https://www.mcmaster.com/94510A360/
      <GuideImage
        src="/images/toobers/power-module-threaded-inserts.jpg"
        border={false}
      />
      <GuideImage
        src="/images/toobers/power-module-correct-orientation.jpg"
        border={false}
      />
      <GuideImage
        src="/images/toobers/power-module-other-side.jpg"
        border={false}
      />
      <GuideImage
        src="/images/toobers/power-module-charging-circuit.jpg"
        border={false}
      />
      <p>
        This section will have better written instructions. But here, have some
        photos
      </p>
      <GuideImage src="/images/toobers/power-module-tape.jpg" border={false} />
      <GuideImage src="/images/toobers/power-module-done.jpg" border={false} />
      <WhatsDue chapter="/power" />
    </div>
  );
};

export default Page;
