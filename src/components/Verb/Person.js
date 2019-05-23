import React from 'react';
import PropTypes from 'prop-types';

function VerbPerson(props) {
  const { randomPerson } = props;
  const personObj = {
    form1s: 'Yo',
    form2s: 'Tú',
    form3s: 'El/Ella',
    form1p: 'Nosotros',
    form2p: 'Vosotros',
    form3p: 'Ellos/Ellas'
  };

  return (
    <div className="person-flex">
      <div>{personObj[randomPerson]}</div>
    </div>
  );
}

VerbPerson.propTypes = {
  randomPerson: PropTypes.string
};

export default VerbPerson;
