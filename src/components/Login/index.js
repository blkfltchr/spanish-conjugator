import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';
import { Button } from '../../styled/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    setEmail(event.target.email);
    setPassword(event.target.password);
  };

  return (
    <SmallForm>
      <h2>Sign up</h2>
      <LargeContainer>
        <Input>
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
          <button type="button">Login</button>
        </Button>
        <p>
          Already have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </LargeContainer>
    </SmallForm>
  );
}

export default Login;
