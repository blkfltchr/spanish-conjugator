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
              style={{paddingLeft: "10px"}}
              />
          </div>
          <div className="text-under-input">
              <AccentButtons addAccent={props.addAccent} />
              <div
                className="hover-text"
                type="button"
                onClick={props.handleExample}
              >
                Show example <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>
        </label>
        <div style={{height: '85px', position: "relative", padding: "10px 0"}}>
        {helperText && <div style={{textAlign: "center"}}>{helperText}</div>}
        <button
          className="submit-button"
          type="submit"
          onClick={props.handleSubmit}
          >
          {props.buttonText}
        </button>
        </div>
      </form>
    </div>
  );
};

export default VerbInput;