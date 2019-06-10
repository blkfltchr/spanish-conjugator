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

function Tenses(props) {
  const [tenseArr, setTenseArr] = useState(['Present', 'Preterite']);
  const [present, setPresent] = useState(true);
  const [pret, setPret] = useState(true);
  const { classes } = props;

  console.log('Tense array', tenseArr);
  return (
    <Paper className={classes.section} elevation={1}>
      <List>
        <ListSubheader>Tenses</ListSubheader>
        <ListItem style={{ height: '64px' }}>
          <Checkbox checked={present} onClick={() => setPresent(!present)} />
          <ListItemText>
            <span>Present: hablo</span>
          </ListItemText>
          <Checkbox checked={pret} onClick={() => setPret(!pret)} />
          <ListItemText>
            <span>Preterite: hablé</span>
          </ListItemText>
          <Checkbox
            onClick={() => {
              if (tenseArr.includes('Imperfect')) {
                setTenseArr(
                  tenseArr.filter(word => {
                    return word !== 'Imperfect';
                  })
                );
              } else {
                setTenseArr([...tenseArr, 'Imperfect']);
              }
            }}
          />
          <ListItemText>
            <span>Imperfect: hablaba</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Future: hablaré</span>
          </ListItemText>
        </ListItem>
        <ListItem style={{ height: '64px' }}>
          <Checkbox />
          <ListItemText>
            <span>Conditional: hablaría</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Present Perfect: he hablado</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Future Perfect: habré hablado</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Past Perfect: había hablado</span>
          </ListItemText>
        </ListItem>
        <ListItem style={{ height: '64px' }}>
          <Checkbox />
          <ListItemText>
            <span>Conditional Perfect: habría hablado</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Subjunctive Present: hable</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Subjunctive Imperfect: hablara</span>
          </ListItemText>
          <Checkbox />
          <ListItemText>
            <span>Subjunctive Present Perfect: haya hablado</span>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(Tenses);
