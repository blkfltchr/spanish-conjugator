import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
    }

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    formSubmit = e => {
      e.preventDefault();
      
      this.setState({ username: "", password: ""});
      // this.props.history.push("");
    };
  

    render() {
      
      const { username, password} = this.state;

      return (
      
        <form className="form" onSubmit={this.formSubmit}>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Enter username..."
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            value={password}
            name="password"
            placeholder="Enter password..."
            onChange={this.handleInputChange}
          />
           <button type="submit">Login</button>
  
          
        </form>
      );
    }
  }


export default LoginForm;