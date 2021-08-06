import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import RunnersTrack from "./RunnersTrack/RunnersTrack";
import grade from "../assets/grade.jpg"
import footer from "../assets/footer.jpg"
import './RaceCourse.css';

const RaceCourse = () => {
  // const [ conn, setConn ] = useState();
  const [ runnersList, setRunnersList ] = useState({});
  const [ winner, setWinner ] = useState('');
  const [ maxScore, setMaxScore ] = useState(0);
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
        // setConn(connection);
      })
      .catch(e => {
        console.log('Connection failed: ', e)
      });
  }, []);

  const getWinner = (runnersList = {}) => {
    const sorted = Object.entries(runnersList)
      .sort(([,a],[,b]) => a-b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    setWinner(Object.keys(sorted).pop())
  }

  return (
    <div className="root">
      <div className="grade" style={{ backgroundImage: `url(${grade})` }} />
      <div className="score">{`winner: ${winner} with: ${maxScore}`}</div>
      {maxScore < 5 ?
        <div className="tracksRoot">
          <RunnersTrack runners={runnersList}/>
        </div> :
        <div>{`WINNER: ${winner}`}</div>
      }
      <div className="footer" style={{ backgroundImage: `url(${footer})` }} />
    </div>
  );
};

export default RaceCourse;