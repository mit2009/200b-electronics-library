import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Preparing your Housing</h1>
      <h2>Hand-Packaged for you!</h2>
      <p>
        We've packaged your freshly printed Toobers in this lovely little
        tupperware container so all the pieces stay together (if you have
        additional pieces.) This tupperware container is for you to keep! You
        can use it to move other small parts, electronics, or sandwiches!
      </p>
      <GuideImage src="/images/toobers/tupperware.jpg" border={false} />
      <h2>Be Careful! Parts are Brittle!</h2>
      <p>
        If you recall from the lecture, these prototypes can be very expensive
        and take a while to print, given they are printed on very precise
        machines. Unfortunately, if you accidentally damage your Toobers, you
        may not be able to get one reprinted until the end of the semester. If
        you drop your Toobers on the floor,{' '}
        <strong className="color">it will likely shatter</strong>, so be
        careful!
      </p>
      <GuideImage
        src="/images/toobers/brittle-1.jpeg"
        border={false}
        caption={
          'Parts that are skinny like this are especially susceptible to damage'
        }
      />
      <p>
        Watch out for small, flimsy parts! These smaller features are especially
        prone to snapping off.{' '}
        <strong>
          Be careful when handling your Toober, and never apply force to your
          Toobers!
        </strong>
      </p>
      <GuideImage
        src="/images/toobers/brittle-2.jpeg"
        border={false}
        caption={`Be careful of areas like the speaker grill! You don't want to press too hard on weak areas like this as they'll crack and break`}
      />
      <h2>Removal of Extra Gunk</h2>
      <p>
        This 3D printer uses a gel-like substance to create its 'support
        material'. Take a moment to make sure that all the gunk has been
        thoroughly removed from the parts. Extra places to look out for
        includes: the speaker holes, the acrylic light channel, any holes for
        threaded inserts, and the screw holes. If there is extra support
        material, use something soft like a toothpick or a popsicle stick to
        scrape off any excess.
      </p>
      <GuideImage
        src={[
          '/images/toobers/support-materials.jpeg',
          '/images/toobers/support-materials-closeup.jpeg',
        ]}
        border={false}
        caption={
          'This is what the support material looks like when it first comes off the printer. Hopefully we got most of that off!'
        }
      />
      <p>
        Avoid using something too abrasive, like 100 grit sandpaper (or
        sandpaper on the belts) on your Toobers! Depending on how the color was
        printed on,{' '}
        <strong>you may accidentally sand off too much of your Toobers</strong>{' '}
        and reveal a different color.
      </p>
      <p>
        If you want to give it a nice finish and remove any layers of residue,
        some water and a little rubbing with some 3M Scotch-Brite pads will do
        the trick! We highly recommend wetting the pads before using them; it'll
        make them a little less abrasive and any residue can easily be wiped
        away.
      </p>
      <GuideImage
        src="/images/toobers/scotch-brite.jpg"
        border={false}
        size={'SMALL'}
      />
      <h2>Sticky Toober!</h2>
      <p>
        If your Toobers is feeling a little sticky or unpleasant, dampen a paper
        towel or shop rag with some <strong>isopropyl alcohol</strong> and wipe
        the part down. It shouldn't take much to give it a nice, smooth, clean
        finish!
      </p>
      <h2>Threaded Inserts</h2>
      <p>
        When designing an enclosure for your toy prototype, you want to think
        about how the insides could be accessible for repair, while not having
        it fall apart when you're testing/playing with the toy!
      </p>
      <p>
        For using screws on 3D printed parts, we generally{' '}
        <strong>don't want to 3D print threads</strong> that the screws will go
        into (since the screws are metal and the part is plastic, it's easy for
        one to over power the other). To create parts that screw together, you
        can use a nut on the other end. The alternative is to use these aluminum
        screw-to-expand inserts for plastic. These components (
        <GuideLink
          href="https://www.mcmaster.com/threaded-inserts/aluminum-screw-to-expand-inserts-for-plastic/"
          target="_BLANK"
        >
          from McMaster
        </GuideLink>
        ) can be pressed into the holes, and will stay in via friction.
      </p>
      <GuideImage
        src="/images/toobers/aluminum-screw-to-expand-inserts-for-plastic.png"
        size={'MICRO'}
        caption="Something to consider for future 3D printed parts!"
        border={false}
      />
      <h2>Install the Threaded Inserts</h2>
      <p>
        There are <strong className={'color'}>13</strong> threaded inserts for
        your Toober housing.
      </p>
      <ul>
        <li>3 on the bottom for the battery and charger module</li>
        <li>8 on the top housing for the sugar cube buttons (2 each)</li>
        <li>2 on the top housing to keep both housing halves closed</li>
      </ul>
      <p>
        As these are press-fit threaded inserts, we'll be applying a bit of
        force down to set them in place. You'll use a screwdriver or something
        similar to press down on the insert going into the Toober
      </p>
      <GuideImage
        src="/images/toobers/threaded-insert-closeup.jpeg"
        border={false}
      />
    </div>
  );
};

export default Page;
