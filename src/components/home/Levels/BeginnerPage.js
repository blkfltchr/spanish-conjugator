import React from "react";
import RandomButton from "../Options/RandomButton";
import OptionsButton from "../Options/OptionsButton";

const BeginnerPage = () => {
  return (
      <div>
          <p>
              <b>What would you like to do?</b>
          </p>
          <RandomButton />
          <OptionsButton />
      </div>
  );
};

export default BeginnerPage;
