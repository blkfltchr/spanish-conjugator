import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Latam from './Latam';
import Difficulty from './Difficulty';
import Tenses from './Tenses';

const styles = theme => ({
  main: {
    width: '380px',
    margin: '10px auto',
    backgroundColor: '#fafafa',
    [theme.breakpoints.up('sm')]: {
      width: '580px',
    },
  },
  button: {
    marginRight: 100,
    marginTop: 20,
    width: 120,
    height: 40,
  },
  buttonUpdated: {
    marginRight: 100,
    marginTop: 20,
    width: 120,
    height: 40,
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: '#1B5E20',
    },
  },
});

function Settings(props) {
  const [clicked, setClicked] = useState(false);
  const { classes, history } = props;

  const sendHome = () => {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  // console.log('classes from advSettings', props);
  return (
    <div>
      <Paper className={classes.main} elevation={10}>
        <AppBar color="primary" position="static" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">Select your settings</Typography>
          </Toolbar>
        </AppBar>
        <Latam />
        <Difficulty />
        <Tenses />
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '20px' }}
          className={clicked ? classes.buttonUpdated : classes.button}
          onClick={() => {
            setClicked(!clicked);
            sendHome();
          }}
        >
          {clicked ? 'Updated' : 'Update'}
        </Button>
      </Paper>
    </div>
  );
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);
