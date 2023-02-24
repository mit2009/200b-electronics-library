import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>Sweat the Details</h1>
      <h2>Fillets, Rounds, and Chamfers</h2>
      <p>
        Fillets, Rounds, and Chamfers are three common geometrics used in design
        and engineering. They strengthen parts by reducing stress concentrations
        along corners and edges and soften the look and feel.
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
        src="/images/toobers/parting-line.png"
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
        instead. We will be adding a chamfer to the edges where our two parts
        meet up.
      </p>
      <h2>A Pop of Color</h2>
      <p>
        Colors play a large role in how we percieve the world. More importantly
        color can have a significant impact on how people percieve and interact
        with your toy. Certain colors can evoke different emotions and have
        psychological effects. For example, red often associated with excitement
        or passion, while blue is often associated with calmness or
        trustworthiness. The shade of color you choose can also influence
        people. Bright and bold colors are more eye-catching and appealing,
        while muted or neutral colors may convey a more sophisticated look.
      </p>
      <ol>
        <li>
          Click <code>Modify {'>'} Appearence</code>
        </li>
        <li>
          Select between <code>Bodies/Components</code> and <code>Faces</code>
        </li>
        <ul>
          <li>
            <code>Bodies/Components</code> will change every face of the
            selected body/component
          </li>
          <li>
            <code>Faces</code> will only update the selected face
          </li>
        </ul>
        <li>
          Scroll through <code>Library</code> and find a material you like
        </li>
        <li>Click and drag it onto part or face you would like to update</li>
        <li>
          When the highlight is over what you want to change, let go of your
          click
        </li>
      </ol>
      <h2>Add a Decal</h2>
      <p>
        While we can do a lot with just color and texture, sometimes you will
        want your design to be a little more personal. If you want to add a logo
        or name to your toy, decals are what you are looking for.
      </p>
      <ol>
        <li>
          Find an image you would like to add and save it to your computer
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
        Please keep in mind that decals need to be re-applied when the print is
        setup. Please include no more than <strong>5 individual decals</strong>,
        and please read the instructions for submitting decals carefully!
      </p>
    </div>
  );
};

export default Page;
