import Image from 'next/image';

import GuideImage from '../../../components/GuideImage';

const Glue = () => {
  return (
    <div>
      <h1>Glues and Adhesives</h1>
      <h2>Sticky stuff</h2>
      <p>
        The material of your Toober is a material from Stratasys called{' '}
        <a
          href="https://www.goengineer.com/3d-printing/stratasys-materials/vero"
          target="_blank"
          rel="noreferrer"
        >
          Vero
        </a>
        , a UV-set acrylic resin. We want the two halves of the Toobers to be
        able to open and close so we can work on the insides, so be careful not
        to get glue between these two halves!
      </p>
      <p>
        Even if you don't have appendages or any parts to glue together for your
        Toober, please read this section so you'll know what to do for the
        future if you do have parts that require adhesives to put together.
      </p>
      <p>
        For gluing (specifically for the Stratasys J55 parts), we recommend
        Cyanoacrylate or CA glue. This is the basis of "super glue", "crazy
        glue", or "krazy glue". CA is excellent for gluing together plastic,
        metal, and even human skin! On that note, it's generally a good idea to
        wear gloves when working with substances like this.
      </p>
      <GuideImage
        src={'/images/toobers/super-glue.jpeg'}
        size={'SMALL'}
        border={false}
      />
      <p>
        CA glue dries or cures when it comes in contact with moisture (including
        the moisture in the air!) Sometimes, you might use an accelerator to
        help speed up that process- in this case, we won't need that because the
        glue we have will dry in a matter of minutes.
      </p>
      <h2>Prepare for Gluing</h2>
      <p>
        Glue works best when there's good surface area to attach to. Oftentimes
        you'll want to rough up the surface before gluing two things together.
        You won't need to in this case because the parts are relatively small,
        but you do want to make sure the two surfaces are clean before
        attaching, and remove any leftover cleaning materials/residue!
      </p>
      <p>
        Place the alignment pins in one end of your part, and do a couple of{' '}
        <strong>dry fits</strong> first. You don't need to put glue on the pins
        - these are mostly for alignment.
      </p>
      <h2>Just a bit will do the trick!</h2>
      <p>
        Open up your superglue by untwisting the cap, removing the red ring, and
        then re-tightening the cap (it'll puncture the super glue and open it
        for you to use.) Then remove the red cap.
        <GuideImage
          src={'/images/toobers/using-superglue.jpg'}
          size={'FULL'}
          border={false}
        />
      </p>
      <p>
        Unlike wood glue, you don't need to saturate or evenly coat your entire
        surface with this glue. A dab on one of the surfaces you'll be attaching
        to is enough (<strong>one drop per square inch</strong>).
      </p>
      <GuideImage
        src={'/images/toobers/drop-of-superglue.jpg'}
        border={false}
        size={'FULL'}
        caption={
          'Just a bit will do the trick! With a paper towel nearby at the ready!'
        }
      />
      <p>
        For the glue that we've provided you, once you've added your part, hold
        the two pieces together for at least{' '}
        <strong className={'color'}>30 seconds</strong>. It'll remain in place
        after that and should hold itself together, but will reach its full
        strength in 24 hours.
      </p>
      <h2>Steady Hands</h2>
      <p>
        Sometimes the geometry of the parts may be a little tricky. Be very
        still when you hold it together!
      </p>
      <GuideImage
        src={[
          '/images/toobers/pig-disconnect.jpeg',
          '/images/toobers/pig-connect.jpeg',
        ]}
        size={'SMALL'}
        border={false}
        caption={
          "This one didn't have any alignment pins. Hold it very, very still; don't spook the piggy!"
        }
      />
      <p>
        If the hole for the alignment pin is a through-hole, consider adding
        just a bit of tape to plug up the hole, to prevent glue from dripping
        onto you, the table, or worst of all- unwanted parts of your Toober.
      </p>
      <GuideImage
        src={'/images/toobers/tape-leak.jpeg'}
        size={'SMALL'}
        border={false}
        caption="Just a bit of tape to cover the hole"
      />
    </div>
  );
};
export default Glue;
