import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import AccentButtons from './AccentButtons';
import Checkmark from '../Checkmark/Checkmark';
import { Button } from '../../styled/Button';

function Input(props) {
  const {
    randomPerson,
    value,
    correct,
    addAccent,
    handleExample,
    helperText,
    handleSubmit,
    buttonText,
    setValue,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-section">
          <Person randomPerson={randomPerson} />
          <input
            type="text"
            value={value}
            placeholder="Enter conjugated verb..."
            onChange={e => setValue(e.target.value)}
            className="verb-input"
          />
          <Checkmark correct={correct} />
        </div>
        <div className="flex-between">
          <AccentButtons addAccent={addAccent} />
          <div
            className="text-button"
            type="button"
            role="button"
            tabIndex={0}
            onClick={handleExample}
          >
            Show example <i className="far fa-arrow-alt-circle-right" />
          </div>
        </div>
        <div className="helper-text">
          {helperText && <div>{helperText}</div>}
          <Button>
            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              {buttonText}
            </button>
          </Button>
        </div>
      </form>
    </div>
  );
}

Input.propTypes = {
  randomPerson: PropTypes.array,
  value: PropTypes.string,
  correct: PropTypes.bool,
  addAccent: PropTypes.func,
  handleExample: PropTypes.func,
  helperText: PropTypes.string,
  handleSubmit: PropTypes.func,
  buttonText: PropTypes.string,
};

Input.defaultProps = {
  randomPerson: ['answer', 'answer'],
  value: '',
  correct: false,
  helperText: '',
  buttonText: '',
};

export default Input;
