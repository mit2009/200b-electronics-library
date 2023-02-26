import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Sweat the Details</h1>
      <h2>Fillets, Rounds, and Chamfers</h2>
      <p>
        Fillets, Rounds, and Chamfers are three common geometrics used in design
        and engineering. They strengthen parts by reducing stress concentrations
        along corners and edges and soften the look and feel. There's sometimes
        ambiguity between these terms, but in 2.00b (and at MIT), we often use
        these definitions:
      </p>
      <ul>
        <li>
          <strong>Fillets</strong> are roundings of a part in interior edges or
          corners.
        </li>
        <li>
          <strong>Rounds</strong> are roundings of a part in exterior edges or
          corners.
        </li>
        <li>
          <strong>Chamfers</strong> are bevels that are added to edges or
          corners. They are different from fillets and rounds as they produce
          flat surfaces instead of curved ones.
        </li>
      </ul>
      <p>
        As we are making a toy that will be handled frequently, we want to
        soften the edges to prevent them from hurting us. We can achieve this by
        addings rounds to all the edges of our Toobers.
      </p>
      <p>
        To round all the edges, select all edges. There should be 16, not 12
        (the Toober is cut in half and is actually two pieces). Click the{' '}
        <code>Modify &gt; Fillet</code> button and give it a nice round of
        something between 1mm and 5mm. <strong>Do not exceed 5mm</strong>. If
        you do (for this particular edge), some of the inner features will be
        exposed 😳!
      </p>
      <GuideImage
        src={[
          '/images/toobers/fillet-1.png',
          '/images/toobers/fillet-2.png',
          '/images/toobers/fillet-3.png',
        ]}
      />
      <p>
        You'll want to make sure your submission has appropriate fillets, but it
        may not be the first thing you want to do. It's often easier to{' '}
        <strong>make these details at the end</strong>, as it preserves straight
        edges and lines which are easier to sketch and extrude from.
      </p>
      <h2>The Parting Line</h2>
      <p>
        Our Toobers are assembled in two parts. Where the top and the bottom
        meet is know as the parting line. Depending on the manufacturing
        process, this feature can either be very obvious or nearly invisible.
      </p>
      <p>
        If you've ever played with a cheap plastic toy, you've seen a parting
        line running along its circumfirence. This is where the mold for the
        injection plastic joined together. Higher end plastic goods try to hide
        this line to the best of their ability, but you can usually find it.
      </p>
      <GuideImage
        src="/images/toobers/parting-line-tool.png"
        alt="Parting line on the plastic handle of a screwdriver"
      />
      <p>
        On the other hand, some metal manufacturing techniques can achieve
        tolerances that are tight enough to make the parting line invisible.
      </p>
      <GuideImage
        src="/images/toobers/edm-puzzle.webp"
        alt="Metal puzzle pieces that slide together seamlessly"
        border={false}
      />
      <p>
        Since we cannot hide our parting line, we can choose to feature it
        instead. In fact, oftentimes, product designers and industrial designers
        will intentionally incorporate parting lines into the design. Below is
        an example of an Xbox controller featuring an intentional parting line
        design between two surfaces.
      </p>
      <GuideImage src="/images/toobers/controller-closeup.jpg" />
      <p>
        For our Toobers, consider adding a very slight{' '}
        <strong>0.2 to 0.4 mm chamfer</strong> to the edges where our two
        housings (top and bottom) meet up.
      </p>
      <p>
        Similar to the fillet tool, select all the edges you want to be
        chamfered. In this case, it might be easier to do the top and bottom
        housing separately (you can hide them one at a time). Here's what an
        example Toober looks like with a <strong>2.5mm chamfer</strong> applied
        to the seam between the two halves.
      </p>
      <GuideImage
        src="/images/toobers/toober-with-chamfer.png"
        alt="Toober with a chamfer applied to the parting line"
        size="LARGE"
        border={false}
      />
      <p>Here are some close-ups of the parting line.</p>
      <GuideImage
        src={[
          '/images/toobers/toober-with-chamfer-close.png',
          '/images/toobers/toober-with-chamfer-closer.png',
        ]}
      />
      <h2>A Pop of Color</h2>
      <p>
        Colors play a large role in how we perceive the world. More importantly
        color can have a significant impact on how people perceive and interact
        with your toy. Certain colors can evoke different emotions and have
        psychological effects. For example, red is often associated with
        excitement or passion, while blue is often associated with calmness or
        trustworthiness. The shade of color you choose can also influence
        people. Bright and bold colors are more eye-catching and appealing,
        while muted or neutral colors may convey a more sophisticated look.
      </p>
      <ol>
        <li>
          Click <code>Modify {'>'} Appearance</code>
        </li>
        <li>
          Select between <code>Bodies/Components</code> and <code>Faces</code>
        </li>
        <ul>
          <li>
            <code>Bodies/Components</code> will colorize every face of the
            selected body/component, as well as the inside of the
            body/component.
          </li>
          <li>
            <code>Faces</code> will only color the selected face
          </li>
        </ul>
        <li>
          Scroll through <code>Library</code> and find a material you like. You
          also are not limited to the colors/materials in the library. You can
          duplicate and double click on the selected material to change it's
          properties/colors
        </li>
        <li>
          Click and drag the material onto part or face you would like to update
        </li>
        <li>
          When the highlight is over what you want to change, let go of your
          click
        </li>
      </ol>
      <GuideImage src={'/images/toobers/yellow-toober.png'} size="FULL" />
      <h2>Keepin' it Grayscale</h2>
      <p>
        If you're not thinking of adding color to your Toober, keep in mind you
        can also just have a grayscale Toober. Grayscale designs can be simple
        and elegant, allowing the design and the textures to speak for itself.
        The lack of color can also create a sense of sophistication and
        timelessness.
      </p>
      <p>
        If you choose this route, we'll print your Toober on the{' '}
        <GuideLink href="/toobers/cad/3dprinting#j35">J35</GuideLink>.
      </p>
      <h2>Add a Decal</h2>
      <p>
        While we can do a lot with just color and texture, sometimes you will
        want your design to be a little more personal. If you want to add a logo
        or graphic to your Toober, decals are what you are looking for!
      </p>
      <ol>
        <li>
          Create or find an image you would like to add and save it to your
          computer
        </li>
        <li>
          Position your part so that you can see where you would like to place
          your image
        </li>
        <li>
          Left click on the face you would like to add your image to select it
        </li>
        <li>
          Click <code>Insert {'>'} Decal</code>
        </li>
        <li>Click the image icon on the Decal Dialog</li>
        <li>
          Navigate to the where you saved your image and select your image
        </li>
        <li>
          Click <code>Open</code> and click <code>OK</code>
        </li>
        <li>Click on the decal to select it</li>
        <li>
          Right-click and select <code>Edit Decal</code>
        </li>
        <li>
          Use the <code>Rotate</code> manipulator to change the angle
        </li>
        <li>
          Use the <code>Scale</code> manipulator to change the size
        </li>
        <li>
          Use the <code>XY Plane</code> manipulator to change the position
        </li>
        <li>
          Click <code>OK</code> to accept the changes
        </li>
      </ol>
      <p>
        Let's say we wanted to apply this hole-filled decal image to the yellow
        block. This image was made in <strong>Illustrator</strong>, and was as
        simple as drawing a few circles (which you should have plenty of in your
        sketchbooks as well.) This image as a <code>.png</code> such that the
        background is transparent.
      </p>
      <GuideImage src={'/images/toobers/cheese.png'} size={'SMALL'} />
      <p>
        Following the steps above, in the decal dialog, there's also an option
        to 'chain faces'. Sometimes it works better to leave this box unchecked
        and select multiple faces when you apply the decal.
      </p>
      <GuideImage
        src={[
          '/images/toobers/insert-decal.png',
          '/images/toobers/inserting-decal.png',
          '/images/toobers/decal-done.png',
        ]}
      />
      <p>And now we have the beginning of a cheese Toober!</p>
      <p>
        Please keep in mind that decals need to be re-applied when the print is
        setup. Please include no more than <strong>5 individual decals</strong>,
        and be sure to{' '}
        <strong>include high-quality graphic files for your decal</strong> with
        your submission (which you'll learn more about on the next page!).
      </p>
    </div>
  );
};

export default Page;
