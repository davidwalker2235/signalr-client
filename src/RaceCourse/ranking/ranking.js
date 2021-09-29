import React from 'react';
import ranking from "../../assets/ranking.png"
import './ranking.css';

const Ranking = () => {

  return (
    <div className="root">
      <div>
        <div className="grade" style={{backgroundImage: `url(${ranking})`}}/>
      </div>
    </div>
  );
};

export default Ranking;