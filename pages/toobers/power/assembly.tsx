import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>Battery & Charger Assembly</h1>
      <h2>Still under construction</h2>
      <p>
        This section will have better written instructions. But here, have some
        photos
      </p>
      <GuideImage
        src="/images/toobers/power-module-peeling.jpg"
        border={false}
      />
      <GuideImage src="/images/toobers/power-module-crisp.jpg" border={false} />

      <GuideImage
        src="/images/toobers/power-module-threaded-inserts.jpg"
        border={false}
      />
      <GuideImage
        src="/images/toobers/power-module-correct-orientation.jpg"
        border={false}
      />
      <GuideImage
        src="/images/toobers/power-module-other-side.jpg"
        border={false}
      />
      <GuideImage
        src="/images/toobers/power-module-charging-circuit.jpg"
        border={false}
      />
      <GuideImage src="/images/toobers/power-module-tape.jpg" border={false} />
      <GuideImage src="/images/toobers/power-module-done.jpg" border={false} />
    </div>
  );
};

export default Page;
