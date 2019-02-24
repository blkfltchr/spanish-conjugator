import React from 'react';

const AccentButtons = props => {
  return (
    <div>
      <button onClick={props.addAccent} value="á">
        á
      </button>
      <button onClick={props.addAccent} value="é">
        é
      </button>
      <button onClick={props.addAccent} value="í">
        í
      </button>
      <button onClick={props.addAccent} value="ñ">
        ñ
      </button>
      <button onClick={props.addAccent} value="ó">
        ó
      </button>
      <button onClick={props.addAccent} value="ú">
        ú
      </button>
    </div>
  );
};

export default AccentButtons;
