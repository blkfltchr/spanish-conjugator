import React from 'react';

const NumberPerson = props => {
  return (
    <div>
      <select onChange={props.updateNumPerson}>
        <option selected="Latam">Latin America</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  );
};

export default NumberPerson;
