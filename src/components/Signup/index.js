import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';
import { useMutation } from 'react-apollo-hooks';
import { CREATE_USER } from '../GqlQueries/Queries';

function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const mutate = useMutation(CREATE_USER);

  const handleSubmit = async event => {
    event.preventDefault();

    // if user password.length < 8, gql throws error
    // the error prevents code after the query from running
    // if there's no error, the user is redirected
    // else error is set to true, and the password sentence is conditionally rendered
    // we need to wait 0.75 secs before rendering so that successful sign-ups don't see it before redirect
    setTimeout(() => {
      setError(true);
    }, 750);

    const { data, error } = await mutate({
      variables: {
        name: name,
        email: email,
        password: password
      }
    });
    if (!error) {
      props.history.push('/');
    }
  };

  return (
    <SmallForm onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
        {error ? <p>Password needs to be at least 8 characters</p> : null}
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
