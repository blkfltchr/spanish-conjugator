import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { Button } from '../../styled/Button';
import { useMutation } from 'react-apollo-hooks';
import { CREATE_USER } from '../GqlQueries/userQueries';

const styles = theme => ({
  main: {
    width: '100%',
    margin: '10px auto',
    backgroundColor: '#fafafa',
    [theme.breakpoints.up('sm')]: {
      width: '580px',
    },
  },
  input: {
    padding: '15px 30px',
  },
  text: {
    textAlign: 'center',
    padding: '15px 0',
  }
})

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
    props.updateToken(data.createUser.token);

    if (!error) {
      props.history.push('/');
    }
  };

  const { classes } = props

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 className="logo">Sign up</h1>
      </div>
      <Paper className={classes.main} elevation={10}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              className={classes.input}
              type="name"
              value={name}
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className={classes.input}
              type="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className={classes.input}
              type="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              name="password"
            />
          </FormGroup>
          {error ? <p className={classes.text}>Password needs to be at least 8 characters</p> : null}
          <Button>
            <button type="submit">Sign up</button>
          </Button>
          <p className={classes.text}>
            Don't have an account yet? <Link to="/login">Log in here</Link>
          </p>
        </form>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Signup);
