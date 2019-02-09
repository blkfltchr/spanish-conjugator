import React from "react";

const VerbButtons = (props) => {
    return (
        <form className="three-buttons" onSubmit={props.handleSubmit}>
            <button className="button" type="submit">
              Check
            </button>
            <button className="button" onClick={ props.handleHint }>
              Hint
            </button>
            <button className="button" onClick={ props.handleRefresh }>
              Next verb
            </button>
        </form>
    );
}

export default VerbButtons;