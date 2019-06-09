import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Latam from './Latam';

function SettingsList({ tenseArr }) {
  return (
    <>
      <Paper>
        <List>
          {/* {props.tenseArr.map((tense, index) => (
          <React.Fragment key={index}>
            <Tenses tenseArr {...tense} key={tense.id} />
          </React.Fragment>
        ))} */}
          <Latam tenseArr={tenseArr} />
        </List>
      </Paper>
      <Paper>
        <List>
          <ListItem>
            <ListItemText>Wooooow</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </>
  );
}

export default SettingsList;
