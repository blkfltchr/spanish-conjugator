import React from 'react';

const AccentButtons = props => {
  return (
    <div>
      <button onClick={props.addAccent} value="á">
        á
      </button>
      <button onClick={props.addAccent}>é</button>
      <button onClick={props.addAccent}>í</button>
      <button onClick={props.addAccent}>ñ</button>
      <button onClick={props.addAccent}>ó</button>
      <button onClick={props.addAccent}>ú</button>
    </div>
  );
};

export default AccentButtons;
