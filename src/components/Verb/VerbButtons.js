import React from "react";

const VerbButtons = (props) => {
    return (
        <div>
            <button className="submit-button" type="submit" onClick={props.handleSubmit}>
              Submit
            </button>
            {/* <button className="button" onClick={ props.handleHint }>
              Hint
            </button> */}
            {/* <button className="button" onClick={ props.handleRefresh }>
              Next verb
            </button> */}
        </div>
    );
}

export default VerbButtons;