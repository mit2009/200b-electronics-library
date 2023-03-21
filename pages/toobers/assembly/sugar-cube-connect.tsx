import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import GuideVideo from '../../../components/GuideVideo';

const Page = () => {
  return (
    <div>
      <h1>Connecting the Sugar Cubes!</h1>
      <h2>Into the Top Housing</h2>
      <p>
        Set your top housing down in front of you in the orientation shown
        below.{' '}
        <strong className="color">
          Note the alignment feature (should be pointed down towards you)
        </strong>
        . Grab your sugar cubes, and place them into the housing.
      </p>
      <p>
        The layout below is what we recommend such that when it comes to
        selecting the colors for the cubes, you have an easy way of keeping
        track which is which. If your Toober doesn't use the standard 2 x 2
        sugar cube layout, don't worry! Just try to remember which buttons are
        which once it's closed.
      </p>
      <GuideImage
        src="/images/toobers/orienting-housing.jpg"
        size="FULL"
        border={false}
      />
      <p>
        Screw the sugar cubes into the top housing using eight{' '}
        <strong>M3 x 8mm</strong> screws.
      </p>
      <p>
        Once those are secure, set the bottom housing in front of you in the
        orientation shown below. This lays out the jumper wire connections
        clearly (shown in purple), which makes them more clear and also the case
        easier to close later on.
      </p>
      <GuideImage
        src="/images/toobers/housing-side-by-side-upside-down.jpg"
        size="FULL"
        border={false}
      />
      <p>
        Take the four <strong>JST-XH 4-Pin jumper wires</strong> and connect
        them to the Sugar Cubes.
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-cable-direction.jpg"
        size="FULL"
        border={false}
      />
      <p>
        <strong>Do not trust</strong> the color of the wires, and pay extra
        attention to{' '}
        <strong className="color">the way the jumper wires face</strong>! The
        orientation of the jumper wire into the PCB is fixed, but the
        orientation on the Sugar Cube is not. Here is what button 1 would look
        like.
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-wires-1.jpg"
        size="FULL"
        border={false}
      />
      <p>
        Now connect the other end of the JST wires to the PCB,{' '}
        <strong>matching the number going into the socket</strong> (labelled on
        the PCB as <code>Button0</code> through <code>Button3</code>). The
        jumper wire orientation on the PCB end is less ambiguous as the
        orientation is fixed (thank goodness for good connector selector!).
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-connector-pcb.jpg"
        size="FULL"
        border={false}
      />
      <p>
        When all 4 sugar cubes are connected, it should look something like the
        below!
      </p>
      <GuideImage
        src="/images/toobers/sugar-cubes-connected.jpg"
        size="FULL"
        border={false}
      />
      <h2>A Sugar Cube Hat</h2>
      <p>
        This section only pertains to you if you have a 3D printed cap or
        appendage on top of the sugar cube, like something similar below. If you
        don't have this, feel free to move onto the{' '}
        <GuideLink href="/toobers/assembly/testing">next section</GuideLink>!
      </p>
      <GuideImage
        src="/images/toobers/sugar-cube-hat.jpg"
        size="MEDIUM"
        border={false}
      />
      <p>
        These sugar cube toppers were adjusted to fit the sugar cubes, but
        because they can trap the air underneath and make them hard to put on,
        we advise using a popsicle stick or something soft to break the air seal
        (watch video below for instructions!)
      </p>
      <GuideVideo src="sugar-cube-hat-video.mp4" />
    </div>
  );
};

export default Page;
