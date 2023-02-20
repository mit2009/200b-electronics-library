import GuideImage from '../../../components/GuideImage';

const Page = () => {
  return (
    <div>
      <h1>Soldering Safety</h1>
      <h2>Smokey!</h2>
      <p>
        The solder we're using is an alloy of tin and lead. Soldering with lead,
        flux and/or rosin can produce dust and fumes that are hazardous if
        ingested in significant quantities. For this lab, because our exposure
        to soldering is for a relatively short amount of time and we're working
        in a well-ventilated space, the risk is very low to none.
      </p>
      <p>
        Whenever we work with anything that has fumes, we want to make sure
        there is proper ventilation. The labs in PDL have snorkel exhaust fume
        hoods above every table. Give it a quick glance to make sure it's on
        (the knob is turned to the position shown below.)
      </p>
      <GuideImage
        src={[
          '/images/toobers/fume-hood-02.png',
          '/images/toobers/fume-hood-01.png',
        ]}
        border={false}
      />
      <p>
        If you're in one of the satellite labs, there may also be soldering fume
        extractors that are placed around to help with air circulation.
      </p>
      <p>
        And finally, make sure to wash your hands after soldering. Give it a
        good long rinse with soap to remove any lead that you may have come in
        contact with, to prevent yourself from accidentally eating it later when
        you're enjoying that delicious Fuji Apple.
      </p>
    </div>
  );
};

export default Page;
