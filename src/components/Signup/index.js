import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';

function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    setName(event.target.name);
    setEmail(event.target.email);
    setPassword(event.target.password);
  };

  return (
    <SmallForm>
      <h2>Sign up</h2>
      <LargeContainer>
        <Input>
          <input
            type="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
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

export default Signup;
