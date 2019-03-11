import React from "react";

const OptionsButtons = (props) => {
  return ( 
      <div className="box-container" onClick={ props.handleLevelChange }>
          <div className="box">
              {props.beginner && (
              <div>
                  <p><b>Advanced</b></p>
                  <p>You've been speaking Spanish for a while, feel comfortable in conversation, and want to take your skills to the highest level.</p>
              </div>
              )}
              {!props.beginner && (
              <div>
                  <p><b>Beginner</b></p>
                  <p>You've just started learning Spanish and you want to build a strong foundation by practicing the basics.</p>
              </div>
              )}
          </div>
      </div>
   );
}
 
export default OptionsButtons;