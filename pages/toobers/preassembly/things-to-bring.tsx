import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Pre-lab Prep</h1>
      <h2>Exciting times Ahead!</h2>
      <p>
        In Lab 6, in addition to working on sketch models, you'll receive your
        3D printed Toober housing, finish assembling your Toober toy, and take a
        photo with it (and of course, play with it too!)
      </p>
      <WhatsDue
        checklistTitle={
          <>
            <h1>For Lab 6, please make sure you:</h1>
          </>
        }
        checklist={{
          '17.1': (
            <>
              Complete the <strong>breadboarding</strong> of your Toober Toy,
              have verified all the components work and that you're able to play
              the Toober Simon game successfully (if you need help, feel free to
              ask on{' '}
              <GuideLink
                href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
                target="_blank"
              >
                #ask-the-tas
              </GuideLink>{' '}
              channel)
            </>
          ),
          '17.2': (
            <>
              Have charged the battery using a USB-C cable for more than{' '}
              <strong>8 hours</strong>, or until the green charging light turns
              on.
            </>
          ),
          '17.3': (
            <>
              Bring your <strong>laptop</strong> to lab
            </>
          ),
          '17.4': (
            <>
              Bring your <strong>USB-B</strong> cable to lab (this is the one
              that allows you to upload a sketch onto the Arduino Nano from your
              computer)
            </>
          ),
          '17.6': (
            <>
              Bring your <strong>breadboard</strong> to lab
            </>
          ),
          '17.9': (
            <>
              Bring your <strong>tiny Phillips-head screwdriver</strong> to lab
            </>
          ),
        }}
      />
    </div>
  );
};

export default Page;
