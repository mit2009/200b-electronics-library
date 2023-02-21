import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>The Power Circuit</h1>
      <h2>Let the Energy Flow</h2>
      <WhatsDue chapter="/power" />
      <p>
        This section is a quick explainer on powering the Arduino and some weird
        edge cases we've found. Instructors: you can skip it for now. we believe
        in you.
      </p>
      <h2>Li-ion Battery Safety</h2>
      <p>blah blah section on LiPo Batteries & Safety</p>
    </div>
  );
};

export default Page;
