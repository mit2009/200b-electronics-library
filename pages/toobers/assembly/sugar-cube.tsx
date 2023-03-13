const Page = () => {
  return (
    <div>
      <h1>Assemble the Sugar Cubes</h1>
      <h2>Some Subassembly Required</h2>
      <p>Let's review. The Sugar Cube assembly is composed of 3 parts:</p>
      <ol>
        <li>Silicone button</li>
        <li>Printed Circuit Board (PCB)</li>
        <li>Acrylic mounting plate</li>
      </ol>
      <p>You'll be assembling 2 of the 4 Sugar Cubes for your Toober.</p>
      <p>
        Starting with the acrylic plate. Peel off the brown protective paper on
        both sides. <strong>Make sure the text is facing you</strong> and is not
        mirrored. Put the bronze threaded inserts into the two holes closer to
        the center of the acrylic, as advised by the arrows. Take special note
        to make sure you put both inserts in the same direction.
      </p>
      <p>
        Position the acrylic plate and the PCB together so that the acrylic
        divot curls around the PCB headers, and the centered hole in the acrylic
        encircles the bottom of the LED's soldered connections. You can double
        check that this is the correct alignment by making sure that the corner
        holes in the acrylic plate and the PCB are also aligned.
      </p>
      <p>
        Lastly, place the silicone button atop the Sugar Cube PCB, taking care
        to keep the corner holes still aligned. Use two M2 screws to anchor the
        silicone button and the PCB onto the acrylic plate (screwing through the
        two corner holes on each layer). Tighten the screws enough so that the
        entire assembly feels secure,{' '}
        <strong>but not enough to squeeze or damage the silicone.</strong>
      </p>
      <p>
        Give the completed Sugar Cube assembly a few test pushes to make sure
        that the button isn't stuck or stiff in odd places. If it feels
        sluggish, try unscrewing the corner M2 screws a bit.
      </p>
      <h2>Label the Cubes</h2>
      <p>
        Once you have 4 assembled sugar cubes, grab a sharpie label them{' '}
        <strong className="color">0, 1, 2, and 3</strong>. Starting with the 0
        numbering helps in software since Arduino indexes with 0.
      </p>
    </div>
  );
};

export default Page;
