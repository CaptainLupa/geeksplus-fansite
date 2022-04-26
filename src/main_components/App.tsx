import React from "react";
import "../index.css";
import LogoArrow from "../minor_components/LogoArrow";
import AboutDiv from "../minor_components/AboutDiv";
import Influencers from "../minor_components/Influencers";

class App extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center bg-white h-auto">
        <LogoArrow />
        <AboutDiv />
        <Influencers />
      </div>
    );
  }
}

export default App;
