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
      <h2>The Acrylic Piece</h2>
      <p>
        <strong className={'color'}>DO NOT PEEL BOTH SIDES</strong> of the paper
        protector off the acrylic piece just yet! We actually need this paper
        protector on one side as it'll help concentrate the light a bit better.
        Orient the acrylic piece as shown, and{' '}
        <strong>only remove the protective paper on the bottom side</strong>.
      </p>
      <p>
        Slide the acrylic piece in, making sure it makes contact with the bottom
        housing. Hold it in place as you install the final{' '}
        <strong>threaded insert</strong>. Holding the acrylic piece there will
        prevent the threaded insert from falling out the other side.
      </p>
      <p>
        While you're still holding everything, grab a <strong>M3 x 6</strong>{' '}
        screw it in. The screw should sit relatively flush with the top of the
        bottom housing, sinking into the{' '}
        <GuideLink
          target="_BLANK"
          href="https://en.wikipedia.org/wiki/Counterbore"
        >
          counterbore
        </GuideLink>
        .
      </p>
    </div>
  );
};

export default Page;
