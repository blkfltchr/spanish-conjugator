import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';
import { Button } from '../../styled/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SmallForm>
        <h2>Log in</h2>
        <LargeContainer>
          <Input>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
              name="email"
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
            />
          </Input>
          <Button>
            <button type="button">Log in</button>
          </Button>
        </LargeContainer>
        <p>
          Already have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </SmallForm>
    );
  }
}

export default Login;
