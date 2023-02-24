import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Getting the Base Model</h1>
      <h2>This section being worked on by Elaine</h2>
      <p>Coming soon!</p>
      <h2>Starting from the Basics</h2>
      <p>
        To help you get started, we're providing a base model that you can
        import and add on to. This <strong>.f3z</strong> contains not only the
        base top and bottom housings that you'll be modifying, but also the
        components such as the sugar cubes, pcbs, speaker, such that you can
        reference them while you CAD.
      </p>
      <GuideImage src="/images/toobers/toobers-base.png" />
      <div className="center">
        <GuideLink
          target="_blank"
          href="https://github.com/mit2009/200b-toobers/blob/main/2023/arduino/FourNewFriends.zip?raw=true"
        >
          <span className={'download-btn'}>
            Download the Toobers Base Model
          </span>
        </GuideLink>
      </div>
    </div>
  );
};

export default Page;
