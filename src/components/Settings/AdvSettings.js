import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Latam from './Latam';
import Difficulty from './Difficulty';
import Tenses from './Tenses';
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';
import { withStyles, makeStyles } from '@material-ui/styles';

const styles = {
  main: {
    padding: 0,
    marginLeft: 170,
    marginRight: 170,
    marginTop: 10,
    height: '90vh',
    backgroundColor: '#fafafa'
  },
  button: {
    marginRight: 100,
    marginTop: 20,
    width: 120,
    height: 40
  },
  buttonUpdated: {
    marginRight: 100,
    marginTop: 20,
    width: 120,
    height: 40,
    backgroundColor: 'green'
  }
};

function Settings(props) {
  const [difficulty, setDifficulty] = useState('Beginner');
  const [latam, setLatam] = useState(true);
  const [tenseArr, setTenseArr] = useState(['Present, Preterite']);
  const [clicked, setClicked] = useState(false);
  const { classes } = props;
  console.log('classes from advSettings', props);
  return (
    <div>
      {/* <h1>Settings!</h1> */}
      <Paper className={classes.main} elevation={10}>
        <AppBar color="primary" position="static" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">Select your settings</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={11}>
            <Latam />
            <Difficulty />
            <Tenses />
          </Grid>
        </Grid>
        <Grid justify="flex-end" container>
          <Button
            variant="contained"
            color="primary"
            className={clicked ? classes.buttonUpdated : classes.button}
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? 'Updated' : 'Update'}
            {/* Update */}
            {/* <i class="fas fa-check" /> */}
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Settings);
