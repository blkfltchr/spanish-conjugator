import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { SettingsContext } from '../Contexts/SettingsContext';

const styles = {
  section: {
    padding: 0,
    marginTop: 10,
    backgroundColor: '#fafafa',
  },
};

function Latam(props) {
  const { latam, toggleLatam } = useContext(SettingsContext);
  const { classes } = props;
  return (
    <List className={classes.section}>
      <ListSubheader>Latam Spanish or Spain Spanish</ListSubheader>
      <ListItem style={{ height: '64px' }}>
        <Checkbox checked={!latam} onClick={toggleLatam} />
        <ListItemText>
          <span>Include "Vosotros"</span>
        </ListItemText>
      </ListItem>
    </List>
  );
}

Latam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Latam);
