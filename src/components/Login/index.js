import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';
import { Button } from '../../styled/Button';
import { LOGIN } from '../GqlQueries/Queries';
import { useMutation } from 'react-apollo-hooks';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutate = useMutation(LOGIN);

  const onSubmit = () => {
    mutate({
      variables: {
        email: email,
        password: password
      }
    });
  };

  console.log('Email password...', email, password);
  console.log('Mutate from login..', mutate);

  return (
    <SmallForm>
      <h2>Sign up</h2>
      <LargeContainer>
        <Input>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            name="password"
          />
        </Input>
        <Button>
          <button onClick={onSubmit} type="button">
            Login
          </button>
        </Button>
        <p>
          Already have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </LargeContainer>
    </SmallForm>
  );
}

export default Login;
