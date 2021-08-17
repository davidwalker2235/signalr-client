import React, {useEffect} from "react";
import winnerText from "../../assets/winnerText.png";
import './GameOver.css';

const GameOver = ({name, sendWinner}) => {

  useEffect(() => {
    sendWinner(name);
  }, [])

  return (
    <div className="gameOverRoot">
      <img alt="horse" src={winnerText} />
      <div className="gameOverName">{name}</div>
    </div>
  );
};

export default GameOver;