import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Upload the Code</h1>
      <h2>Wrapping it up!</h2>
      <p>
        Time to upload the code! We, as expected, also haven't written these
        instructions yet. The code is{' '}
        <GuideLink href="https://github.com/mit2009/200b-toobers/tree/main/2023/arduino/ToobersArduino">
          here
        </GuideLink>
        , and you'll need to download all 3 files and put them in the same
        folder (we'll zip it up for the students)
      </p>
      <WhatsDue chapter="/prototype" />
    </div>
  );
};

export default Page;
