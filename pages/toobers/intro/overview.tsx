import Link from 'next/link';

const Overview = () => {
  return (
    <div>
      <h1>Introduction to Toobers</h1>
      <h2>Hello 2.00ber!</h2>
      <p>
        Here are the step-by-step instructions for building and testing a simon-esque toy called "Toobers!". If you're
        not familiar with the classic 'simon' toy game,{' '}
        <Link href="https://www.youtube.com/watch?v=vLi1qnRmpe4&ab_channel=hop1155">here's a video of it</Link>! This is
        an introductory activity designed to get your hands wet in building and assembling your own toy. Below is an
        example of what you might end up with- of course, once you've gone through this activity, you're always free to
        customize and modify as you see fit!
      </p>
      <p>
        These instructions assume no prior experience with building electronics or using a microcontroller. The
        explanatory sections will be very basic since it is not our goal in this project to teach programming or
        electronics. Initially, we'd like everyone to be able to follow the step-by-step instructions and get the
        project to work!
      </p>
      <p>
        Parts of this activity should be done before coming to lab, and some will happen during lab. We will be
        providing you with all tools and resources needed complete this activity. Please note when various parts are
        due/will be happening in the timeline above!
      </p>
      <h2>Getting Help</h2>
      <p>
        If you're in lab, please feel free to reach out to any of the lab instructors or lab mentors on your team! There
        may also be extra lab staff floating around (you'll see them in white lab coats)!
      </p>
      <p>
        Need help outside of lab time? Just post in the #ask-the-tas channel! There's usually someone available, even
        late at night. Also, if you know the answer to a question that has been asked, please feel free to pitch in and
        answer. We're all in this together!
      </p>
      <p>
        <strong>Electrical-related questions</strong>: (e.g., wiring & electronics) it is often helpful to post a
        picture of your wiring so that we can check that everything has been wired correctly. It may take multiple
        pictures from different angles to show all the wiring clearly. Sometimes a second set of eyes is all you need.
      </p>
    </div>
  );
};

export default Overview;
