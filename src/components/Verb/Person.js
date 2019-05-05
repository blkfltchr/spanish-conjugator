import React from "react";
import PropTypes from "prop-types";

const personObj = {
  form_1s: "Yo",
  form_2s: "Tú",
  form_3s: "El/Ella",
  form_1p: "Nosotros",
  form_2p: "Vosotros",
  form_3p: "Ellos/Ellas"
};

const VerbPerson = props => {
  const { randomPerson } = props;
  return (
    <div className="person-flex">
      <div>{personObj[randomPerson]}</div>
    </div>
  );
};

VerbPerson.propTypes = {
  randomPerson: PropTypes.string
};

export default VerbPerson;
