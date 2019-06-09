import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Latam({ tenseArr }) {
  console.log('Tense -->', tenseArr);
  const [latam, setLatam] = useState(true);
  return (
    <ListItem style={{ height: '64px' }}>
      <>
        <Checkbox checked={latam} onClick={() => setLatam(!latam)} />
        <ListItemText>
          <span>Exclude "Vosotros"</span>
        </ListItemText>
        <Checkbox checked={!latam} onClick={() => setLatam(!latam)} />
        <ListItemText>
          <span>Include "Vosotros"</span>
        </ListItemText>
        {/* <Checkbox t /> */}
        {/* <ListItemText>
          <span>All</span>
        </ListItemText> */}
      </>
    </ListItem>
  );
}

export default Latam;
