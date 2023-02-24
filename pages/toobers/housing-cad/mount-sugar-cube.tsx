import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>Moving the Sugar Cubes</h1>
      <h2>I Like to Move It Move It</h2>
      <p>
        The sugar cubes are attached to the Toober top housing via 2 screws.
        Looking top down, this is what we get:{' '}
      </p>
      <GuideImage
        src="/images/toobers/top-of-toober.png"
        alt="Top down view of the Toober"
        border={false}
      />
      <p>
        If we look closely at just one button, we can see that the minimum area
        (in the X/Y plane) needed for one of these buttons is actually a
        combination of the acrylic plate and the PCB. If you choose to move the
        location of these lovely sugar cubes, you'll want to make sure that
        nothing interferes with the area that these sugar cubes sit in (see
        dotted line below.) Of course, another way to check is to import the
        sugar cube in to your model so you can both visually inspect if there's
        interference as well as to use the Fusion 360{' '}
        <strong>interference tool</strong> (which we'll show in a bit).
      </p>
      <GuideImage
        src="/images/toobers/top-of-sugar.png"
        alt="Top down view of the Sugar Cube"
      />
      <h2>Moving the Sugar Cube</h2>
      <p>
        If you'd like to move the sugar cubes, go ahead and look for a sketch
        called <span className="instruction">Sugar Cube Button Locations</span>.
        Change the dimensions below to modify the placement of the holes, and
        the features following it should update automatically.{' '}
        <strong>
          If you notice that there are red or yellow highlighted boxes in your
          timeline, you may have errors you need to address, and your placement
          may be invalid
        </strong>
        .
      </p>
      <p>
        When you move the placement of these, examine the model carefully to see
        if any of the new sugar cube locations would result in any issues
        including interference problems (will this new location cause the sugar
        cubes to intersect with another part) or assembly problems (will you
        still be able to access to screws to attach the cube?).
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-button-locations.png"
        size={'FULL'}
      />
      <h2>Creating your own Sugar Cube Mount</h2>
      <p>
        If you'd like to reposition the sugar cube onto a different face
        entirely, we've detailed instructions below which should help you do so.
        (This is one exception that we'll make if you'd like to make your
        Toober's top housing taller than the alloted 7mm - which is if you want
        to add the sugar cubes to the side of the Toober instead of the front.)
      </p>
      <p>
        First, determine which plane you'd like your button to be on. Ballpark
        if you'll have enough space for the button itself before proceeding. The
        rectangular, bounding box of the shape is roughly 36mm by 36mm. Your
        housing wall should be roughly 3mm thick. The buttons do stick out quite
        a bit so there is a bit of a buffer if you do make your walls thicker
        for some reason.
      </p>
      <GuideImage
        src="/images/toobers/sugar-dimensions.png"
        alt="Sugar Cube Dimensions"
        border={false}
      />
      <p>
        We'll focus on making one sugar cube mount for now, since once you make
        one, you can easily make 4 (either manually or with any of the
        patterning/duplication/mirroring tools).
      </p>
      <ol>
        <li>Hide all parts except the top housing.</li>
        <li>
          Click the <strong>Create Sketch</strong> button, and create a 16mm by
          16mm square. Confirm the sketch.
        </li>
        <li>
          Click the <strong>Extrude</strong> button. Make sure the operation is
          set to <strong>Cut</strong>. Extrude through the housing wall (either
          by an Extent Type Distance of wall thickness, or you can use the
          Extent Type: 'To Object' feature). Click <strong>OK</strong>. you
          should have a square hole in your housing.
        </li>
        <li>
          Click the <strong>Fillet</strong> tool. Add a 2mm Fillet to the hole.
          This will give it the nice, rounded button shape for the sugar cube.
          Click <strong>OK</strong>.
        </li>
      </ol>
      <p>TODO: Finish instructions</p>
      <h2>Double Check, then Check Again</h2>
      <p>TODO: Add content</p>xF
    </div>
  );
};

export default Page;
