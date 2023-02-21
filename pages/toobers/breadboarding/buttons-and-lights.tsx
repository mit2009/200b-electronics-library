import GuideImage from '../../../components/GuideImage';
import { GuideLink } from '../../../components/GuideLink';
import { PIN, Ws2812bLed } from '../../../components/Ws2812bLed';

const Page = () => {
  return (
    <div>
      <h1>Four Buttons & Lights</h1>
      <h2>Multiply by Four</h2>
      <p>
        It's time to kick it up a notch! We'll be hooking up all four of the
        LEDs and buttons now. Because we're using the WS2812b LEDs, we can wire
        these up in series, with the data out <span className="pin">Dout</span>{' '}
        of one LED going into the data in <span className="pin">Di</span> of the
        next LED.
      </p>
      <p>The final inputs/outputs on the Arduino should be as follows</p>
      <p>
        <span className="pin">PIN 8</span> Red Button
        <br />
        <span className="pin">PIN 7</span> Green Button
        <br />
        <span className="pin">PIN 6</span> Blue Button
        <br />
        <span className="pin">PIN 5</span> Yellow Button
        <br />
        <span className="pin">PIN 4</span> WS2812b LEDs
      </p>
      <p>
        If you think you understand how you built the red LED and button, see if
        you can duplicate this setup 3 times. If you don't feel comfortable yet,
        don't worry - keep reading for a handy guide!
      </p>
      <p>Your result should look something like this:</p>
      <GuideImage
        src="/images/toobers/four-new-friends-perspective.jpg"
        alt="Four LEDs"
        size={'SMALL'}
      />
      <p>
        In this photo, we used different colored wires, just to make it easier
        to identify. You can ask around for different colors of wire (we always
        have plenty extra). You can also use the jumper wires we provided you to
        save yourself some time when it comes to stripping wires.
      </p>
      <GuideImage
        src="/images/toobers/jumpers.png"
        border={false}
        caption="And yes! you can peel them apart to separate them."
        alt="Jumper wires"
      />
      <p>
        Remember to <strong>KEEP IT NEAT!</strong> notice that in our example,
        we press down as many of the wires as possible to the board so they're
        easy to follow. When building your final toy, you also want to keep
        wires as clean as possible. Messy wires are super hard to debug and
        figure out if something is wrong - and instructors have a much harder
        time helping you!
      </p>
      <GuideImage
        size="SMALL"
        border={false}
        src="/images/toobers/lots-of-wires.jpg"
        alt="An image showing a lot of wires"
        caption="This is an actual project from a while back we've encountered. Try to keep your wires neater than this!"
      />
      <p>
        If you'd like, you're free to follow the pin markings below to build
        your circuit so it's identical to ours.
      </p>

      <GuideImage
        src="/images/toobers/four-new-friends-top-down.jpg"
        alt="Four LEDs"
        border={true}
        size={'LARGE'}
      />
      <h4>Green</h4>
      <p>Let's run it back (everything is shifted 6 from red)</p>
      <ul>
        <li>
          Grab another LED. Place the shorter <Ws2812bLed pin={PIN.Din} /> into{' '}
          <span className="pin">F26</span>
        </li>
        <li>
          The other pins <Ws2812bLed pin={PIN.Vin} />,{' '}
          <Ws2812bLed pin={PIN.Gnd} />, and <Ws2812bLed pin={PIN.Dout} /> should
          fall into <span className="pin">F27</span>,{' '}
          <span className="pin">F28</span>, and <span className="pin">F29</span>{' '}
          respectively
        </li>
        <li>
          Connect <span className="pin">G26</span> (
          <Ws2812bLed pin={PIN.Din} />) to <span className="pin">G23</span> (the
          first <Ws2812bLed pin={PIN.Dout} />)
        </li>
        <li>
          Connect <span className="pin">G27</span> (<Ws2812bLed pin={PIN.Vin} />
          ) to the <span className="pin red">3.7V</span> rail
        </li>
        <li>
          Connect <span className="pin">I28</span> (<Ws2812bLed pin={PIN.Gnd} />
          ) to the <span className="pin black">GND</span> rail
        </li>
        <li>
          Grab another button and place it so that the pins fall into{' '}
          <span className="pin">C26</span> and <span className="pin">C28</span>
        </li>
        <li>
          Connect <span className="pin">A26</span> to the{' '}
          <span className="pin black">GND</span> rail
        </li>
        <li>
          Connect <span className="pin">E28</span> to{' '}
          <span className="pin">J6</span> (Arduino Nano's{' '}
          <span className="pin">D7</span>)
        </li>
      </ul>
      <h4>Blue</h4>
      <p>Third time's the charm (everything is shifted 6 from green)</p>
      <ul>
        <li>
          Grab a third LED. Place the shorter <Ws2812bLed pin={PIN.Din} /> into{' '}
          <span className="pin">F32</span>
        </li>
        <li>
          The other pins <Ws2812bLed pin={PIN.Vin} />,{' '}
          <Ws2812bLed pin={PIN.Gnd} />, and <Ws2812bLed pin={PIN.Dout} /> should
          fall into <span className="pin">F33</span>,{' '}
          <span className="pin">F34</span>, and <span className="pin">F35</span>{' '}
          respectively
        </li>
        <li>
          Connect <span className="pin">G32</span> (
          <Ws2812bLed pin={PIN.Din} />) to <span className="pin">G29</span> (the
          second <Ws2812bLed pin={PIN.Dout} />)
        </li>
        <li>
          Connect <span className="pin">G33</span> (<Ws2812bLed pin={PIN.Vin} />
          ) to the <span className="pin red">3.7V</span> rail
        </li>
        <li>
          Connect <span className="pin">I34</span> (<Ws2812bLed pin={PIN.Gnd} />
          ) to the <span className="pin black">GND</span> rail
        </li>
        <li>
          Grab another button and place it so that the pins fall into{' '}
          <span className="pin">C32</span> and <span className="pin">C34</span>
        </li>
        <li>
          Connect <span className="pin">A32</span> to the{' '}
          <span className="pin black">GND</span> rail
        </li>
        <li>
          Connect <span className="pin">E34</span> to{' '}
          <span className="pin">J7</span> (Arduino Nano's{' '}
          <span className="pin">D6</span>)
        </li>
      </ul>
      <h4>Yellow</h4>
      <p>One last time for good measure (everything is shifted 6 from blue)</p>
      <ul>
        <li>
          Grab a fourth LED. Place the shorter <Ws2812bLed pin={PIN.Din} /> into{' '}
          <span className="pin">F38</span>
        </li>
        <li>
          The other pins <Ws2812bLed pin={PIN.Vin} />,{' '}
          <Ws2812bLed pin={PIN.Gnd} />, and <Ws2812bLed pin={PIN.Dout} /> should
          fall into <span className="pin">F39</span>,{' '}
          <span className="pin">F40</span>, and <span className="pin">F41</span>{' '}
          respectively
        </li>
        <li>
          Connect <span className="pin">G38</span> (
          <Ws2812bLed pin={PIN.Din} />) to <span className="pin">G35</span> (the
          third <Ws2812bLed pin={PIN.Dout} />)
        </li>
        <li>
          Connect <span className="pin">G39</span> (<Ws2812bLed pin={PIN.Vin} />
          ) to the <span className="pin red">3.7V</span> rail
        </li>
        <li>
          Connect <span className="pin">I40</span> (<Ws2812bLed pin={PIN.Gnd} />
          ) to the <span className="pin black">GND</span> rail
        </li>
        <li>
          Grab another button and place it so that the pins fall into{' '}
          <span className="pin">C38</span> and <span className="pin">C40</span>
        </li>
        <li>
          Connect <span className="pin">A38</span> to the{' '}
          <span className="pin black">GND</span> rail
        </li>
        <li>
          Connect <span className="pin">E40</span> to{' '}
          <span className="pin">J8</span> (Arduino Nano's{' '}
          <span className="pin">D5</span>)
        </li>
      </ul>
      <GuideImage
        src={'/images/toobers/four-new-friends-perspective.jpg'}
        size={'LARGE'}
        alt="Four LEDs"
      />
      <GuideImage
        src={'/images/toobers/four-new-friends-weird.jpg'}
        size={'LARGE'}
        alt="Four LEDs"
      />
      <h2>Software for our Four New Friends</h2>
      <p>
        It's always good to test your wiring in stages. Once you have a lot of
        wires, it can be difficult to find what's wrong if there's a lot going
        on. Once again, for this, we've prepared some code for you to see if
        you've got all the LEDs and buttons wired up correctly.
      </p>
      <div className="center">
        <GuideLink
          target="_blank"
          href="https://github.com/mit2009/200b-toobers/blob/main/2023/arduino/FourNewFriends.zip?raw=true"
        >
          <span className={'download-btn'}>
            Get the <strong>Four New Friends code</strong>
          </span>
        </GuideLink>
      </div>
      <p>
        The correct behavior is: once you click on each button, the
        corresponding LED should blink twice! If it works, you're good to go!
      </p>
    </div>
  );
};

export default Page;
