import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../../styled/Button';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';

class Signup extends Component {
  state = {
    // name: "",
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
        <h2>Sign up</h2>
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
            <button type="button">Sign up</button>
          </Button>
          <p>
            Don't have an account yet? <Link to="/login">Log in here</Link>
          </p>
        </LargeContainer>
      </SmallForm>
    );
  }
}

export default Signup;
