import GuideImage from '../../../components/GuideImage';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Background Info</h1>
      <h2>Your Freshly Printed Toobers!</h2>
      <WhatsDue chapter="/assembly" />
      <p>
        Hello! Exciting! You've hopefully received your freshly printed Toobers
        printed on the Stratasys J55 Prime or the J35 Pro. This is the last part
        to the Toobers project. <strong>Before the end of this lab</strong>,
        make sure that you <strong>get a photo of your Toobers</strong> with
        Danny, the course photographer. After that, you're free to take your
        Toobers home!
      </p>
      <GuideImage
        src="/images/toobers/walle-toobers.png"
        border={false}
        size={'MEDIUM'}
      />
      <p>
        Try fitting the two halves of your housing together! Note that only one
        orientation should properly 'fit'.
      </p>
      <p>
        Between you submitting your CAD file and the printing of your Toober, a
        few things happened. Reading the below will give you a better
        understanding of what 3D printing entails, and may help you as you think
        about using 3D printing as a prototyping technique for building your toy
        product prototypes!
      </p>
      <h2>Going from Physical to Digital</h2>
      <p>
        Your file was first reviewed by a team of TAs, past TAs and 3D Printing
        experts (thanks, Jordan, Sam, Lauren, Dabin, and James!) In addition to
        the checking that the file was valid, no walls were too thin/too thick,
        and the size is reasonable to print, your file was also checked to make
        sure that nothing edited modified the hardpoints. This meant that button
        clearances, on/off toggle switch, battery, arduino, PCB, wires, etc. all
        fit as they did before. There's a lot to keep track of! (see our
        internal tracking sheet below)
      </p>
      <GuideImage
        src="/images/toobers/printing-tracker-2023.png"
        border={true}
        size={'FULL'}
        caption="Toobers Printing Tracking Sheet. Can you spot your submission?"
      />
      <p>
        We also checked that bodies which were intended to be printed together
        were correctly in contact with each other. Even a gap as small as 0.001
        inch meant that two parts may be printed separately. On the flip side,
        we made sure that the two halves of the Toober housings were still two
        separate bodies such that they didn't fuse together when printing.
      </p>
      <p>
        If there were appendages on your Toobers, we chopped it up for you and
        added alignment and orientation pins. Modifying your appendages in this
        way often saves tens of hours worth of printing time, and tens (maybe
        even hundreds) of dollars in terms of 3D printing costs!
      </p>
      <p>
        Once the appropriate modifications have been made, the file is then
        imported into other software (in this case Solidworks) which can better
        export and generate the colors for the 3D printers. 3D printing software
        will normally accept a .STL file (which you can export from Fusion), but
        for full-color 3D printing files, this can be a little more complicated.
      </p>
      <h2>One Tray to Go, Please!</h2>
      <p>
        Because of the size constraints we've set, we're able to print multiple
        Toobers at once. We try our best to cram as many parts in there at once
        for efficiency (like a fun game of Tetris). Below shows example trays of
        parts we printed (J35 on the left, J55 on the right).
      </p>
      <GuideImage
        src={['/images/toobers/j35-tray.png', '/images/toobers/j55-tray.png']}
      />
      <h2>The Aftermath</h2>
      <p>
        The J55 prime is what the industry calls a 'polyjet' printer. A polyjet
        printer is like a 2D inkjet printer, but instead of jetting drops of
        ink, the printer jets drops of photopolymer that solidify when exposed
        to UV light. These layers accumulate on the build tray.
      </p>
      <p>
        For parts where there are overhangs, the 3D printer jets a removable
        gel-like support material. Once the part is completed, this support
        material is removed before being given to you. To remove the support
        material, you can remove the big chunks by hand.
      </p>
      <GuideImage src="/images/toobers/toobers-removing.gif" border={false} />
      <h2>Quick Bath</h2>
      <p>
        For the more detailed parts, you can use the waterjet in the PDL. We've
        gone ahead and done all of this for you since there's only one of these
        waterjets in the PDL.
      </p>
      <GuideImage src="/images/toobers/toobers-cleaning.gif" border={false} />
    </div>
  );
};

export default Page;
