import React from 'react';

const personObj = {
  form_1s: 'Yo',
  form_2s: 'Tú',
  form_3s: 'El/Ella',
  form_1p: 'Nosotros',
  form_2p: 'Vosotros',
  form_3p: 'Ellos/Ellas'
}

const VerbPerson = props => {
  return (
    <div className="person-flex">
      <div>
        {personObj[props.randomPerson]}
      </div>
    </div>
  );
};

export default VerbPerson;
