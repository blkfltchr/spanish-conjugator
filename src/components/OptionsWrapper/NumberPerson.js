import React from "react";

const NumberPerson = props => {
  return (
      <div>
          <div onClick={ props.updateNumPerson } value="Latam"><span style={ {cursor: "pointer", fontSize: "2rem"} } role="img" aria-label="globe">🌎</span></div>
          <div onClick={ props.updateNumPerson } value="Spain"><span style={ {pointer: "pointer", fontSize: "2rem"} } role="img" aria-label="spain">🇪🇸</span></div>
      </div>
  );
};

export default NumberPerson;
