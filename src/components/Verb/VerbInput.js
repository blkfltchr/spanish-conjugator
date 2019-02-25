import React from "react";

const OptionsButtons = (props) => {
  return ( 
      <div>
          <label>
              <input
              type="text"
              value={ value }
              onChange={ props.handleChange }
              className="input"
              />
              <span className='twelve'>En Español</span>
          </label>
      </div>
   );
}
 
export default OptionsButtons;