import React from "react";
import "../index.css";

import fard from "../static/Geex+logo.jpg";
import doubleArrow from "../static/arrow_double.svg";

const LogoArrow = () => {
  return (
    <div className="flex flex-col items-center pb-20">
      <img src={fard} alt="Geex+ Logo" />
      <span className="h-auto pb-16 text-5xl font-bold text-center">
        "Connecting Japanese Brands with Global Influencers"
      </span>
      <img
        src={doubleArrow}
        alt="Double Arrow pointing own"
        className=" h-[90px]"
      />
    </div>
  );
};

export default LogoArrow;
