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
    backgroundColor: '#fafafa'
  }
};

function Latam(props) {
  const [latam, setLatam] = useState(true);
  const { classes } = props;
  return (
    <Paper className={classes.section}>
      <List>
        <ListSubheader>Latam Spanish or Spain Spanish</ListSubheader>
        <ListItem style={{ height: '64px' }}>
          <Checkbox checked={!latam} onClick={() => setLatam(!latam)} />
          <ListItemText>
            <span>Include "Vosotros"</span>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(Latam);
