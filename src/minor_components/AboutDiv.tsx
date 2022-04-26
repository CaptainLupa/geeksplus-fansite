import React from "react";
import "../index.css";
import inf from "../static/influencer.png";

const AboutDiv = () => {
  return (
    <div className="bg-about bg-cover bg-center flex flex-col items-center w-screen">
      <div className="flex flex-row items-center pt-[90px] pb-[90px]">
        <img src={inf} alt="Small megaphone" className="pr-10 h-[192px]" />
        <div className="flex flex-col items-start text-left text-white text-3xl font-bold">
          <h2 className="mb-8">
            GeeXPlus is a geeky Tokyo-based influencer agency representing
            global talent.
          </h2>
          <h2>
            GeeX+は英語圏インフルエンサーによるプロモーションの企画から制作、配信までをご提供します。
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutDiv;
