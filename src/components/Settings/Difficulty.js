import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { SettingsContext } from '../Contexts/SettingsContext';

const styles = theme => ({
  section: {
    padding: 0,
    marginTop: 10,
    backgroundColor: '#fafafa'
  },
  listItem: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  listItemText: {
    width: '170px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '180px'
    }
  }
});

function Difficulty(props) {
  const { classes } = props;
  const {
    beginner,
    setBeginner,
    intermediate,
    setIntermediate,
    advanced,
    setAdvanced,
    setDifficulty
  } = useContext(SettingsContext);

  return (
    <List className={classes.section}>
      <ListSubheader>Difficulty</ListSubheader>
      <ListItem className={classes.listItem}>
        <div className={classes.listItemText}>
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
            <span>Common regular verbs</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
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
            <span>Common regular and irregular verbs</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
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
        </div>
      </ListItem>
    </List>
  );
}

Difficulty.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Difficulty);
