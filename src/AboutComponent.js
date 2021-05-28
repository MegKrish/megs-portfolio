import React from "react";
import AboutSummary from "./Summary";

class About extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="fiftyPercent">
          <img
            src="/images/profile.jpg"
            alt="profileImage"
            className="border-radius-50"
            width="250"
            height="250"
          />
        </div>

        <div className="fiftyPercent">
          <AboutSummary />
        </div>
      </div>
    );
  }
}

export default About;
