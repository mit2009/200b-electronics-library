import Image from 'next/image';

const Glue = () => {
  return (
    <div>
      <h1>Glues and Adhesives</h1>
      <h2>Sticky stuff</h2>
      <p>
        The material of your Toober is a material from Stratasys called{' '}
        <a href="https://www.goengineer.com/3d-printing/stratasys-materials/vero" target="_blank" rel="noreferrer">
          Vero
        </a>
        , a UV-set acrylic resin. We want the two halves of the Toobers to be able to open and close so we can work on
        the insides, so be careful not to get glue between these two halves!
      </p>
      <p>
        Even if you don't have appendages or any parts to glue together for your Toober, please read this section so
        you'll know what to do for the future if you do have parts that require adhesives to put together.
      </p>
      <p>
        For gluing (specifically for the Stratasys J55 parts), we recommend Cyanoacrylate or CA glue. This is the basis
        of "super glue", "crazy glue", or "krazy glue". CA is excellent for gluing together plastic, metal, and even
        human skin! On that note, it's generally a good idea to wear gloves when working with substances like this.
      </p>
      <div className={'image-container'}>
        <Image alt={'CA Glue'} src={'/images/toobers/ca-glue.webp'} width={300} height={300} />
      </div>
      <p>
        CA glue dries or cures when it comes in contact with moisture (including the moisture in the air!) Sometimes,
        you might use an accelerator to help speed up that process- in this case, we won't need that because the glue we
        have will dry in a matter of minutes.
      </p>
      <h2>Prepare your Surface for Gluing</h2>
      <p>
        Glue works best when there's good surface area to attach to. Oftentimes you'll want to rough up the surface
        before gluing two things together. You won't need to in this case because the parts are relatively small, but
        you do want to make sure the two surfaces are clean before attaching, and remove any leftover cleaning
        materials/residue!
      </p>
      <h2>Just a bit will do the trick!</h2>
      <p>
        Unlike wood glue, you don't need to saturate or evenly coat your entire surface with this glue. A dab on one of
        the surfaces you'll be attaching to is enough (<strong>one drop per square inch</strong>). Once you've added
        your part, you want to make sure that you hold the two pieces together for a good few minutes. It'll remain in
        place after that and should hold itself together, but will reach its full strength in 24 hours.
      </p>
    </div>
  );
};
export default Glue;
