import React from "react";
import winnerText from "../../assets/winnerText.png";
import './GameOver.css';

const GameOver = ({name}) => {

  return (
    <div className="gameOverRoot">
      <img alt="horse" src={winnerText} />
      <div className="gameOverName">{name}</div>
    </div>
  );
};

export default GameOver;