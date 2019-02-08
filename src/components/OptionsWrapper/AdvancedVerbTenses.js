import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedVerbTenses = props => {
  return (
      <div>
          <Link to="/random">
              <h4 type="submit">Return to Verb Pratice</h4>
          </Link>
          <label>
              <input
          type="checkbox"
          name="Present"
          value="Present"
          onChange={ props.setTenses }
        />
        Present (yo hablo)
          </label>
          <label>
              <input type="checkbox" value="Preterite" onChange={ props.setTenses } />
        Preterite (yo hablé)
          </label>
          <label>
              <input type="checkbox" />
        Imperfect (yo hablaba)
          </label>
          <label>
              <input type="checkbox" />
        Conditional (yo hablaría)
          </label>
          <label>
              <input type="checkbox" />
        Future (yo hablaré)
          </label>
          <label>
              <input type="checkbox" />
        Present Subjunctive (yo hable)
          </label>
          <label>
              <input type="checkbox" />
        Imperfect Subjunctive (yo hablara)
          </label>
          <label>
              <input type="checkbox" />
        Future Subjunctive (yo hablare)
          </label>
          <label>
              <input type="checkbox" />
        Imperative (tú habla)
          </label>
          <label>
              <input type="checkbox" />
        Imperative Negative (tú no hables)
          </label>
          <label>
              <input type="checkbox" />
        Gerund (Estoy hablando)
          </label>
          <label>
              <input type="checkbox" />
        Present Perfect (yo he hablado)
          </label>
          <label>
              <input type="checkbox" />
        Future Perfect (yo habré hablado)
          </label>
          <label>
              <input type="checkbox" />
        Past Perfect (yo había hablado)
          </label>
          <label>
              <input type="checkbox" />
        Condicional Perfect (yo habría hablado)
          </label>
      </div>
  );
};

export default AdvancedVerbTenses;
