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
    backgroundColor: '#fafafa',
  },
  listItem: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listItemText: {
    width: '170px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '180px',
    },
  },
});

function Tenses(props) {
  const { classes } = props;
  const {
    present,
    setPresent,
    pret,
    setPret,
    tenseArr,
    useUpdate,
    subjArr,
    useSubjChange,
  } = useContext(SettingsContext);

  console.log('Tenses -->', tenseArr, subjArr);

  return (
    <List className={classes.section} elevation={1}>
      <ListSubheader>Tenses</ListSubheader>

      <ListItem className={classes.listItem}>
        <div className={classes.listItemText}>
          <Checkbox
            checked={present}
            onClick={() => {
              useUpdate('Present');
              setPresent(!present);
            }}
          />
          <ListItemText>
            <span>Present</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox
            checked={pret}
            onClick={() => {
              useUpdate('Preterite');
              setPret(!pret);
            }}
          />
          <ListItemText>
            <span>Preterite</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Imperfect')} />
          <ListItemText>
            <span>Imperfect</span>
          </ListItemText>
        </div>
        {/* </ListItem>
      <ListItem> */}
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Future')} />
          <ListItemText>
            <span>Future</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Conditional')} />
          <ListItemText>
            <span>Conditional</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Present Perfect')} />
          <ListItemText>
            <span>Present Perfect</span>
          </ListItemText>
        </div>
        {/* </ListItem>
      <ListItem> */}
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Future Perfect')} />
          <ListItemText>
            <span>Future Perfect</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Past Perfect')} />
          <ListItemText>
            <span>Past Perfect</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useUpdate('Conditional Perfect')} />
          <ListItemText>
            <span>Conditional Perfect</span>
          </ListItemText>
        </div>
        {/* </ListItem>
      <ListItem> */}
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useSubjChange('Present')} />
          <ListItemText>
            <span>Subjunctive Present</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useSubjChange('Imperfect')} />
          <ListItemText>
            <span>Subjunctive Imperfect</span>
          </ListItemText>
        </div>
        <div className={classes.listItemText}>
          <Checkbox onClick={() => useSubjChange('Present Perfect')} />
          <ListItemText>
            <span>Subjunctive Present Perfect</span>
          </ListItemText>
        </div>
      </ListItem>
    </List>
  );
}

Tenses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tenses);
