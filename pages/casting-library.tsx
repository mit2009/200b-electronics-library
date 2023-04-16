import GuideImage from '../components/GuideImage';
import { GuideLink } from '../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>2.00b Resins & Plastics Library</h1>
      <h2>Recommended Materials for Casting!</h2>
      <p>
        Looking to get your feet wet in casting? Below are some materials the
        2.00b staff recommend if you'd like to try out casting in your toy
        design process!
      </p>
      <p>
        The primary brand of materials we use for casting is{' '}
        <GuideLink href="https://www.smooth-on.com/">Smooth-on</GuideLink>, a
        company that has been around for over a century and is known to provide
        safe and easy-to-use materials, with lots of guides and support online.
      </p>
      <GuideImage
        src="/images/casting/smooth-on.png"
        size="SMALL"
        alt="Casting Library"
        border={false}
      />
      <p>
        You can buy the majority of their catalog at{' '}
        <GuideLink href="https://www.reynoldsam.com/">
          Reynolds Advanced Materials
        </GuideLink>
        , 25 minutes by bus or 10 minutes by car from MIT. (It's an insanely
        cool shop especially if you're into prop-making, special effects, and
        more!)
      </p>
      <p>More information will be posted soon!</p>
      {/* <h2>I'd like to make a...</h2>
      <h4>Soft Rubber Mold</h4>
      <p>We'll post more information soon!</p>
      <h4>Hard Plastic Mold</h4>
      <p>We'll post more information soon!</p>
      <h4>Hand/Body Part Mold</h4>
      <p>We'll post more information soon!</p>
      <h4>Cast Hard Plastic Object</h4>
      <p>We'll post more information soon!</p>
      <h4>Cast Soft Rubbery Object</h4>
      <p>We'll post more information soon!</p>
      <h4>Cast Hard Rigid Foam Object</h4>
      <p>We'll post more information soon!</p>
      <h4>Cast Soft Squishy Foam Object</h4>
      <p>We'll post more information soon!</p> */}
    </div>
  );
};

export default Page;
