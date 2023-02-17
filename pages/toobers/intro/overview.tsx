import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { PAGES_LAYOUT } from '../../../components/Sidebar';
import { WhatsDue } from '../../../components/WhatsDue';

const Overview = () => {
  return (
    <div>
      <h1>Introduction to Toobers!</h1>
      <h2>Hello 2.00ber!</h2>
      <WhatsDue chapter={'/intro'} />
      <p>
        Here are the step-by-step instructions for building and testing a simon-esque toy called "Toobers!". If you're
        not familiar with the classic 'simon' toy game,{' '}
        <GuideLink target="_blank" href="https://www.youtube.com/watch?v=vLi1qnRmpe4&ab_channel=hop1155">
          here's a video of it
        </GuideLink>
        ! This is an introductory activity designed to get your hands wet in building and assembling your own toy. Below
        is an example of what you might end up with- of course, once you've gone through this activity, you're always
        free to customize and modify as you see&nbsp;fit!
      </p>
      <GuideImage
        caption={`It's the "Textbook Example" Toober`}
        src="/images/toobers/toobers-side-by-side.jpg"
        alt="Toobers Example"
        size="FULL"
      />
      <p>
        These instructions assume no prior experience with building electronics or using a microcontroller. The
        explanatory sections will be very basic since it is not our goal in this project to teach programming or
        electronics. Initially, we'd like everyone to be able to follow the step-by-step instructions and get the
        project to work!
      </p>
      <p>
        Parts of this activity should be done before coming to lab, and some will happen during lab. We will provide you
        with all tools and resources needed complete this activity. Please note when various parts are due/will be
        happening in the timeline to the left!
      </p>
      <h2>Getting Help</h2>
      <p>
        If you're in lab, please feel free to reach out to any of the lab instructors or lab mentors on your team. There
        may also be extra lab staff floating around (you'll see them in white lab coats.)
      </p>
      <p>
        Need help outside of lab time? Just post in the{' '}
        <GuideLink href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J" target="_blank">
          #ask-the-tas
        </GuideLink>{' '}
        Slack channel! There's usually someone available, even late at night. Also, if you know the answer to a question
        that has been asked, please feel free to pitch in and answer. We're all in this together!
      </p>
      <h3>Asking for help on Slack</h3>
      <p>
        <strong>Electronics-related questions</strong>: (e.g., wiring & electronics) it is often helpful to post a
        picture of your wiring so that we can check that everything has been wired correctly. It may take multiple
        pictures from different angles to show all the wiring clearly. Sometimes a second set of eyes is all you need.
      </p>
      <p>
        <strong>Software-related questions</strong>: it is often helpful to post a picture of the error message, or if
        you've modified the code to do something different, posting the code you modified is helpful. Tip: In Slack, you
        can post a code block by surrounding your text with <code>```</code>.
      </p>
      <p>
        <strong>CAD-related questions</strong>: Be sure to describe what you're trying to do, and what you've tried so
        far. As with the above, screenshots are helpful! It's also sometimes advised to <strong>sketch</strong> on paper
        and take a photo of what you're trying to CAD if you're getting stuck!
      </p>
      <p>
        Not sure what kind of an issue it is? Post information on anything you have! Avoid just saying something "just
        doesn't work". Here's a checklist for points that are good to cover in your question:
      </p>
      <ul>
        <li>What is happening (or not happening)?</li>
        <li>What you were expecting to happen?</li>
        <li>Anything you may have tried so far to fix the problem</li>
      </ul>
    </div>
  );
};

export default Overview;
