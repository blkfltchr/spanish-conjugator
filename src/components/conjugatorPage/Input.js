import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: ''
         }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    render() { 
        return ( 
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button>Check</button>
            </div>
         );
    }
}
 
export default Input;