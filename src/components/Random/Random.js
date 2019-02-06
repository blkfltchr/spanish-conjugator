import React from "react";

import BeginnerRandom from "./BeginnerRandom";
import OptionsButton from "../home/Options/OptionsButton";

import miniData from "../../miniData"
import beginnerData from "../../beginnerData";

const Random = () => {
  return (
      <div>
          <BeginnerRandom beginnerData={ beginnerData } advancedData={ miniData } />
          <OptionsButton />
      </div>
  );
};

export default Random;
