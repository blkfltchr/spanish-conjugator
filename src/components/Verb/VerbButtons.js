import React from "react";

const VerbButtons = (props) => {
    return (
        <div className="three-buttons">
            <button className="button" onClick={ props.handleSubmit }>
              Check
            </button>
            <button className="button" onClick={ props.handleHint }>
              Hint
            </button>
            <button className="button" onClick={ props.handleRefresh }>
              Next verb
            </button>
        </div>
    );
}

export default VerbButtons;