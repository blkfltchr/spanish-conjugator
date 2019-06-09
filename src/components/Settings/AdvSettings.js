import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SettingsList from './SettingsList';

function Settings() {
  const [difficulty, setDifficulty] = useState('Beginner');
  const [latam, setLatam] = useState(true);
  const [tenseArr, setTenseArr] = useState(['Present, Preterite']);

  return (
    <div>
      {/* <h1>Settings!</h1> */}
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa'
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">Select your settings</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={11}>
            {/* <Difficulty /> */}
            {/* <Latam /> */}
            <SettingsList tenseArr={tenseArr} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Settings;
