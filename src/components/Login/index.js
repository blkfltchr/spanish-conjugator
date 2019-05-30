import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SmallForm } from '../../styled/Form';
import { LargeContainer } from '../../styled/Container';
import { Input } from '../../styled/Input';
import { Button } from '../../styled/Button';
import { LOGIN } from '../GqlQueries/userQueries';
import { useMutation } from 'react-apollo-hooks';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const mutate = useMutation(LOGIN);

  const handleSubmit = async event => {
    event.preventDefault();

    // if user enters the wrong email/password, gql throws an error
    // the error prevents code after the query from running
    // if there's no error, the user is redirected
    // else error is set to true, and the password sentence is conditionally rendered
    // we need to wait 0.75 secs before rendering so that successful sign-ups don't see it before redirect
    setTimeout(() => {
      setError(true);
    }, 750);

    const { data, error } = await mutate({
      variables: {
        email: email,
        password: password
      }
    });

    props.updateUserId(data.login.user.id);

    if (!error) {
      props.history.push('/');
    }
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
          {error ? <div>Unable to login</div> : null}
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
