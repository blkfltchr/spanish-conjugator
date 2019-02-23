import React from 'react';
import VerbPerson from './VerbPerson';
import AccentButtons from './AccentButtons';

const VerbInput = props => {
  console.log('PROPPING', props);
  const { randomPerson, helperText, value } = props.state;
  console.log('Random person from Verb input', randomPerson);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          <div className="input-section">
            <VerbPerson randomPerson={randomPerson[0]} />
            <input
              type="text"
              value={value}
              placeholder="Enter conjugated verb..."
              onChange={props.handleChange}
              className="input"
            />
          </div>
          <AccentButtons addAccent={props.addAccent} />
          <div className="text-under-input">
            <button
              className="hint-button"
              type="button"
              onClick={props.handleHint}
            >
              Hint?
            </button>
            <span>En Español</span>
          </div>
        </label>
        {helperText && <p>{helperText}</p>}
        <button
          className="submit-button"
          type="submit"
          onClick={props.handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerbInput;
