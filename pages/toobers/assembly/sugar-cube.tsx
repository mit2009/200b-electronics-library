import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>Assemble the Sugar Cubes</h1>
      <h2>Some Subassembly Required</h2>
      <p>
        By the end of this section, you should have 4 nifty sugar cubes that
        will act as the buttons of your Toober.
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-done.jpeg"
        size="FULL"
        border={false}
      />
      <p>
        You'll be assembling <strong className="color">2</strong> of the 4 Sugar
        Cubes for your Toober! Start by grabbing one acrylic plate.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-paper-on-plate.jpeg"
        size="SMALL"
        border={false}
      />
      <p>
        Peel off the brown protective paper on both sides (while we won't see
        this since this part is inside the housing, it'll make the pin out
        labels visible on the PCB.){' '}
        <strong>Make sure the text is facing you</strong> and is not mirrored.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-clear-plate.jpeg"
        size="MEDIUM"
        border={false}
      />
      <p>
        Put the <strong className="color">bronze</strong> threaded inserts into
        the two holes closer to the center of the acrylic, as advised by the
        arrows. Take special note to make sure you put both inserts in the same
        direction.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-plate-with-inserts.jpeg"
        size="LARGE"
        border={false}
      />
      <p>
        Press down hard on the inserts so they go into the hole all the way. If
        you're having trouble doing this with your bare hands, feel free to
        rotate it upside down and press it down on the table using your body
        weight.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-plate-push-down.jpeg"
        size="SMALL"
        border={false}
      />
      <p>
        When fully inserted, the sugar cube assembly should look like the below.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-inserts-pushed.jpeg"
        size="LARGE"
        border={false}
      />
      <p>
        Position the acrylic plate and the PCB together so that the acrylic
        divot curls around the PCB headers, and the centered hole in the acrylic
        encircles the bottom of the LED's soldered connections. You can double
        check that this is the correct alignment by making sure that the corner
        holes in the acrylic plate and the PCB are also aligned, as shown below.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-stack.jpeg"
        size="LARGE"
        border={false}
      />
      <p>
        Place the silicone button atop the Sugar Cube PCB, taking care to keep
        the corner holes still aligned.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-with-silicone.jpeg"
        size="MEDIUM"
        border={false}
      />
      <p>
        Use two M2 screws to anchor the silicone button and the PCB onto the
        acrylic plate (screwing through the two corner holes on each layer).
        Tighten the screws enough so that the entire assembly feels secure,{' '}
        <strong>but not enough to squeeze or damage the silicone.</strong>
      </p>

      <GuideImage
        src="/images/toobers/sugarcube-screw-proper.jpeg"
        size="MEDIUM"
        border={false}
        caption={
          'Pay close attention to how much the screw sinks into the silicone. This amount in the above photo is about right.'
        }
      />
      <p>
        If you <strong>overtighten</strong> the screws, they may sink into the
        silicone and tear the button. Be careful! The below illustrates what you
        should not do.
      </p>
      <GuideImage
        src="/images/toobers/sugarcube-screw-too-much.jpg"
        size="FULL"
        border={false}
      />
      <p>
        Give the completed Sugar Cube assembly a few test pushes to make sure
        that the button isn't stuck or stiff in odd places. If it feels
        sluggish, try unscrewing the corner M2 screws a bit.
      </p>
      <h2>Label the Cubes</h2>
      <p>
        Once you have 4 assembled sugar cubes, grab a sharpie or a pen and some
        masking tape and label them{' '}
        <strong className="color">0, 1, 2, and 3</strong>. Starting with the 0
        numbering helps in software since Arduino indexes with 0.
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-labelled.jpeg"
        size="LARGE"
        border={false}
      />
    </div>
  );
};

export default Page;
