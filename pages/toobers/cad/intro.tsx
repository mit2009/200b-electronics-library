import Image from 'next/image';

const Intro = () => {
  return (
    <div>
      <h1>Installing Fusion 360</h1>
      <h2>Time for CAD</h2>
      <p>
        It's time to start CADding your Fusion 360 Toober Model! If you've made
        your Flora model, you probably already have Fusion 360, so feel free to
        skip to <a href="/toobers/cad/3dprinting">3D Printing</a>! Otherwise,
        this is a guide that will help you get Fusion 360 installed.
      </p>
      <a
        target="_blank"
        href="https://www.autodesk.com/education/edu-software/overview?sorting=featured&filters=individual"
        rel="noreferrer"
      >
        <div className="link-image fusion-image">
          <Image
            src="/images/toobers/fusion-logo.png"
            alt="Fusion 360 Logo"
            height={85}
            width={400}
          />
        </div>
      </a>
      <h2>Installation</h2>
      <p>
        All MIT students can{' '}
        <a
          href="https://www.autodesk.com/education/edu-software/overview?sorting=featured&filters=individual"
          target="_blank"
          rel="noreferrer"
        >
          download a free student version
        </a>{' '}
        of Fusion 360. If you previously had a student license that has since
        expired, you can also{' '}
        <a
          href="https://knowledge.autodesk.com/customer-service/account-management/education-program/renew-education-licenses"
          target="_blank"
          rel="noreferrer"
        >
          update it
        </a>
        . You will need to register with your school email address and upload
        proof of student status to qualify for the license. If you have any
        difficulty, please email{' '}
        <a href="mailto:200b-sysadmin@mit.edu">200b-sysadmin@mit.edu</a> or post
        in the <strong>#ask-the-TA</strong> channel on Slack for help.
      </p>
      <p className={'important'}>
        Submitting your MIT ID <strong>will not work</strong> for proof of
        student status since there is no date on the ID. We recommend sending a
        screenshot of your current class schedule from WebSIS. Be sure it has
        your name and a date this spring on it!
      </p>
      <h2>Learning Resources</h2>
      <p>
        If you want to get your feet wet right away, below are some suggested
        resources.
      </p>
      <ul>
        <li>
          <a
            href="https://knowledge.autodesk.com/customer-service/account-management/education-program/renew-education-licenses"
            target="_blank"
            rel="noreferrer"
          >
            2.00b Fusion 360 Tutorials
          </a>{' '}
          on CAD modeling, rendering and animation.
        </li>
        <li>
          If you are coming to Fusion from Solidworks, it is very easy to get up
          to speed with the new software.{' '}
          <a
            href="https://knowledge.autodesk.com/customer-service/account-management/education-program/renew-education-licenses"
            target="_blank"
            rel="noreferrer"
          >
            This Youtube channel contains a great list of resources for making
            the transition!
          </a>
        </li>
        <li>
          If you're a beginner in CAD, no worries!{' '}
          <a
            href="https://knowledge.autodesk.com/customer-service/account-management/education-program/renew-education-licenses"
            target="_blank"
            rel="noreferrer"
          >
            The Autodesk website
          </a>{' '}
          and Youtube both have a wealth of tutorials for any skill level.
        </li>
      </ul>
    </div>
  );
};

export default Intro;
