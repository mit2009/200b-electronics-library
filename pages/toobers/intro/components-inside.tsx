import Link from 'next/link';
import { useEffect } from 'react';
import GuideImage from '../../../components/GuideImage';

const Page = () => {
  // based on the scroll amount, change the current location of the video to match
  // the scroll amount

  const handleScroll = () => {
    const video = document.getElementById('video') as any;
    const scroll = document.documentElement.scrollTop;
    const videoHeight = video?.offsetHeight ?? 0;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPercent = Math.min((scroll / (scrollHeight - videoHeight)) * 10, 1);
    const videoDuration = (video as any)?.duration ?? 0;
    const videoTime = scrollPercent * videoDuration;
    if (video && !isNaN(videoTime)) {
      video.currentTime = videoTime ?? 0;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Components Inside & Process</h1>
      <h2>Look Under the Hood</h2>
      <p>Before we get started, let's take a look inside a Toober.</p>
      <video id="video" className={'exploded-view'} width="80%" height="auto">
        <source src="/images/toobers/toobers-explode-video.webm" type="video/webm" />
        {/* <source src="/images/toobers/toobers-explode-video.mp4" type="video/mp4" /> */}
      </video>
      <p>
        The Toobers toy is made up of several components and sub-units (we'll call them modules.) It might look like a
        lot, but don't fret. We'll explain each part and we <strong>won't</strong> be building each one from scratch
        (which is often the case with product design as well - we try to <strong>source</strong> the correct parts so we
        don't end up reinventing the wheel.)
      </p>
      <GuideImage src={'/images/toobers/exploded-diagram.jpg'} alt={'Exploded View'} size={'LARGE'} />
      <h3>Top & Bottom Housing</h3>
      <p>
        Your Toober housing, also known as the Toober enclosure, is where everything will be contained. The two pieces
        are secured togther via 2 housing screws, and also have <strong>unique alignment features</strong> along the rim
        such that they only come together in one orientation.{' '}
      </p>
      <p>
        You'll notice that the interior of the housing also has designated features where other components such as the
        speaker and printed circuit board (PCB) will sit. These features are <strong>hardpoints</strong> in the design-
        meaning that these are constraints in your final Toober design that you should not change.
      </p>
      <p>
        The top and bottom housing will be printed on a very special 3D printer (
        <Link href="https://www.stratasys.com/en/3d-printers/printer-catalog/polyjet/j55-prime/">the J55 Prime</Link>)
        which can print in <strong>full color</strong>! These printers <strong>do not use filament</strong> and instead
        use a special (insanely expensive) resin.
      </p>
      <GuideImage
        src={'/images/toobers/rotating-j55.gif'}
        alt={'3D Printer'}
        size={'MEDIUM'}
        caption={'These are the Toobers printing in real-time! Look at them go!'}
      />
      <h3>PCB</h3>
      <p>
        The PCB houses a couple of components and is connected to the buttons, the speaker, and the on/off switch. On
        this PCB sits our microcontroller, the chip which can be thought of as the 'brains' of the toy.
      </p>
      <p>
        In the next lab, you'll be loading code onto the microcontroller: an <strong>Arduino Nano</strong>. This
        microcontroller will be responsible for all the logic of the toy, which includes what to do when buttons are
        pressed, when to play certain sounds, what color to light up the LEDs, etc.
      </p>
      <h3>Sugar Cubes!</h3>
      <p>
        There are 4, nice squishy silicone buttons on your Toobers which are the 4 buttons with which the toy user will
        interact. Inside each button is an individually addressable RGB (red, green, blue all in one) LED. Both the
        button contact and the LED run to our microcontroller.
      </p>
      <h3>Battery & Charging Unit</h3>
      <p>
        The <strong>Lithium Ion Polymer Battery</strong> (3.7v at 1200mAh) will power your Toober, sending power to the
        microcontroller, the speaker, and the lights. This rechargeable battery is hooked up to a charging circuit which
        you can recharge with an USB-C cable. Rechargeable batteries can often be much more environmentally-friendly
        alternative to the standard AA alkaline batteries.
      </p>
      <h3>Speaker</h3>
      <p>
        The speaker will playback prerecorded sounds stored on a microSD card. The sound file to be played is triggered
        by our friend the Arduino Nano. You're also free to customize these sounds and add your own!
      </p>
    </div>
  );
};

export default Page;
