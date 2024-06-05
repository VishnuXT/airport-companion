import React from "react";

import Navbar from "./Navbar";

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>About Airport Companion</h1>
        <p>
          Airport Companion is a mobile app designed to make your airport
          experience smoother and more stress-free. We understand the challenges
          of navigating unfamiliar airports, and our app provides the tools you
          need to find your way with ease.
        </p>

        <h2>Our Team</h2>
        <p>
          Airport Companion is the brainchild of a passionate team of developers
          and travel enthusiasts. We've combined our expertise in technology and
          our love for travel to create an app that simplifies your airport
          journey.
        </p>

        <h3>Motivation</h3>
        <p>
          We've all been there lost in a labyrinthine airport terminal,
          frantically searching for our gate or a decent place to grab a bite.
          Airport Companion was born out of a desire to create a solution that
          empowers travelers to navigate airports with confidence.
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
