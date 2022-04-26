import React from "react";
import "../index.css";
import connor from "../static/influencer_cdawgva.png";
import joey from "../static/influencer_animeman.png";
import garnt from "../static/influencer_gigguk.png";
import sydney from "../static/influencer_sydsnap.png";
import foxen from "../static/influencer_foxenanime.png";

const Influencers = () => {
  return (
    <div className="font-bold flex flex-col items-center pt-10 text-5xl">
      <h2 className="pb-10">
        インフルエンサー <span className="text-4xl">-Influencers-</span>
      </h2>
      <div className="flex flex-col items-center">
        <h2>Japan</h2>
        <ul className="grid grid-cols-4 gap-[7%] text-3xl text-center font-normal pb-10 pt-10">
          <li>
            <a
              href="https://www.youtube.com/c/CDawgVA"
              className="flex flex-col items-center"
            >
              <div className="pb-10">
                <img src={connor} alt="CDawgVA" />
              </div>
              <p>CDawgVA</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/animezone"
              className="flex flex-col items-center"
            >
              <div className="pb-10">
                <img src={garnt} />
              </div>
              <p>Gigguk</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/TheAnimeMan"
              className="flex flex-col items-center"
            >
              <div className="pb-10">
                <img src={joey} />
              </div>
              <p>The Anime Man</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/sydsnap"
              className="flex flex-col items-center"
            >
              <div className="pb-10">
                <img src={sydney} />
              </div>
              <p>Sydney</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCzs3FmQ5qPfBcZj-xSZDKcw"
              className="flex flex-col items-center"
            >
              <div className="pb-10">
                <img src={foxen} />
                <p>Foxen Anime</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Influencers;
