import React from "react";
import horse1 from "../../../assets/horse1.png"

const Horse = (props) => {
  const { completed, grass } = props;
  const containerStyles = {
    height: 20,
    paddingLeft: 80,
    backgroundColor: grass ? '#0CC505' : '#62F216'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed * 0.7}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    width: 80,
    marginTop: -38,
    position: 'absolute',
    marginLeft: -80,
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <img alt="horse" style={labelStyles} src={horse1} />
      </div>
    </div>
  );
};

export default Horse;