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
  const person = props.randomPerson
  return (
    <div className="person-flex">
      <div style={{fontWeight: '800'}}>
        {personObj[person]}
      </div>
    </div>
  );
};

export default VerbPerson;
