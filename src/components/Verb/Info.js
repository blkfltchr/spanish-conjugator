import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { LevelContext } from "../../Context/Store";
import styled from "styled-components";

const borderStyle = document.getElementsByClassName("verb-info");

const Info = props => {
  console.log(props);
  const {
    infinitive,
    infinitive_english,
    tense_english,
    mood_english,
    verb_english
  } = props;
  const [level, setLevel] = useContext(LevelContext);

  return (
    <div className="verb-info">
      <h2>Current Level: {level * 1 + 1}</h2>
      <div className="twelve">Verb:</div>
      <div className="twenty-four">
        {infinitive}
        <div />
        <span>({infinitive_english})</span>
      </div>
      <div className="twelve">Tense:</div>
      <div className="tense" data-tip="React-tooltip">
        {tense_english}{" "}
        {mood_english === "Subjunctive" ? `(${mood_english})` : null}
        <ReactTooltip place="right" type="info" effect="float">
          {tooltip(tense_english, verb_english)}
        </ReactTooltip>
      </div>
    </div>
  );
};

Info.propTypes = {
  infinitive: PropTypes.string,
  infinitive_english: PropTypes.string,
  tense_english: PropTypes.string,
  mood_english: PropTypes.string,
  verb_english: PropTypes.string
};

export default Info;

const tooltip = (value, tense) => {
  if (value) {
    return tense;
  } else {
    return "ERROR";
  }
};
