import React from 'react';
import Horse from "./horse/horse";


const RunnersTrack = ({runners}) => {

  return(
    <div>
      {Object.keys(runners).map((key, index) =>
        <Horse name={key} grass={index%2 === 0} completed={runners[key]} />
      )}
    </div>
  )
};

export default RunnersTrack;