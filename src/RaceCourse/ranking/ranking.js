import React from 'react';
import rankingPoster from "../../assets/ranking.png"
import './ranking.css';

const Ranking = ({ranking}) => {

  return (
    <div className="rankingRoot">
      <img alt="ranking-poster" className="rankingImage" src={rankingPoster}/>
      <div className="first">{ranking.first}</div>
      <div className="second">{ranking.second}</div>
      <div className="third">{ranking.third}</div>
    </div>
  );
};

export default Ranking;