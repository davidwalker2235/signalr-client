import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import RunnersTrack from "./RunnersTrack/RunnersTrack";
import grade from "../assets/grade.jpg"
import footer from "../assets/footer.jpg"
import './RaceCourse.css';
import GameOver from "./GameOver/GameOver";
import Ranking from "./ranking/ranking";

const RaceCourse = () => {
  const MAX_VALUE_ALLOWED = 142;
  // const MAX_VALUE_ALLOWED = 5;
  const [ runnersList, setRunnersList ] = useState({});
  const [ winner, setWinner ] = useState({
    first: '',
    second: '',
    third: ''
  });
  const [ maxScore, setMaxScore ] = useState(0);
  const [ conn, setConn ] = useState();
  const latestRunnersList = useRef(null);

  latestRunnersList.current = runnersList;

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      // .withUrl('https://signalrhorses.azurewebsites.net/chat')
      .withUrl('https://localhost:44318/chat')
      .build();

    connection.start()
      .then(() => {
        console.log('Connected!');

        connection.on('broadcastUserList', (list) => {
          latestRunnersList.current = list;
          setRunnersList(list);
        });

        connection.on('broadcastUser', (runner) => {
          Object.keys(runner).forEach(key => {
            latestRunnersList.current = {...latestRunnersList.current, [key]: runner[key]}
            setRunnersList(latestRunnersList.current);
            getWinner(latestRunnersList.current);
            setMaxScore(runner[key]);
          })
        });
        setConn(connection);
      })
      .catch(e => {
        console.log('Connection failed: ', e)
      });
  }, []);

  const getWinner = (runnersList = {}) => {
    const sorted = Object.entries(runnersList)
      .sort(([,a],[,b]) => a-b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    const runnersKeys = Object.keys(sorted);
    setWinner({
      first: runnersKeys.pop() || '',
      second: runnersKeys.pop() || '',
      third: runnersKeys.pop() || ''
    })
  }

  const sendWinner = async (winner) => {
    try {
      conn.invoke('sendWinner', winner);
    }
    catch(e) {
      console.log('Sending winner name failed.', e);
    }
  }

  return (
    <div className="root">
      {maxScore < MAX_VALUE_ALLOWED ?
        <div>
          <div className="grade" style={{backgroundImage: `url(${grade})`}}/>
          <Ranking ranking={winner}/>
          <div className="tracksRoot">
            <RunnersTrack runners={runnersList}/>
          </div>
          <div className="footer" style={{backgroundImage: `url(${footer})`}}/>
        </div> :
        <GameOver name={winner.first} sendWinner={sendWinner}/>
      }
    </div>
  );
};

export default RaceCourse;