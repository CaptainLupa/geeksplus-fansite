import React from "react";
import "../index.css";
import connor from "../static/influencer_cdawgva.png";
import joey from "../static/influencer_animeman.png";
import garnt from "../static/influencer_gigguk.png";
import sydney from "../static/influencer_sydsnap.png";
import foxen from "../static/influencer_foxenanime.png";
import trashTaste from "../static/influencer_trashtaste.png";
import basement from "../static/influencer_mothers.png";

interface InfluencerGridInfo {
  link: string;
  image: any;
  name: string;
}

const InfluencerListItem = (props: InfluencerGridInfo) => {
  return (
    <li>
      <a href={props.link} className="flex flex-col items-center">
        <div className="pb-10">
          <img src={props.image} alt={props.name} />
        </div>
        <p className="whitespace-nowrap">{props.name}</p>
      </a>
    </li>
  );
};

const InfluencersJapan = () => {
  return (
    <ul className="grid grid-cols-4 gap-[7%] text-center font-normal pb-10 pt-10">
      <InfluencerListItem
        link="https://www.youtube.com/c/CDawgVA"
        image={connor}
        name="CDawgVA"
      />
      <InfluencerListItem
        link="https://www.youtube.com/c/animezone"
        image={garnt}
        name="Gigguk"
      />
      <InfluencerListItem
        link="https://www.youtube.com/c/TheAnimeMan"
        image={joey}
        name="The Anime Man"
      />
      <InfluencerListItem
        link="https://www.youtube.com/c/sydsnap"
        image={sydney}
        name="Sydsnap"
      />
      <InfluencerListItem
        link="https://www.youtube.com/channel/UCzs3FmQ5qPfBcZj-xSZDKcw"
        image={foxen}
        name="Foxen"
      />
      <InfluencerListItem
        link="https://www.youtube.com/c/TrashTaste"
        image={trashTaste}
        name="Trash Taste"
      />
    </ul>
  );
};

const InfluencersOverseas = () => {
  return (
    <ul className="grid grid-flow-col gap-[7%] text-center font-normal pb-10 pt-10">
      <InfluencerListItem
        link="https://youtube.com/c/MothersBasement"
        image={basement}
        name="Mother's Basement"
      />
    </ul>
  );
};

const Influencers = () => {
  return (
    <div className="font-bold flex flex-col items-center pt-10 text-5xl">
      <h2 className="pb-10">
        インフルエンサー <span className="text-4xl">-Influencers-</span>
      </h2>
      <div className="flex flex-col items-center">
        <h2>Japan</h2>
        <InfluencersJapan />
        <h2 className="pt-10">Overseas</h2>
        <InfluencersOverseas />
      </div>
    </div>
  );
};

export default Influencers;
