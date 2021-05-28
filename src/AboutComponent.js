import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="fiftyPercent">Box one</div>

        <div className="fiftyPercent">
          <h2>Software Engineer</h2>
          <p>
            Megan has six years of experience in Software development workign
            with early stage startups, enterprise, and non profit organizations.
            She has a Bachelor of Arts in Computing from DePaul University.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
