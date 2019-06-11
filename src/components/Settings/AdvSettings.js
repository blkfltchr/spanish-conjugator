import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Latam from './Latam';
import Difficulty from './Difficulty';
import Tenses from './Tenses';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import useArrUpdate from '../Hooks/useArrUpdate';
import useSubjUpdate from '../Hooks/useSubjUpdate';

const styles = theme => ({
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
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: '#1B5E20'
    }
  }
});

function Settings({
  classes,
  beginner,
  intermediate,
  advanced,
  setBeginner,
  setIntermediate,
  setAdvanced,
  latam,
  setLatam,
  setDifficulty,
  setTenseArr,
  setSubjArr,
  props
}) {
  const [tenseArr, useUpdate] = useArrUpdate();
  const [subjArr, useSubjChange] = useSubjUpdate();
  const [clicked, setClicked] = useState(false);

  const sendHome = () => {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  };

  const updateDif = (beg, inter, adv) => {
    if (beg) {
      setDifficulty('Beginner');
    } else if (inter) {
      setDifficulty('Intermediate');
    } else if (adv) {
      setDifficulty('Advanced');
    }
  };

  const updateArrays = (tenseArr, subjArr) => {
    setTenseArr(tenseArr);
    setSubjArr(subjArr);
  };

  console.log('classes from advSettings', props);
  return (
    <div>
      <Paper className={classes.main} elevation={10}>
        <AppBar color="primary" position="static" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">Select your settings</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={11}>
            <Latam latam={latam} setLatam={setLatam} />
            <Difficulty
              beginner={beginner}
              intermediate={intermediate}
              advanced={advanced}
              setBeginner={setBeginner}
              setIntermediate={setIntermediate}
              setAdvanced={setAdvanced}
            />
            <Tenses
              useUpdate={useUpdate}
              useSubjChange={useSubjChange}
              setTenseArr={setTenseArr}
              setSubjArr={setSubjArr}
            />
          </Grid>
        </Grid>
        <Grid justify="flex-end" container>
          <Button
            variant="contained"
            color="primary"
            className={clicked ? classes.buttonUpdated : classes.button}
            onClick={() => {
              setClicked(!clicked);
              sendHome();
              updateDif(beginner, intermediate, advanced);
              updateArrays(tenseArr, subjArr);
            }}
          >
            {clicked ? 'Updated' : 'Update'}
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Settings);
