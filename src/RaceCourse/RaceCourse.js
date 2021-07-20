import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import RunnersTrack from "./RunnersTrack/RunnersTrack";

const RaceCourse = () => {
  // const [ conn, setConn ] = useState();
  const [ runnersList, setRunnersList ] = useState([]);
  const latestRunnersList = useRef(null);

  latestRunnersList.current = runnersList;

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      // .withUrl('https://signalrhorses.azurewebsites.net//chat')
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
        debugger;
        console.log('Connection failed: ', e)
      });
  }, []);

  // const sendMessage = async (user, message) => {
  //   const chatMessage = {
  //     name: user,
  //     message: message
  //   };
  //
  //   try {
  //     conn.invoke('send', chatMessage.name, chatMessage.message);
  //   }
  //   catch(e) {
  //     console.log('Sending message failed.', e);
  //   }
  // }

  return (
    <div>
      <RunnersTrack runners={runnersList}/>
    </div>
  );
};

export default RaceCourse;