import Image from 'next/image';
import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { WhatsDue } from '../../../components/WhatsDue';

const Page = () => {
  return (
    <div>
      <h1>Exploring the Interface</h1>
      <h2>Look around you!</h2>
      <p>
        Now that you have the base model imported into your folder, let's take a
        moment to look around.
      </p>
      <p>
        Double-click on the assembly model and it will show up in the right
        side. The main parts of the application window are labelled below.
      </p>
      <GuideImage
        src="/images/toobers/cad3_interface1.png"
        alt="Fusion 360 CAD interface"
        size="FULL"
        border={false}
      />
      <ul>
        <li>
          The Application Bar is home to a handful of important buttons, namely
          save, undo and redo, the <code>file</code> menu, and the Data Panel
          toggle (
          <Image
            src="/images/toobers/cad3_data_panel_icon.png"
            width={20}
            height={20}
            alt="Icon of nine rounded squares arranged in a 3 by 3 grid"
          />
          ). Pressing the toggle will hide or show the data panel, which is
          useful because it can free up some valuable screen real estate.
        </li>
        <li>
          The Toolbar is where a lot of the functionality of Fusion 360 lives!
          Like a tool chest, the toolbar contains different instruments for
          cutting into, molding, or deforming your models. It also changes
          depending on which mode you are in.
        </li>
        <li>The ViewCube lets you move around your model in 3D.</li>
        <li>The Data Panel lets you see the projects you have access to.</li>
        <li>
          The Timeline (a.k.a. Design History) shows a graphic for each action
          you've taken. Be aware that not every action begets an icon in the
          timeline! Things like adding color/material to a part won't be
          represented. The timeline is useful because it lets you roll back and
          fast forward through the steps you've taken during the CADing process
          by dragging the little vertical line around.
        </li>
      </ul>
      <p>
        TIP: If you've used other CAD programs before, you may be used to
        different hotkey arrangements, and can modify Fusion's settings to
        accommodate what you're most comfortable with. More details{' '}
        <GuideLink
          href="https://www.autodesk.com/products/fusion-360/blog/quick-tip-custom-keyboard-shortcuts/"
          target="_blank"
        >
          here
        </GuideLink>
        .
      </p>
      <p>
        The{' '}
        <GuideLink
          href="https://help.autodesk.com/view/fusion360/ENU"
          target="_blank"
        >
          Product Documentation
        </GuideLink>{' '}
        has a lot more details about all aspects of Fusion 360 and is a handy
        reference. It can also be accessed from the question mark in the
        Application Bar.
      </p>
      <GuideImage
        src="/images/toobers/cad3_documentation.png"
        alt="How to access Fusion 360 documentation"
        size="FULL"
        border={false}
      />
      <h2>Moving around</h2>
      <p>
        Hide the data panel by clicking on the Data Panel toggle (
        <Image
          src="/images/toobers/cad3_data_panel_icon.png"
          width={20}
          height={20}
          alt="Icon of nine rounded squares arranged in a 3 by 3 grid"
        />
        ). Then click on the View Cube and move it around to see the assembly
        from different angles. Click on faces in the View Cube to see orthogonal
        views. You can show/hide elements by clicking on the visibility toggle
        by each element. To put the model back in it's initial view, click on
        the home view icon. Go ahead, try it out!
      </p>
      <GuideImage
        src="/images/toobers/cad3_interface2.png"
        alt=""
        size="FULL"
        border={false}
      />
      <p>Additional elements shown in this screenshot are:</p>
      <ul>
        <li>
          the Browser, which lists the objects in your assembly and lets you
          control visibility of the objects
        </li>
        <li>
          the Navigation Bar, which contains commands to zoom, pan, and orbit
          your design.
        </li>
      </ul>
      <h2>Setting Units</h2>
      <p>
        Expand the Document Settings in the Browser to see the current Units. To
        change the units (default is mm initially), hover the mouse over the
        Units element until the <code>Change Active Units</code> icon appears,
        and then click on it.
      </p>
      <GuideImage
        src="/images/toobers/cad3_units1.png"
        alt="How to Change Active Units in Fusion 360"
        size="MEDIUM"
        border={false}
      />
      <p>
        A dialog will appear on the right, and you can select the unit you want
        to work in.
      </p>
      <GuideImage
        src="/images/toobers/cad3_units2.png"
        alt="Confirming your active unit change in Fusion 360"
        size="MEDIUM"
        border={false}
      />
      <h2>General Fusion 360 Workflow</h2>
      <p>
        Before we start, it's helpful to understand the general Fusion 360
        workflow. We will be using solid modeling techniques, so be sure that
        <code>SOLID</code> is selected in the toolbar as shown below:
      </p>
      <GuideImage
        src="/images/toobers/cad3_solid_modeling.png"
        alt="Different toolbars available in Fusion 360 with SOLID selected"
        size="LARGE"
        border={false}
      />
      <p>
        To create new features, one usually proceeds as follows (try to find the
        elements mentioned below in your Fusion 360 client):
      </p>
      <ol>
        <li>
          Activate the body you want to work on by clicking on it. The activated
          icon (
          <Image
            src="/images/toobers/cad3_activated_icon.png"
            width={20}
            height={20}
            alt="Icon of a circle with a dark dot in the center"
          />
          ) indicates which part of the model is the active part. Fusion 360
          actions are applied to the currently activated part/body. For
          assemblies that include multiple bodies, it's important to always
          check that the correct body is activated!
          <GuideImage
            src="/images/toobers/cad3_activated_component.png"
            alt="Visible body with the activiated icon next to it"
            size="MEDIUM"
            border={false}
          />
        </li>
        <li>
          Create a 2D profile of a shape we want to base our 3D body on. To do
          this, we create a sketch. To enter Fusion 360's Sketch mode, click on
          <code>Create Sketch</code> (
          <Image
            src="/images/toobers/cad3_create_sketch.png"
            width={20}
            height={20}
            alt="Icon of square with a lower right quadrant of a circle inside and a green plus on the lower right"
          />
          ). Then you select a plane to sketch on. Once the plane is selected,
          the <strong>Sketch toolbar</strong> appears.
          <GuideImage
            src="/images/toobers/cad3_sketch_toolbar.png"
            alt=""
            size="FULL"
            border={false}
          />
          Use the tools in the <strong>Sketch toolbar</strong> to sketch the 2D
          profile on the selected plane. Click on <code>Finish Sketch</code>
          (
          <Image
            src="/images/toobers/cad3_finish_sketch.png"
            width={54}
            height={30}
            alt="Icon of a green circle containing a white checkmark"
          />
          ) to exit Sketch mode.
        </li>
        <li>
          Create a 3D solid body from the 2D profile using the tools in the
          <code>CREATE</code> panel. The most commonly used tools used are in
          the toolbar and additional tools are accessed through the{' '}
          <code>CREATE</code> dropdown panel.
          <GuideImage
            src={[
              '/images/toobers/cad3_create_options1.png',
              '/images/toobers/cad3_create_options2.png',
            ]}
            alt="Options for creating bodies in Fusion 360"
          />
        </li>
        <li>
          Once you have a basic 3D shape, you can customize it further using the
          modification tools available in the <code>MODIFY</code> panel. The
          most commonly used tools are in the toolbar and more tools are in the
          dropdown.
          <GuideImage
            src="/images/toobers/cad3_modify_tools.png"
            alt="Tools for modifying bodies in Fusion 360"
            border={false}
            size={'SMALL'}
          />
        </li>
      </ol>
      <h2>​​Additional Fusion Tools</h2>
      <p>
        While we covered some of the basic tools in this tutorial, there are
        many others that you may find useful. The following is a list of some
        useful Fusion commands and some links to relevant tutorials.
      </p>
      <ul>
        <li>
          <strong>Revolve Tool</strong>: create bodies with a central axis of
          symmetry (
          <GuideLink
            href="https://www.youtube.com/watch?v=sHfHcUknEJk"
            target="_blank"
          >
            video
          </GuideLink>
          )
        </li>
        <li>
          <strong>Sweep Tool</strong>: create bodies by extruding a shape along
          a curved path (
          <GuideLink
            href="https://www.youtube.com/watch?v=QimeZSqS_sc"
            target="_blank"
          >
            video
          </GuideLink>
          )
        </li>
        <li>
          <strong>Patterns</strong>: Want to create a bunch of identical
          features but are lazy? Use pattern tools to do the heavy lifting for
          you! (
          <GuideLink
            href="https://www.youtube.com/watch?v=JaXVzWkVL_c"
            target="_blank"
          >
            video
          </GuideLink>
          )
        </li>
        <li>
          <strong>Text Tool</strong>: Add text (
          <GuideLink
            href="https://www.youtube.com/watch?v=BkpAtMAHtyQ"
            target="_blank"
          >
            video
          </GuideLink>
          )
        </li>
      </ul>
      <WhatsDue chapter={'/cad-review'} />
    </div>
  );
};

export default Page;
