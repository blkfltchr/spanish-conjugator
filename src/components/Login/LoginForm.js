import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
      this.props.history.push("/");
    };
  

    render() {
      
      const { username, password} = this.state;

      return (
        <div>

        <div className='Login-header'>
            <h1>Conjugator</h1>
        </div>

        <h2>Login</h2>
      
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
          <div className="button">
           <button type="submit">Sign in</button>
           </div>
           <Link to='/Register'><button>New to Conjugator? Register here</button></Link>
        </form>
        </div>
      );
    }
  }


export default LoginForm;