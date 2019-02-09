import React from "react";

import BeginnerRandom from "./BeginnerRandom";
import OptionsButton from "../home/Options/OptionsButton";

import beginnerData from "../../beginnerData";

const Random = () => {
  return (
      <div>
          <BeginnerRandom beginnerData={ beginnerData } />
          <OptionsButton />
      </div>
  );
};

export default Random;
