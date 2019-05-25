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

  const handleSubmit = async event => {
    event.preventDefault();
    const { data, loading, error } = await mutate({
      variables: {
        email: email,
        password: password
      }
    });
    console.log('Login ---->', data.login);
  };

  return (
    <SmallForm onSubmit={handleSubmit}>
      <h2>Login</h2>
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
          <Button>
            <button type="submit">Login</button>
          </Button>
        </Input>
        <p>
          Already have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </LargeContainer>
    </SmallForm>
  );
}

export default Login;
