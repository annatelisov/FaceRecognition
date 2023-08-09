import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='' style={{margin: '16px', color: 'white'}}>
        <h1>{name}, your current entry count is...</h1>
      </div>
      <div className='' style={{color: 'white'}}>
        <h1>{entries}</h1>
      </div>
    </div>
  );
}

export default Rank;