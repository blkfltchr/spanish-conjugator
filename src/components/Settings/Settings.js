import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Latam from './Latam';
import Difficulty from './Difficulty';
import Tenses from './Tenses';

const styles = theme => ({
  main: {
    width: '100%',
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

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 className="logo">Settings</h1>
      </div>
      <Paper className={classes.main} elevation={10}>
        <Latam />
        <Difficulty />
        <Tenses />
        <div className="accent-buttons">
          <button
            type="button"
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
          </button>
        </div>
      </Paper>
    </div>
  );
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);
