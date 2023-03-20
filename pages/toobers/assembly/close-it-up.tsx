import GuideImage from '../../../components/GuideImage';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Close it up</h1>
      <h2>Gently Does It</h2>
      <p>
        Now that we have our electronics working, we'll place everything into
        the Toober housing! This is a delicate process, so be sure to take your
        time and be gentle to avoid displacing any of the connections.
      </p>
      <p>Make sure your Toober is turned off.</p>
      <p>
        Push all the small, non-button wires inside the housing so it's tucked
        away. Gently close up your Toober housing, allowing the wires to
        collapse together and bend all in the same direction as you fold your
        Toober closed.
      </p>
      <GuideImage
        src="/images/toobers/sugar-cubes-connected.jpg"
        size="FULL"
        border={false}
      />
      <p>
        Look around all sides of your Toober to make sure you haven't pinched
        any wires by accident, and use two <strong>M3 x 20mm</strong> screws to
        tighten down the two corners of your Toober.
      </p>
      <GuideImage
        src="/images/toobers/close-it-up.jpg"
        size="MEDIUM"
        border={false}
      />
      <p>
        Turn it on, and make sure it still plays a sound, the lights turn on,
        and each button is responding when it's pressed. If it works, great! If
        not, no worries! Backtrack to find out when things went wrong - after
        all, that's why we use screws (so we can easily take apart and
        diagnose!)
      </p>
      <h2>Congratulations!</h2>
      <p>You now have your very own Toober toy!</p>
      <p>
        To get your Toober to have <strong> all four lights</strong> to light up
        to the colors you customized earlier, simply start up your Toober and
        proceed to 'lose' the game. It'll go into a state where it waits for you
        to press any button to continue, and all the lights will be on at that
        time.{' '}
        <strong className="color">
          You should make sure your Toober is set to this 'all-lit-up' state
          when you get a photograph of it!
        </strong>
      </p>
      <GuideImage
        src="/images/toobers/light-up-toober.jpeg"
        size="MEDIUM"
        border={false}
      />
      <p>
        We hope this activity gave you some insight into the process of creating
        a fully functioning toy prototype, and that you had fun doing it! Feel
        free to refer back to this guide as a resource if you need to reference
        any CAD models, how certain features were made, snippets of code, etc.
      </p>
      <WhatsDue chapter="/assembly" />
    </div>
  );
};

export default Page;
