import GuideImage from '../../../components/GuideImage';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Designing your own Case</h1>
      <h2>It's your turn!</h2>
      <p>
        Now that we have learned some of the fundamental methods of working in
        Fusion 360 software, we now have the opportunity to build on and explore
        these skills as we design our own case for our Toobers game!
      </p>
      <p>
        Use the tools in this tutorial (or any others you may come across) and
        make modifications to your copy of the base Toobers design, showcasing
        your uniqueness and interests! There is no right or wrong way to start
        or finish this process - just make sure you're proud of the end result.
      </p>
      <p>
        We will be 3D-printing your designs in the coming week, so there are a
        few physical limitations to your design to keep in mind:
      </p>
      <ul>
        <li>
          In the base model, all the walls are around 3mm thick. Typically, it
          is good to maintain at least 2.5mm thickness on large wall sections.
        </li>
        <li>
          You may modify the button locations in the top piece, but please do
          not change the placement of components in the bottom piece or change
          the openings for the battery or power switch in the bottom piece.
          These are the "hard points".
        </li>
        <li>
          For additions onto the body, they may not increase the overall width
          or depth of the top or bottom piece by more than <strong>7mm</strong>{' '}
          in the X or Y direction. One way to think of this is to keep your
          design within 7mm from all sides, but the available{' '}
          <strong>14mm</strong> buffer can be split along each axis in whichever
          manner you wish.
        </li>
      </ul>
      <p>Top Case:</p>
      <ul>
        <li>Top piece may have up to a 7mm increase in overall height.</li>
      </ul>
      <p>Bottom Case:</p>
      <ul>
        <li>The height of the bottom case should not change.</li>
      </ul>
      <GuideImage
        src="/images/toobers/toober-box.png"
        alt="Toober case bounding box"
        size="FULL"
        border={false}
      />
      <p>Additional Appendages:</p>
      <ul>
        <li>
          You may design appendages that go on the bottom of the bottom piece or
          appendages that would protrude more than 1" from the sides of the
          cube, but we will be printing them separately and then you will join
          them to the base cube shape. All such appendages should not be larger
          than <strong>150mm x 50mm x 25mm each</strong>. If your design
          requires more than 2 such appendages or additional printing capacity,
          <strong>please contact the TAs on #ask-the-tas</strong> to discuss
          your design, which will need to be approved.
        </li>
      </ul>
      <GuideImage
        src="/images/toobers/appendage-box.png"
        alt="Appendage bounding box"
        size="FULL"
        border={false}
      />
      <p>
        To submit your custom Toobers enclosure, please post in the #3d-print
        Slack channel the following files in <strong>1 thread</strong>:
      </p>
      <ul>
        <li>
          <code>.f3z</code> of your assembly named{' '}
          <code>YOUR_NAME_V24.f3z</code> (note the underscore and
          capitalization. The V24 should be the version number of your fusion
          save file)
        </li>
        <li>
          A screenshot or two showing your design (from different angles, so we
          know what it is supposed to look like)
        </li>
        <li>Copies of any decal images or custom fonts used</li>
        <li>
          If any decals or texture appearances (e.g. wood grains) were used,
          <strong>
            please also note how they are to be placed on the part in the slack
            thread
          </strong>{' '}
          (staff will need to re-apply decals to the part as part of the file
          preparation for 3D printing)
        </li>
      </ul>
      <GuideImage
        src="/images/toobers/export-button.png"
        alt="Fusion export button"
        size="SMALL"
        border={false}
      />
      <GuideImage
        src="/images/toobers/export-options.png"
        alt="Fusion export options"
        size="FULL"
      />
      <p>
        Toober cases will be printed roughly in order of submission date. Please
        submit your case design as soon as you are finished and happy with it so
        that we can start printing before the submission deadline. Changes
        cannot be made to your case once we have started printing it!
      </p>

      <WhatsDue chapter={'/cad'} />
    </div>
  );
};

export default Page;
