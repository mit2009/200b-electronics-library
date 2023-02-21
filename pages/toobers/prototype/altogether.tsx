import GuideImage from '../../../components/GuideImage';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Playable Prototype</h1>
      <h2>Almost there!</h2>
      <WhatsDue chapter="/prototype" />
      <p>
        First part: talk about connecting wires to join the POWER MODULE and the
        SWITCH
      </p>
      <GuideImage
        src="/images/toobers/power-module-diagram.png"
        border={false}
        size={'LARGE'}
      />
      <p>talk about how to Connect the wires to the BREADBOARD</p>
      <GuideImage src="/images/toobers/final-assembly.jpg" border={false} />
    </div>
  );
};

export default Page;
