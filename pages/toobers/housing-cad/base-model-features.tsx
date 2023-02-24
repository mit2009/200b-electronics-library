import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>The Base Model Features</h1>
      <h2>Secrets about our Base Model</h2>
      <p>
        The base model contains a bunch of exciting features that you are free
        to snatch up for your future toy designs!
      </p>
      <h2>Alignment Features</h2>
      <p>
        The Toober base model has a couple of simple alignment features. One
        such feature is a physical break in the continuity of the parting line
        of the bottom shell as seen below. The Toober top shell has a matching
        protrusion that locates perfectly into the base shell, made with the
        Fusion 360 boolean operation. This feature ensures that the Toober case
        can only be assembled together in one orientation, which is important in
        keeping the sugar cube buttons mapped correctly to the PCB.
      </p>
      <GuideImage
        src="/images/toobers/toober-alignment-feature.jpg"
        size={'MEDIUM'}
      />
      <p>
        As the first alignment feature is an internal alignment feature not
        visible on the external surfaces, it is accompanied by a second external
        alignment feature that can be seen in the image below. The pill shape on
        the side of the top shell serves as a visual indicator of correct
        orientation.{' '}
      </p>
      <GuideImage
        src="/images/toobers/toober-visual-alignment-feature.jpg"
        size={'MEDIUM'}
        border={false}
      />
      <h2>USB Port</h2>
      <p>
        The USB-C charging port feature needs to provide both access to the USB
        charging circuit as well as provide enough clearance around it for the
        USB plug to be fully inserted into the charging circuit without any
        interference from the surrounding toober shell wall. The shell wall is
        cut out around the USB port in this wall to ensure the molding around
        the USB plug does not collide with the case.
      </p>
      <GuideImage src="/images/toobers/toober-usb-c.jpg" size={'SMALL'} />
      <h2>Wire Clip</h2>
      <p>
        The wire clip feature is an extrusion from the sidewall to assist in
        cable management for the speaker.
      </p>
      <GuideImage
        src="/images/toobers/toober-speaker-holder.jpg"
        size={'MEDIUM'}
      />
      <h2>Housing Screws</h2>
      <p>
        The top and bottom case parts are secured together with two housing
        screws. The housing screws pass through the screw boss features of the
        bottom shell and screw into the threaded inserts installed in the top
        Toober shell as seen below.
      </p>
      <GuideImage
        src="/images/toobers/toober-housing-screws.jpg"
        size={'LARGE'}
        border={false}
      />
    </div>
  );
};

export default Page;
