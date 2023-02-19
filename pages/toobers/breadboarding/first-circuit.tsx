const Page = () => {
  return (
    <div>
      <h1>The First Circuit</h1>
      <h2>Just one LED & Button</h2>
      <p>
        For our first circuit, we want to test a couple of basic components that are critical to the success of our toy.
        Doing a test like this is also called a sketch model (you'll learn more about this throughout the semester). For
        this first exercise, we're going to see if we can have the Arduino read one input (through the press of a
        button) and then output it (by turning an LED on for a set amount of time). Once we're reasonably comfortable
        with doing this, we'll be more confident when expanding it to 4 buttons and 4 lights, and eventually
        constructing our Toobers prototype.
      </p>
      <p>The circuit diagram we'll be following is shown below.</p>
    </div>
  );
};

export default Page;
