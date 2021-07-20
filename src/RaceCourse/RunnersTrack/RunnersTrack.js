import React from 'react';

const RunnersTrack = ({runners}) => {

  return(
    <div>
      {runners.map(m => <div>{m}</div>)}
    </div>
  )
};

export default RunnersTrack;