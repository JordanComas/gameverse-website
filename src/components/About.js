import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="main-about">
        <p>
          Gameverse is a self made project built by a one man team in under a
          week. The objective of Gameverse is to help users that are either
          unfamiliar with games or just your average person looking on what to
          play next.
        </p>

        <p>
          With Gameverse it allows you to open up more gaming options for you,
          your friends, and family. If you have a game in mind you are able to
          search by title of said game and see the details like release date,
          genre, publisher, etc.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
