import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import AccentButtons from './AccentButtons';
import Checkmark from '../Checkmark/Checkmark';

class Input extends Component {
  render() {
    const {
      randomPerson,
      value,
      handleChange,
      correct,
      addAccent,
      handleExample,
      helperText,
      handleSubmit,
      buttonText,
    } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-section">
            <Person randomPerson={randomPerson[0]} />
            <input
              type="text"
              defaultValue={value}
              placeholder="Enter conjugated verb..."
              onChange={handleChange}
              className="input"
            />
            <Checkmark correct={correct} />
          </div>
          <div className="text-under-input">
            <AccentButtons addAccent={addAccent} />
            <div
              className="hover-text"
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
            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  randomPerson: PropTypes.array,
  value: PropTypes.string,
  handleChange: PropTypes.func,
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
