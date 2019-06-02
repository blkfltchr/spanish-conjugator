import React from 'react';
import PropTypes from 'prop-types';

function VerbPerson(props) {
  const { person } = props;
  const personObj = {
    form1s: 'Yo',
    form2s: 'Tú',
    form3s: 'El/Ella',
    form1p: 'Nosotros',
    form2p: 'Vosotros',
    form3p: 'Ellos/Ellas',
  };

  return (
    <div className="extra-bold-text">
      <div>{personObj[person]}</div>
    </div>
  );
}

VerbPerson.propTypes = {
  person: PropTypes.string,
};

export default VerbPerson;
