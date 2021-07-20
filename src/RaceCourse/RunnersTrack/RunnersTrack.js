import React from 'react';
import Runner from "./RunnersTrack/Runner";

const RunnersTrack = ({runners}) => {

  return(
    <div>
      {Object.keys(runners).map(key => <Runner name={key} value={runners[key]}/>)}
    </div>
  )
};

export default RunnersTrack;