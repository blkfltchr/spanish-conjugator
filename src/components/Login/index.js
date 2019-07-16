import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { Button } from '../../styled/Button';
import { LOGIN } from '../GqlQueries/userQueries';
import { useMutation } from 'react-apollo-hooks';

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

    props.updateToken(data.login.token);

    if (!error) {
      props.history.push('/');
    }
  };

  const { classes } = props

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 className="logo">Login</h1>
      </div>
      <Paper className={classes.main} elevation={10}>
        <form onSubmit={handleSubmit}>
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
          {error ? <div className={classes.text}>Unable to login</div> : null}
          <Button>
            <button type="submit">Login</button>
          </Button>
        <p className={classes.text}>
          Already have an account? <Link to="/signup">Sign up here</Link>
        </p>
        </form>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Login);
