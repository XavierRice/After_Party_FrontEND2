import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <h2>
          <strong>About this project...</strong>
        </h2>
        <div className="d-flex bd-highlight">
          After Party helps you keep the party going and connects users with
          local bars and restaurants by displaying the closest spot from their
          address or current location. Using Google Maps API, we establish the
          location of the user and begin displaying the merchants by distance.
          Users will have the option of swiping left if they feel they're not a
          match, and continue to check out their options until they find what
          they're looking for. When they've found one they like, one press of a
          button provides them with directions to begin their journey.
        </div>
        <br />
        <br />
        <h3>
          <strong>About the developers...</strong>
        </h3>
        <ul>
          <li className="developers-container">
            <h5>
              <a href="https://github.com/marciafoster" rel="noreferrer">
                Marcia Foster
              </a>
            </h5>
            <p>
              Full-Stack Web Developer with a passion of baking and creating
              things from scratch.
              <a
                href="https://www.linkedin.com/in/marciafoster93/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="developers-container">
            <h5>
              <a href="https://github.com/Nat485" rel="noreferrer">
                Natalie Vargas
              </a>
            </h5>
            <p>
              Aspiring Full Stack Developer passionate about Web Development.
              <a
                href="https://www.linkedin.com/in/natalie-vargas-nyc/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="developers-container">
            <h5>
              <a href="https://github.com/rboyce212" rel="noreferrer">
                Rich Boyce
              </a>
            </h5>
            <p>
              After 16 years working for two tech start-ups, I spent a year at
              Pursuit to become a Full-Stack Web Developer.
              <a
                href="https://www.linkedin.com/in/richard-boyce-nyc/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="developers-container">
            <h5>
              <a href="https://github.com/Lombarudi24" rel="noreferrer">
                Rubens Lombard
              </a>
            </h5>
            <p>
              Full-Stack Web developer with interest in app development and
              cybersecurity. I am a fellow at Pursuit pursuing a dream to
              transform thoughts into reality.
              <a
                href="https://www.linkedin.com/in/rubens-lombard/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="developers-container">
            <h5>
              <a href="https://github.com/tsunami-dev" rel="noreferrer">
                Tyller Mendoza
              </a>
            </h5>
            <p>
              I am a self-taught developer with a year of entry-level experience
              in the field of full-stack development as well as data analysis I
              am very motivated in building out and maintaining programs with
              the knowledge that I have now and what i don't know i will learn
              with the a level of urgency and passion needed to get the job done
              well.
              <a
                href="https://www.linkedin.com/in/tyller-mendoza-61107120b/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="developers-container">
            <h5>
              <a href="https://github.com/XavierRice" rel="noreferrer">
                Xavier Rice
              </a>
            </h5>
            <p>
              An aspiring software engineer and experienced storyteller and
              professional creative with a background in storytelling and
              community engagement.
              <a
                href="https://www.linkedin.com/in/xavier0rice/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;