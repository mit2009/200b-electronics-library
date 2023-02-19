import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Ingredients for Lab 2</h1>
      <h2>Bon Appétit!</h2>
      <WhatsDue chapter={'/breadboarding'} />
      <p>
        Welcome to lab 2! Today, you'll be prototyping your Toobers toy with a breadboard and some simple electronic
        components. By the end of this lab, you should have a playable version of your Toobers toy on a breadboard! If
        you don't finish in time, no worries - there will be staffed lab hours during the week where you can finish up
        the breadboard.
      </p>
      <p>
        The first part of this lab will be a <strong>team activity.</strong>
      </p>
      <p>
        In front of you are <strong>9 containers</strong> which each contain a couple of electronic components. Pick one
        team member, and have them open <strong>container #1</strong>. Briefly discuss this item, if any of you've used
        it before, and help each other understand how to use the item and where to go for more information.
      </p>
      <p>
        Pick another team member, and repeat for <strong>containers 2-9</strong> in order (some of you might have to go
        multiple times.) If nobody really understands what they're looking at, your instructor and/or mentor should
        chime in and give a quick overview!
      </p>
      <p>
        Once <strong>the entire team</strong> has completed this section together, feel free to each proceed at your own
        pace.
      </p>
    </div>
  );
};

export default Page;
