import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

function Latam() {
  const [latam, setLatam] = useState(true);
  return (
    <>
      <Paper>
        <List>
          <ListItem style={{ height: '64px' }}>
            <>
              <Checkbox checked={!latam} onClick={() => setLatam(!latam)} />
              <ListItemText>
                <span>Include "Vosotros"</span>
              </ListItemText>
            </>
          </ListItem>
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

export default Latam;
