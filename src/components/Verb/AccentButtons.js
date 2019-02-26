import React from 'react';

const AccentButtons = props => {
  return (
    <div className="accent-buttons">
      <button onClick={props.addAccent} type="button" value="á">
        á
      </button>
      <button onClick={props.addAccent} type="button" value="é">
        é
      </button>
      <button onClick={props.addAccent} type="button" value="í">
        í
      </button>
      <button onClick={props.addAccent} type="button" value="ñ">
        ñ
      </button>
      <button onClick={props.addAccent} type="button" value="ó">
        ó
      </button>
      <button onClick={props.addAccent} type="button" value="ú">
        ú
      </button>
    </div>
  );
};

export default AccentButtons;
