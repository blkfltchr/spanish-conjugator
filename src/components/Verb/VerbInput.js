import React from 'react';
import VerbPerson from './VerbPerson';
import AccentButtons from './AccentButtons';

const VerbInput = props => {
  const { randomPerson, helperText, value } = props.state;
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
              <div
                style={{cursor: 'pointer'}}
                type="button"
                onClick={props.handleExample}
              >
                Show example
              </div>
              <span>En Español</span>
            </div>
        </label>
        <div style={{height: '105px'}}>
        <button
          className="submit-button"
          type="submit"
          onClick={props.handleSubmit}
        >
          {props.buttonText}
        </button>
        {helperText && <p>{helperText}</p>}
        </div>
      </form>
    </div>
  );
};

export default VerbInput;