import React from 'react';
import Horse from "./horse/horse";


const RunnersTrack = ({runners}) => {

  return(
    <div style={{padding: '0 35px 0 75px'}}>
      {Object.keys(runners).map((key, index) =>
        <Horse key={`horse${index}-${key}`} name={key} index={index} completed={runners[key]}/>
      )}
    </div>
  )
};

export default RunnersTrack;