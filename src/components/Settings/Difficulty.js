import React, { useContext } from 'react';
import { SettingsContext } from './../Contexts/SettingsContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/styles';

const styles = {
  section: {
    padding: 0,
    marginTop: 10,
    backgroundColor: '#fafafa'
  }
};

function Difficulty({ classes }) {
  const {
    beginner,
    setBeginner,
    intermediate,
    setIntermediate,
    advanced,
    setAdvanced,
    setDifficulty
  } = useContext(SettingsContext);

  console.log('State Difficulty:', beginner, intermediate, advanced);
  return (
    <Paper className={classes.section}>
      <List>
        <ListSubheader>Difficulty</ListSubheader>
        <ListItem style={{ height: '64px' }}>
          <Checkbox
            checked={beginner}
            onClick={() => {
              setBeginner(true);
              setIntermediate(false);
              setAdvanced(false);
              setDifficulty(0);
            }}
          />
          <ListItemText>
            <span>Commonly used regular verbs</span>
          </ListItemText>
          <Checkbox
            checked={intermediate}
            onClick={() => {
              setBeginner(false);
              setIntermediate(true);
              setAdvanced(false);
              setDifficulty(1);
            }}
          />
          <ListItemText>
            <span>Commonly used regular and irregular verbs</span>
          </ListItemText>
          <Checkbox
            checked={advanced}
            onClick={() => {
              setBeginner(false);
              setIntermediate(false);
              setAdvanced(true);
              setDifficulty(2);
            }}
          />
          <ListItemText>
            <span>All Verbs</span>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(Difficulty);
