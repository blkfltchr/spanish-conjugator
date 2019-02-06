import React from "react";

import BeginnerRandom from "./BeginnerRandom";
import OptionsButton from "../home/Options/OptionsButton";
import miniData from "../../miniData"

const Random = props => {
  return (
      <div>
          <BeginnerRandom beginnerData={ props.data } advancedData={ miniData } />
          <OptionsButton />
      </div>
  );
};

export default Random;
