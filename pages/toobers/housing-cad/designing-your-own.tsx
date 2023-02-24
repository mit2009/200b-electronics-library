import GuideImage from '../../../components/GuideImage';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Designing your own Case</h1>
      <h2>It's your turn!</h2>
      <p>
        Now that we've learned some of the fundamentals of our base Toober and
        developed some basic understanding of CAD, we now have the opportunity
        to build on and explore these skills as we design our own case for our
        Toobers game!
      </p>
      <p>
        Use the tools in this tutorial (or any others you may come across) and
        make modifications to your copy of the base Toobers design,{' '}
        <strong>showcasing your uniqueness and interests</strong>! There is no
        right or wrong way to start or finish this process - just make sure
        you're proud of the end result.
      </p>
      <p>We will be 3D-printing your designs in the coming week.</p>
      <h2>Base Constraints</h2>
      <ul>
        <li>
          In the base model, all the walls are around 3mm thick. Typically, it
          is good to maintain at least 2.5mm thickness on large wall sections.
        </li>
        <li>
          You may modify the button locations in the top piece, but please do
          not change the placement of components in the bottom piece or change
          the openings for the battery or power switch in the bottom piece.
          These are the <strong>hard points</strong>.
        </li>
        <li>
          For additions onto the body, they may not increase the overall width
          or depth of the top or bottom piece by more than <strong>7mm</strong>{' '}
          in the X or Y direction. One way to think of this is to keep your
          design within 7mm from all sides, but the available{' '}
          <strong>14mm</strong> buffer can be split along each axis in whichever
          manner you wish.
        </li>
        <li>
          The top housing may have up to a <strong>7mm</strong> increase in
          overall height.
        </li>
        <li>
          The bottom housing may <strong>not change</strong> in height.
        </li>
      </ul>
      <p>The image below contains dimensions of the existing base toober.</p>
      <GuideImage
        src="/images/toobers/case-dimensions-04.png"
        alt="Toober case bounding box"
        size="MEDIUM"
        border={false}
      />
      <p>
        The green lines in the image below represents the bounding box to which
        your design can extend. Think of all the possibilities!
      </p>
      <GuideImage
        src="/images/toobers/case-dimensions-02.png"
        alt="Toober case bounding box"
        size="LARGE"
        border={false}
      />
      <h2>Additional Appendages and ProTOOBERances</h2>
      <ul>
        <li>
          You may design appendages that go on any of the faces that protrudes
          outside of than the allotted bounding box, but we will be printing
          them separately and then you will join them to the base cube shape.
          All such appendages should not be larger than{' '}
          <strong>150mm x 50mm x 25mm each</strong>. If your design requires
          more than 2 such appendages or additional printing capacity,{' '}
          <strong>please contact the TAs on #ask-the-tas</strong> to discuss
          your design, which will need to be approved.
        </li>
      </ul>
      <p>
        Leave your appendages on your model. The 3D printing staff will
        carefully slice them up and add the necessary pins to join the pieces
        together, being mindful of locating features as well as strength of
        printed part. You will receive plenty of instructions and glue during
        the assembly party.
      </p>
      <GuideImage
        src="/images/toobers/case-dimensions-03.png"
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
          <code>FIRSTNAME_LASTNAME_V[X].f3z</code> (note the underscore and
          capitalization. The [X] should be the version number of your saved
          Fusion 360 save file, <strong>without</strong> the square brackets).
          E.g. <code>DAVID_WALLACE_V2.f3z</code>
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

      <WhatsDue
        checklist={{
          '1': 'Your entire Toober housing (minus appendages) fits within a 104mm x 104mm x 52mm bounding box (length x width x height)',
          '2': 'Your Toober appendage(s) fits within a 25mm by 50mm by 150mm bounding box',
          '3': 'Your Toober has no more than 2 appendages (or you have contacted the TAs to discuss your design)',
          '4': 'There have been no modifications to the bottom housing piece',
          '5': 'The file naming scheme follows the format: DAVID_WALLACE_V2.f3z',
        }}
      />
      <WhatsDue chapter={'/housing-cad'} />
    </div>
  );
};

export default Page;
