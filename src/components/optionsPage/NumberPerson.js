import React from 'react';

const NumberPerson = () => {
  return (
    <div>
      <form>
        <label>
          <input type="button" />
          Singular, 1st person (yo)
        </label>
        <label>
          <input type="button" />
          Singular, 2nd person (tú)
        </label>
        <label>
          <input type="button" />
          Singular, 3rd person (él, ella, usted)
        </label>
        <label>
          <input type="button" />
          Plural, 1st person (nosotros)
        </label>
        <label>
          <input type="button" />
          Plural, 2nd person (vosotros)
        </label>
        <label>
          <input type="button" />
          Plural, 3rd person (ellos, ellas, ustedes)
        </label>
      </form>
    </div>
  );
};

export default NumberPerson;
