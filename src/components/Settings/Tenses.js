import React, { useContext } from 'react';
import { SettingsContext } from './../Contexts/SettingsContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/styles';
import useArrUpdate from '../Hooks/useArrUpdate';
import useSubjUpdate from '../Hooks/useSubjUpdate';

const styles = {
  section: {
    padding: 0,
    marginTop: 10,
    backgroundColor: '#fafafa'
  }
};

function Tenses({ classes }) {
  const {
    present,
    setPresent,
    pret,
    setPret,
    tenseArr,
    useUpdate,
    subjArr,
    useSubjChange
  } = useContext(SettingsContext);

  console.log('Tenses -->', tenseArr, subjArr);

  return (
    <Paper className={classes.section} elevation={1}>
      <List>
        <ListSubheader>Tenses</ListSubheader>
        <ListItem style={{ height: '64px' }}>
          <Checkbox
            checked={present}
            onClick={() => {
              useUpdate('Present');
              setPresent(!present);
            }}
          />
          <ListItemText>
            <span>Present: hablo</span>
          </ListItemText>

          <Checkbox
            checked={pret}
            onClick={() => {
              useUpdate('Preterite');
              setPret(!pret);
            }}
          />
          <ListItemText>
            <span>Preterite: hablé</span>
          </ListItemText>

          <Checkbox onClick={() => useUpdate('Imperfect')} />
          <ListItemText>
            <span>Imperfect: hablaba</span>
          </ListItemText>

          <Checkbox onClick={() => useUpdate('Future')} />
          <ListItemText>
            <span>Future: hablaré</span>
          </ListItemText>
        </ListItem>

        <ListItem style={{ height: '64px' }}>
          <Checkbox onClick={() => useUpdate('Conditional')} />
          <ListItemText>
            <span>Conditional: hablaría</span>
          </ListItemText>

          <Checkbox onClick={() => useUpdate('Present Perfect')} />
          <ListItemText>
            <span>Present Perfect: he hablado</span>
          </ListItemText>

          <Checkbox onClick={() => useUpdate('Future Perfect')} />
          <ListItemText>
            <span>Future Perfect: habré hablado</span>
          </ListItemText>

          <Checkbox onClick={() => useUpdate('Past Perfect')} />
          <ListItemText>
            <span>Past Perfect: había hablado</span>
          </ListItemText>
        </ListItem>

        <ListItem style={{ height: '64px' }}>
          <Checkbox onClick={() => useUpdate('Conditional Perfect')} />
          <ListItemText>
            <span>Conditional Perfect: habría hablado</span>
          </ListItemText>

          <Checkbox onClick={() => useSubjChange('Present')} />
          <ListItemText>
            <span>Subjunctive Present: hable</span>
          </ListItemText>

          <Checkbox onClick={() => useSubjChange('Imperfect')} />
          <ListItemText>
            <span>Subjunctive Imperfect: hablara</span>
          </ListItemText>

          <Checkbox onClick={() => useSubjChange('Present Perfect')} />
          <ListItemText>
            <span>Subjunctive Present Perfect: haya hablado</span>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(Tenses);
