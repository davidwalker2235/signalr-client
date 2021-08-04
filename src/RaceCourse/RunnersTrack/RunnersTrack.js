import React from 'react';
import Runner from "./RunnersTrack/Runner";
import Horse from "./horse/horse";


const RunnersTrack = ({runners}) => {

  return(
    <div>
      {Object.keys(runners).map(key => <Runner name={key} value={runners[key]}/>)}
      <Horse completed={0} />
      <Horse completed={0} />
      <Horse completed={0} />
      <Horse completed={0} />
      <Horse completed={0} />
      <Horse completed={0} />
      <Horse completed={10} />
      <Horse completed={100} />
    </div>
  )
};

export default RunnersTrack;