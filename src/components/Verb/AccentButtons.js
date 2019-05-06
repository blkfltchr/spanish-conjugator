import React from "react";
import PropTypes from "prop-types";
import { AccentButton, AccentButtonsDiv } from "./VerbStyled";

const AccentButtons = props => {
  const { addAccent } = props;
  return (
    <AccentButtonsDiv>
      <AccentButton onClick={addAccent} type="button" value="á">
        á
      </AccentButton>
      <AccentButton onClick={addAccent} type="button" value="é">
        é
      </AccentButton>
      <AccentButton onClick={addAccent} type="button" value="í">
        í
      </AccentButton>
      <AccentButton onClick={addAccent} type="button" value="ñ">
        ñ
      </AccentButton>
      <AccentButton onClick={addAccent} type="button" value="ó">
        ó
      </AccentButton>
      <AccentButton onClick={addAccent} type="button" value="ú">
        ú
      </AccentButton>
    </AccentButtonsDiv>
  );
};

AccentButtons.propTypes = {
  addAccent: PropTypes.func
};

export default AccentButtons;
