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
    const scrollPercent = (scroll / (scrollHeight - videoHeight)) * 5;
    const videoDuration = (video as any)?.duration ?? 0;
    const videoTime = scrollPercent * videoDuration;
    video.currentTime = videoTime;
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
        <source src="/images/toobers/toobers-explode-video.mp4" type="video/mp4" />
      </video>
      <p>
        The Toobers toy is made up of several components and sub-units (we'll call them submodules.) It might look like
        a lot, but don't fret. We won't be building each one from scratch (which is often the case with product design
        as well - we try to <strong>source</strong> the correct parts so we don't end up reinventing the wheel.)
      </p>
      <GuideImage src={'/images/toobers/exploded-diagram.jpg'} alt={'Exploded View'} size={'LARGE'} />
    </div>
  );
};

export default Page;
