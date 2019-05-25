import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';
import { useMutation } from 'react-apollo-hooks';
import { CREATE_USER } from '../GqlQueries/Queries';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutate = useMutation(CREATE_USER);

  const handleSubmit = event => {
    event.preventDefault();
    mutate({
      variables: {
        name: name,
        email: email,
        password: password
      }
    });
  };

  return (
    <SmallForm onSubmit={handleSubmit}>
      <h2>Login</h2>
      <LargeContainer>
        <Input>
          <input
            type="name"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            name="name"
          />
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
          <button type="submit">Sign up</button>
        </Button>
        <p>
          Don't have an account yet? <Link to="/login">Log in here</Link>
        </p>
      </LargeContainer>
    </SmallForm>
  );
}

export default Signup;
