import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>Mounting the Sugar Cube</h1>
      <h2>I like to move it move it.</h2>
      <p>
        The sugarcubes are attached to the Toober top housing via 2 screws. If
        we take a look from top down, this is what we get:{' '}
      </p>
      <GuideImage
        src="/images/toobers/top-of-toober.png"
        alt="Top down view of the Toober"
      />
      <p>
        If we look closely at just one button, we can see that the minimum area
        (in the X/Y plane) needed for one of these buttons is actually a
        combination of the acrylic plate and the PCB. If you choose to move the
        location of these lovely sugarcubes, you'll want to make sure that
        nothing interferes with the area that these sugarcubes sit in (see
        dotted line below.) Of course, another way to check is to import the
        sugarcube in to your model so you can both visually inspect if there's
        interference as well as to use the Fusion 360{' '}
        <strong>interference tool</strong> (which we'll show in a bit).
      </p>
      <GuideImage
        src="/images/toobers/top-of-sugar.png"
        alt="Top down view of the Sugar Cube"
      />
      <h2>Creating your own Sugarcube Mount</h2>
      <p>
        First, determine which plane you'd like your button to be on. Ballpark
        if you'll have enough space for the button itself before proceedin. The
        rectangular, bounding box of the shape is roughly 36mm by 36mm. Your
        housing wall should be roughly 3mm thick. While the buttons are fairly
        tall, y ??? TODO: Finish paragraph
      </p>
      <GuideImage
        src="/images/toobers/sugar-dimensions.png"
        alt="Sugar Cube Dimensions"
      />
      <p>
        We'll focus on making one sugar cube mount for now, since once you make
        one, you can easily make 4 (either manually or with any of the
        patterning/duplication/mirroring tools).
      </p>
      <p>
        Click the <strong>Create Sketch</strong> button, and create a 16mm by
        16mm square. Confirm the sketch.
      </p>
      <p>
        Click the <strong>Extrude</strong> button. Make sure the operation is
        set to <strong>Cut</strong>. Extrude through the housing wall (either by
        an Extent Type Distance of wall thickness, or you can use the Extent
        Type: 'To Object' feature. Clicking <strong>ok</strong>, you should have
        a square hole in your housing.
      </p>
      <p>
        Click the <strong>Fillet</strong> tool. Add a 2mm Fillet to the hole.
        This will give it the nice, rounded button shape for the sugar cube.
        Click <strong>ok</strong>.
      </p>
      <p>TODO: Finish instructions</p>
      <h2>Double Check, then Check Again</h2>
      <p>TODO: Add content</p>
    </div>
  );
};

export default Page;
