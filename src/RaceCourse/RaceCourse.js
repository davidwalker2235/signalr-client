import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import RunnersTrack from "./RunnersTrack/RunnersTrack";
import grade from "../assets/grade.jpg"
import footer from "../assets/footer.jpg"
import './RaceCourse.css';

const RaceCourse = () => {
  // const [ conn, setConn ] = useState();
  const [ runnersList, setRunnersList ] = useState([]);
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

        connection.on('broadcastUserList', (runnersList) => {
          setRunnersList(runnersList);
        });
        // setConn(connection);
      })
      .catch(e => {
        console.log('Connection failed: ', e)
      });
  }, []);

  return (
    <div className="root">
      <div className="grade" style={{ backgroundImage: `url(${grade})` }} />
      <div className="tracksRoot">
        <RunnersTrack runners={runnersList}/>
      </div>
      <div className="footer" style={{ backgroundImage: `url(${footer})` }} />
    </div>
  );
};

export default RaceCourse;