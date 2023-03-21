import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Acrylic Light Channel</h1>
      <h2>Transferring some Light!</h2>
      <p>
        We briefly discussed the acrylic light channel in the{' '}
        <GuideLink href="/toobers/cad/base-model-features#acrylic">
          features
        </GuideLink>{' '}
        section of this guide. This solid transparent plastic carries light from
        the charging LED status on the battery module to the edge of the bottom
        housing so it can be seen on the outside of the Toober toy.
      </p>
      <GuideImage
        src="/images/toobers/charging-lights.jpg"
        border={false}
        caption="These are the surface mounted LEDs on the charging PCB."
      />
      <h2>The Acrylic Piece</h2>
      <p>
        <strong className={'color'}>DO NOT PEEL BOTH SIDES</strong> of the paper
        protector off the acrylic piece just yet! We actually need this paper
        protector on one side as it'll help concentrate the light a bit better.
        Orient the acrylic piece as shown, and{' '}
        <strong>only remove the protective paper on the bottom side</strong>.
      </p>
      <p>
        Slide the acrylic piece in, as shown below, making sure the rounded
        corner is facing the direction as shown and that the{' '}
        <strong className={'color'}>bottom side has the paper removed</strong>.
        Making sure it makes contact with the bottom housing.
      </p>
      <GuideImage
        src="/images/toobers/acrylic-light-channel-1.jpg"
        size="LARGE"
        border={false}
      />
      <p>
        Next, like you did before, place the threaded insert in. Be careful with
        this one - don't go full force. Gently press the insert in, so that the
        top is flush with the bottom of the{' '}
        <GuideLink
          target="_BLANK"
          href="https://en.wikipedia.org/wiki/Counterbore"
        >
          counterbore
        </GuideLink>{' '}
        as shown.
      </p>
      <GuideImage
        src="/images/toobers/acrylic-light-channel-2.jpg"
        size="LARGE"
        border={false}
      />
      <p>
        Now you'll want to use a <strong className="color">M3 x 6mm</strong>{' '}
        screw to clamp the acrylic plate down to the charging module. Also be
        careful to not over tighten this one, as you may jack the threaded
        insert up and out of the housing.
      </p>
      <GuideImage
        src="/images/toobers/acrylic-light-channel-3.jpg"
        size="LARGE"
        border={false}
        caption="This is what the light channel should look like when you're done!"
      />
      <p>
        Now, when you charge your Toober (once the case is closed), you'll be
        able to see the charging status (red for charging, green for done!)
      </p>

      <GuideImage
        src="/images/toobers/charging-light.png"
        size={'MEDIUM'}
        border={false}
      />
    </div>
  );
};

export default Page;
