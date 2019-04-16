import React, { Component } from "react";

class RegisterForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
      };
    }

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    formSubmit = e => {
      e.preventDefault();
      
      this.setState({ username: "", password: "", email: "", });
      // this.props.history.push("");
    };
  

    render() {
      
      const { username, password, email } = this.state;

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
          
            <input
              type="text"
              value={email}
              name="email"
              placeholder="Enter email..."
              onChange={this.handleInputChange}
            />
          
  
          <button type="submit">Register</button>
        </form>
      );
    }
  }


export default RegisterForm;
