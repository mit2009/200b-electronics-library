import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>3D Printing</h1>
      <h2>Real Life to CAD, CAD to Real Life</h2>
      <p>
        Before we get started, we want to understand a little bit about how
        these enclosures will be printed. In product design, it's important to
        keep in mind how something will be made (or manufactured) when you
        design it. This may not be something that is intuitive immediately to
        you, but it's knowledge that you will build up hopefully as you learn
        more manufacturing techniques if you choose to pursue mechanical
        engineering.
      </p>
      <p>
        To bring our CAD models to reality, we will be printing them on fancy
        polyjet printers. Specifically, the J55™ Prime 3D Printer.
      </p>
      <GuideImage src="/images/toobers/j55.png" alt="J55™ Prime 3D Printer" />
      <p>
        This 3D printer is able to print materials indistinguishable from "final
        products." Take a look at the image below! Yes, the "leather" strip of
        material was 3D printed using this printer. And so was the
        transparent/marble glass-like material on the right.
      </p>
      <GuideImage
        src="/images/toobers/j55materials.png"
        alt="Prints from J55™ Prime 3D Printer samples"
      />
      <p>
        The J55 uses a rotational bed for 3D printing. Here's a photo of a tray
        of Toobers on the print bed!
      </p>
      <GuideImage
        src="/images/toobers/j55bed.png"
        alt="Prints bed of J55™ Prime 3D Printer with Toobers"
      />
      <h2>Print Materials</h2>
      <p>
        The J55 can use a variety of different materials at once. Stratasys
        offers over{' '}
        <GuideLink
          href="https://www.stratasys.com/en/materials/materials-catalog/"
          target="_blank"
        >
          100 different types
        </GuideLink>{' '}
        of material all with different properties for this particular printer.
        For 3D printing your Toobers, we'll load what's appropriate for you such
        that you get a pretty nice finish for your housing.
      </p>
      <p>In particular, these materials are:</p>
      <ul>
        {[
          'VeroUltraWhiteS',
          'VeroUltraBlackS',
          'VeroUltraClear',
          'VeroYellowV ',
          'VeroCyanV',
          'VeroMagentaV',
        ].map((material) => {
          return <li key={material}>{material}</li>;
        })}
      </ul>
      <p>
        With these materials, we can mix and match and get millions of different
        colors at varying opacity levels!
      </p>
      <h2>
        How is it different from a FDM (fused deposition modeling) printer?
      </h2>
      <p>
        You may have seen printers like the ones below (common models being the
        Prusa, Ender, FlashForge, Ultimaker, and Makerbot.) The J55 is different
        to these FDM in a variety of ways:
      </p>
      <GuideImage
        src={[
          '/images/toobers/prusa.jpeg',
          '/images/toobers/ender3.png',
          '/images/toobers/ultimaker.png',
        ]}
        alt="Common FDM Printers"
      />
      <p>
        <strong>Technology</strong>: FDM uses a process of heating and extruding
        a thermoplastic filament through a nozzle to create layers, while
        Polyjet uses an inkjet-style process to deposit tiny droplets of
        photopolymer material that are cured with UV light. Accuracy and
        resolution: Polyjet printers typically offer higher accuracy and
        resolution than FDM printers. The J55 Prime Polyjet printer can print
        layers as thin as 14 microns, while FDM printers typically have layer
        heights ranging from 50-400 microns.
      </p>
      <p>
        <strong>Material properties</strong>: FDM printers typically use
        thermoplastics such as ABS, PLA, and PETG, while Polyjet printers can
        print with a wider range of materials, including flexible and
        transparent materials, as well as multiple materials in a single print.
      </p>
      <p>
        <strong>Color</strong>: The J55 Prime Polyjet printer can print in
        full-color, while FDM printers are typically limited to a single color
        or require manual color changes during the printing process.
      </p>
      <p>
        <strong>Post-processing</strong>: FDM prints often require
        post-processing, such as sanding or painting, to achieve a smooth
        surface finish, while Polyjet prints generally have a smooth surface
        finish right out of the printer.
      </p>
      <h2>Support Material</h2>
      <p>
        The support material used by the J55 printer is a crumbly gel-like
        material called{' '}
        <GuideLink
          href="https://www.stratasys.com/en/materials/materials-catalog/polyjet-materials/polyjet-support-materials/sup710/"
          target="_blank"
        >
          SUP710
        </GuideLink>{' '}
        , which is specially designed for use with Polyjet printers. This
        material is typically printed at a lower density and in a different
        color than the primary material, making it easy to distinguish between
        the two.
      </p>
      <GuideImage
        src="/images/toobers/j55support.png"
        alt="J55 Support Material"
      />
      <p>
        During the printing process, the support material is printed
        simultaneously with the primary material, layer by layer. The support
        material is printed in areas where there are overhangs, bridges, or
        other features that need support during printing. The support material
        is designed to stick to the primary material and provide a solid base
        for the overhanging or complex features.
      </p>
      <p>
        Once the print is complete, the object and the support material are
        removed from the printer. Most of the support material can then be
        removed by hand or with tools like plastic scrapers that won't damage
        the print. Residual materials in nooks & crannies are removed using the
        waterjet, which shoots a pressured stream of water that can be directed
        to clean any remaining support material off the print.
      </p>
      <h2>Printing Speed</h2>
      <p>
        The print speed of the J55 varies a lot based on several factors. The
        first is the height of the tallest element being printed. Remember,
        because it's on a rotational print bed, the printer will continuously
        run until the last level has been printed. This means the print time
        scales linearly with the height of the print.{' '}
      </p>
      <p>
        The other factor that affects print time is how far away the prints are
        positioned from the center. If prints are further out on this circular
        print tray, the rotational speed of the print bed is actually slower to
        give time for the printer head to deposit, cure, and clean the nozzle as
        it has a longer distance to travel when prints are on the outside vs.
        when prints are closer to the center.
      </p>
      <p>
        All in all, a tray like what you see above might take up to{' '}
        <strong>12 hours to print</strong>. With over a hundred students in the
        class, that's a lot of printing-hours! This is why optimal packing and
        height management of the prints are very important factors to us before
        we send these Toobers to print!
      </p>
    </div>
  );
};

export default Page;
