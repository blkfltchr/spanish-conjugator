import React from 'react';
import PropTypes from 'prop-types';

const AccentButtons = props => {
  const { addAccent } = props;
  return (
    <div className="accent-buttons">
      <button onClick={addAccent} type="button" value="á">
        á
      </button>
      <button onClick={addAccent} type="button" value="é">
        é
      </button>
      <button onClick={addAccent} type="button" value="í">
        í
      </button>
      <button onClick={addAccent} type="button" value="ñ">
        ñ
      </button>
      <button onClick={addAccent} type="button" value="ó">
        ó
      </button>
      <button onClick={addAccent} type="button" value="ú">
        ú
      </button>
    </div>
  );
};

AccentButtons.propTypes = {
  addAccent: PropTypes.func,
};

export default AccentButtons;
