import React from 'react';

const Runner = ({name, value}) => (
  <div style={{ background: "#eee", borderRadius: '5px', padding: '0 10px' }}>
    <p><strong>{name}</strong>: </p>
    <p>{value}</p>
  </div>
);

export default Runner;