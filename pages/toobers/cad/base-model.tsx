import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';

const Page = () => {
  return (
    <div>
      <h1>Getting the Base Model</h1>
      <h2>Join the 2.00b Fusion 360 Team</h2>
      <p>
        In order for 2.00b staff to be able to help you with your Fusion 360
        files, we would like everyone to do their 2.00b CAD work in the 2.00b
        Team Fusion 360 space.
      </p>
      <p>
        You will be sent an email with an invitation to join the 2.00b Fusion
        360 Team on Friday evening, Feb 24.
      </p>
      <GuideImage src="/images/toobers/cad2_join_team.png" />
      <p>
        If you need a resend because you can't find the email, the link has
        expired, or your Fusion 360 account is under a different email address,
        please post on the{' '}
        <GuideLink
          href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
          target="_blank"
        >
          #ask-the-tas
        </GuideLink>{' '}
        Slack channel or email{' '}
        <GuideLink href="mailto:200b-sysadmin@mit.edu" target="_blank">
          200b-sysadmin
        </GuideLink>{' '}
        for help.
      </p>
      <p>
        Click on the "Join Team" button and log into Fusion 360 on the web to
        join our team! This will bring you to the 2.00b Team storage area in
        Fusion 360 Teams on your web browser.
      </p>
      <GuideImage src="/images/toobers/cad2_200b_space.png" />
      <p>
        If you see something similar to the picture above, you have successfully
        joined the team!
      </p>
      <h2>Access the 2.00b Spring 2023 Project</h2>
      <p>
        Start up the desktop Fusion 360 client (you may close the web browser).
        It will default to the last project you were working in (probably your
        Flora project!).
      </p>
      <p>
        To see the 2.00b project, you need to change to the 2.00b Team space.
      </p>
      <p>
        Take a look at the top left corner of Fusion 360 to see the name of the
        space you are working in. When you click on the dropdown, it will show
        you the list of spaces you have access to. Your current space will have
        a checkmark to the left. Click on "2.00b Team" to switch to the 2.00b
        Team space.{' '}
        <strong className="color">
          Remember to do your personal projects in your own space, though!
        </strong>
      </p>
      <GuideImage src="/images/toobers/cad2_storage_options.png" />
      <h2>Create your own folder in the 2.00b Team space</h2>
      <p>
        Within the 2.00b Team space, there is one project, 2.00b Spring 2023.{' '}
        <strong>Double-click on it to enter it.</strong>
      </p>
      <GuideImage src="/images/toobers/cad2_projects.png" />
      <p>
        Within the project are two folders of interest. The{' '}
        <strong>Toobers</strong> folder contains a copy of the base model and
        will contain your submissions. The <strong>Teams</strong> folder is
        where you will do your work. Go into the Teams folder (double-click on
        it) and find your team name, then go into that folder and create a
        folder with your name.
      </p>
      <GuideImage src="/images/toobers/cad2_new_folder.png" />
      <p>
        You will be able to see the folder structure and files in the entire
        project, but you will only be able to edit files in your team-specific
        folder.
      </p>
      <h2>Import the base model into your folder</h2>
      <p>
        To help you get started, we're providing a base model that you can
        import and add on to. This <code>.f3z</code> contains not only the base
        top and bottom housings that you'll be modifying, but also the
        components such as the sugar cubes, pcbs, speaker, such that you can
        reference them while you CAD.
      </p>
      <div className="center">
        <GuideLink target="_blank" href="/assets/TOOBER_BASE_v1.f3z">
          <span className={'download-btn'}>
            Download the <strong>Toobers Base Model</strong>
          </span>
        </GuideLink>
      </div>
      <p>
        In Fusion 360, go into your folder that you just created, then click the{' '}
        <strong>Upload button</strong>.
      </p>
      <GuideImage src="/images/toobers/cad2_upload1.png" />
      <div className="center"></div>
      <p>
        Then Select or Drag and Drop the downloaded base model file into the
        upload dialog and click Upload again.
      </p>
      <GuideImage src="/images/toobers/cad2_upload2.png" />
      <p>
        The base model will be imported into your folder! You should see the
        components shown below. Double-click on the <strong>Toober Base</strong>{' '}
        to open it up in Fusion 360.
      </p>
      <GuideImage src="/images/toobers/cad2_file_browser.png" />
      <p>
        Note:{' '}
        <strong className="color">
          You must upload the base model using the desktop client!
        </strong>{' '}
        If you "Upload" via the web browser, it merely uploads the file (like
        Dropbox or Google Drive) and does not import it into Fusion 360, so you
        will not see the individual components listed as shown above. (highlight
        this common error somehow)
      </p>
    </div>
  );
};

export default Page;
