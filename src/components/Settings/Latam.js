import React, { useState, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/styles';
import useToggle from '../Hooks/useToggle';
import { LanguageContext } from './../Contexts/LanguageContext';

const styles = {
  section: {
    padding: 0,
    marginTop: 10,
    backgroundColor: '#fafafa'
  }
};

function Latam({ classes }) {
  // const [latam, toggleLatam] = useToggle(true);

  const { latam, toggleLatam } = useContext(LanguageContext);

  console.log('Context -->', latam);

  return (
    <Paper className={classes.section}>
      <List>
        <ListSubheader>Latam Spanish or Spain Spanish</ListSubheader>
        <ListItem style={{ height: '64px' }}>
          <Checkbox checked={!latam} onClick={toggleLatam} />
          <ListItemText>
            <span>Include "Vosotros"</span>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(Latam);
