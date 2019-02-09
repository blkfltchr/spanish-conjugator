import React from 'react';

const AdvancedNumberPerson = () => {
  return (
      <div>
          <label>
              <input type="checkbox" />
        Singular, 1st person (yo)
          </label>
          <label>
              <input type="checkbox" />
        Singular, 2nd person (tú)
          </label>
          <label>
              <input type="checkbox" />
        Singular, 3rd person (él, ella, usted)
          </label>
          <label>
              <input type="checkbox" />
        Plural, 1st person (nosotros)
          </label>
          <label>
              <input type="checkbox" />
        Plural, 2nd person (vosotros)
          </label>
          <label>
              <input type="checkbox" />
        Plural, 3rd person (ellos, ellas, ustedes)
          </label>
      </div>
  );
};

export default AdvancedNumberPerson;
