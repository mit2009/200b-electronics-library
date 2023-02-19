import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>The Breadboard</h1>
      <h2>Understanding the Breadboard</h2>

      <p>
        We've got a lot of components we want to assemble together; how do we
        actually connect them? Introducing: <strong>breadboards</strong>! A
        breadboard is a tool that allows you to easily wire up a circuit by
        sticking the contacts of components directly into the holes, which we'll
        call <strong>points</strong>.
      </p>
      <GuideImage
        src="/images/toobers/breadboard-ortho.jpg"
        border={false}
        alt="Breadboard Explanation"
      />

      <p>
        The horizontal rows of five points (i.e.
        <span className="pin">A1</span>, <span className="pin">B1</span>,
        <span className="pin">C1</span>, <span className="pin">D1</span> and
        <span className="pin">E1</span>) are connected to each other. There is a
        middle channel (sometimes called the trough) that separates the two
        sides (i.e. <span className="pin">A1</span>,
        <span className="pin">B1</span>, <span className="pin">C1</span>,
        <span className="pin">D1</span> and <span className="pin">E1</span> are
        NOT connected to <span className="pin">F1</span>,
        <span className="pin">G1</span>, <span className="pin">H1</span>,
        <span className="pin">I1</span> and <span className="pin">J1</span>).
      </p>
      <p>
        The two-hole-wide columns next to both of the long edges of the
        breadboard are your power rails. Typically, the one next to the red line
        is connected to your power source (in this case,{' '}
        <span className="pin red">3.7v</span>) and the one next to the black or
        blue line is connected to your ground (often abbreviated as{' '}
        <span className="pin black">GND</span>. The voltage of ground is often ,
        as is the case here <span className="pin black">0v</span>). The power
        rails on opposite sides of the breadboard are NOT connected to one
        another.
      </p>
      <p>
        In the image below, we're showing three examples of points that are
        connected to each other - two horizontal rows and one power rail. Note
        that each purple outline indicates one group of points.
      </p>
      <GuideImage
        size={'MEDIUM'}
        border={false}
        src="/images/toobers/breadboard-diagram.png"
        caption="Closer look at the breadboard"
      />
      <h3>Wire Stripping</h3>
      <p>
        There are many sizes of wire for various applications. Larger diameter
        wires can handle more current. For breadboards, 22 AWG (American Wire
        Gauge) solid wire is commonly used (which is what you have in your
        kits!) The larger the number of the gauge, for example 26 AWG, the
        smaller the diameter of the conductor.
      </p>
      <p>
        Most wires have a conductor in an insulating sheath. The ends of the
        wire are exposed by stripping the insulation off. Wire strippers have
        holes that are sized for the various gauges of wire. Place the wire in
        the hole that corresponds to the gauge of the wire.
      </p>
      <GuideImage
        size={'SMALL'}
        border={false}
        src="/images/toobers/wire-cutter.png"
      />
      <p>
        If the hole is too small, the conductor will be nicked. If the hole is
        too big, the insulation will not be fully cut and may be difficult to
        remove. Once the wire is in the hole, squeeze the handles tightly to cut
        the insulation, then pull the wire stripper away at a slight angle (see
        video below).
      </p>
      <p>
        When wiring breadboards, it's a good idea to plan where the wire starts
        and ends before cutting and stripping the wire. Properly sized wires
        result in neater breadboards, and neater breadboards are usually easier
        to debug. One process for stripping wires is as follows:
      </p>
      <ol>
        <li>Strip one end of the wire, about a quarter inch.</li>
        <li>Bend the stripped end and place it in the start hole.</li>
        <li>Measure the wire to the end hole.</li>
        <li>Add about a quarter inch and cut the wire.</li>
        <li>Strip the newly cut end of the wire.</li>
        <li>
          Bend the newly stripped end and place the wire in the start and end
          holes.
        </li>
      </ol>
      <p>
        If the start and end holes are difficult to reach, a different set of
        holes the same distance apart may be used as a reference instead. If
        needed, watch the video below for a demonstration of the steps above.
      </p>
      <div className="video-container">
        <video controls>
          <source src="/images/toobers/wire-stripping.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3>Prepare the Bus Lines</h3>
      <p>
        Our first step is to set up the power bus lines. Staying with
        convention, we will use the red buses for the{' '}
        <span className="pin red">3.7v</span> supply and the blue buses for
        ground <span className="pin black">0V</span>. For this part, we
        recommend that you strip your own hookup wire to keep things nice and
        neat. While not required, it's good practice to use red wire for the
        positive power supply and black wire for the ground, if those colors are
        available. We will not only connect the microcontroller's{' '}
        <span className="pin black">GND</span> and{' '}
        <span className="pin red">3.7v</span> pins to the busses, but we will
        also connect the busses on the two sides of the breadboard so that the
        busses on both sides of the board can be used.
      </p>
      <p>Wire the following:</p>
      <ul>
        <li>left-side blue bus to right-side blue bus</li>
        <li>left-side red bus to right-side red bus</li>
      </ul>
      <p>
        While we may not be using both sides of these power rails just yet for
        this exercise, it's always a good idea to have them wired up. It'll save
        some headache later if you do decide to use them, (and wonder why it's
        not working if you don't wire them up)
      </p>
      <p>{'//'} IMAGE OF WHAT WIRED UP POWER BUSSES SHOULD LOOK LIKE</p>
    </div>
  );
};

export default Page;
