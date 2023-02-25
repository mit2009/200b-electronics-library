import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import { useState } from 'react';

import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const arduinoCode = `* Height: how much was added to the top half, or if it stayed the same. how much appendages stick out above top surface
* Length/Width: how much was added in the length/width dimensions of the top half and bottom half Whether protrusions may be printed as appendages (separately printed and then attached during assembly).
* Whether there were any other changes to the dimensions of the top and bottom halves.
* Buttons: whether or not there were any changes to button positions. If so, briefly describe change.
* Decals: whether or not any decals were used. If so, list of decals and where/how to position them (since staff will need to reapply). Don’t forget to upload decals into Slack!
* Textures: whether any textures were applied. If so, which texture and where/how to position them.
* Transparency: whether any tranparency is intended. If so, where and how much transparency.
* Color/Grayscale: whether parts should be printed in full-color or whether a part can be printed grayscale.`;

const Page = () => {
  const [code, setCode] = useState(arduinoCode);

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
      <p>We will be 3D-printing your designs in the coming weeks.</p>
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
          For additions onto the body, they may not increase the overall length
          or width of the top or bottom piece by more than <strong>14mm</strong>{' '}
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
      <p>
        You may design appendages that go on any of the faces that protrudes
        outside of than the allotted bounding box, but we will be printing them
        separately and then you will join them to the base cube shape. All such
        appendages should not be larger than{' '}
        <strong>104 x 50 x 25 mm each</strong>. If your design requires more
        than <strong>2 such appendages</strong> or additional printing capacity,{' '}
        <strong>
          please contact the TAs on{' '}
          <GuideLink
            href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
            target="_blank"
          >
            #ask-the-tas
          </GuideLink>
        </strong>{' '}
        to discuss your design, which will need to be approved.
      </p>
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
      <h2 id="submission">Submission Instructions</h2>
      <p>
        To submit your custom Toobers enclosure, please post all your submission
        items in the{' '}
        <GuideLink
          href="https://toyproductdesign2023.slack.com/archives/C04Q98WLAAX"
          target="_blank"
        >
          #3d-print
        </GuideLink>{' '}
        Slack channel the following files in{' '}
        <strong className="color">1 thread</strong>:
      </p>
      <ol>
        <li>
          <code>.f3z</code> of your assembly named{' '}
          <code>FIRSTNAME_LASTNAME_v[X].f3z</code> (note the underscore and
          capitalization. The [X] should be the version number of your saved
          Fusion 360 save file, <strong>without</strong> the square brackets).
          E.g. <code>DAVID_WALLACE_v2.f3z</code>
        </li>
        <li>
          <strong>Two screenshots</strong> showing your design (from different
          angles, so we know what it is supposed to look like)
        </li>
        <li>
          The <strong>Toober Submission Text Details</strong> template (copy and
          paste the block of text below)
        </li>
        <li>
          Copies of any <strong>decal images</strong> or custom fonts used in
          the same thread. Decal images should be ideally 300 PPI, and should be{' '}
          <strong>clearly named</strong>
        </li>
      </ol>
      <h2>Toober Submission Text Details</h2>
      <pre>{arduinoCode}</pre>
      <h2>Exporting your File</h2>
      <GuideImage
        src="/images/toobers/export-button.png"
        alt="Fusion export button"
        size="SMALL"
        border={false}
      />
      <GuideImage
        src="/images/toobers/fusion-export.png"
        alt="Fusion export options"
        size="FULL"
      />
      <p>
        Toober housings will be printed roughly in order of submission date.
        Please submit your case design as soon as you are finished and happy
        with it so that we can start printing before the submission deadline.
        Changes cannot be made to your case once we have started printing it!
      </p>

      <WhatsDue
        checklist={{
          '1': (
            <>
              Your entire Toober housing (minus appendages) fits within a{' '}
              <strong>104 x 104 x 52 mm bounding</strong> box (length x width x
              height)
            </>
          ),
          '2': (
            <>
              Your Toober appendage(s) fits within a{' '}
              <strong>25 x 50 x 104 mm</strong> bounding box
            </>
          ),
          '3': 'Your Toober has no more than 2 appendages (or you have contacted the TAs to discuss your design)',
          '4': 'There have been no height changes to the bottom housing and no modifications to the internals',
          '5': (
            <>
              You have used no more than <strong>5 decals</strong>
            </>
          ),
          '6': 'You have specified colors for the faces that you want colored',
          '7': (
            <>
              If you end up with extra bodies{' '}
              <strong>in addition to the top and bottom</strong>, that should be
              fine and will be handled appropriately by our super-professional
              team of CAD experts- please just make sure that any bodies that
              are intended to print as a unit are actually in contact with each
              other, without any unintended gaps between them. If there are gaps
              between bodies, they will print as separate bodies.
            </>
          ),
          '9': (
            <>
              The exterior edges of your Toober have an appropriate fillet as
              specified{' '}
              <GuideLink href="/toobers/cad/sweat-the-details">here</GuideLink>,
              and is no more than <strong>5mm</strong>
            </>
          ),
          '20': (
            <>
              The file naming scheme follows the format:{' '}
              <strong>DAVID_WALLACE_v2.f3z</strong>, and the version number of
              the file name matches the save version of the Fusion 360 file (in
              David's case, it would be version 2)
            </>
          ),
          '21': 'You have thoroughly read the submission guidelines and have prepared all the necessary files!',
        }}
      />
      <WhatsDue chapter={'/cad'} />
    </div>
  );
};

export default Page;
