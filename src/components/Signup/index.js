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

  // const handleChange = event => {
  //   console.log('Evenet ----', event.target.name);
  //   setName(event.target.name);
  //   setEmail(event.target.email);
  //   setPassword(event.target.password);
  // };

  const onSubmit = event => {
    mutate({
      variables: {
        // data: {
        name: name,
        email: email,
        password: password
        // }
      }
    });
  };

  console.log('Mutate -->', mutate);

  console.log('Trio...', name, email, password);
  return (
    <SmallForm>
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
        <Button>
          <button onClick={onSubmit} type="button">
            Sign up
          </button>
        </Button>
        <p>
          Don't have an account yet? <Link to="/login">Log in here</Link>
        </p>
      </LargeContainer>
    </SmallForm>
  );
}

export default Signup;
