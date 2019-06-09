import React, { useState } from 'react';
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
    // backgroundColor: '#fafafa'
    backgroundColor: '#F5F5F5'
  }
};

function Difficulty(props) {
  const [beginner, setBeginner] = useState(true);
  const [intermediate, setIntermediate] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const { classes } = props;

  return (
    <Paper className={classes.section}>
      <List>
        <ListSubheader>Difficulty</ListSubheader>
        <ListItem style={{ height: '64px' }}>
          <Checkbox
            checked={beginner}
            onClick={() =>
              setBeginner(!beginner) &&
              setIntermediate(false) &&
              setAdvanced(false)
            }
          />
          <ListItemText>
            <span>Commonly used regular verbs</span>
          </ListItemText>
          <Checkbox
            checked={intermediate}
            onClick={() =>
              setBeginner(!beginner) &&
              setIntermediate(!intermediate) &&
              setAdvanced(!advanced)
            }
          />
          <ListItemText>
            <span>Commonly used regular and irregular verbs</span>
          </ListItemText>
          <Checkbox
            checked={advanced}
            onClick={() =>
              setBeginner(false) && setIntermediate(true) && setAdvanced(false)
            }
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
