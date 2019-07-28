import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '../Verb/Container';
import Signup from '../Signup';

const styles = theme => ({
  main: {
    width: '100%',
    margin: '10px auto',
    [theme.breakpoints.up('sm')]: {
      width: '580px',
    },
  },
})

function Landing(props) {
  const { classes } = props;
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 className="logo">Bienvenido al Spanish Conjugator{' '}
          <span role="img" aria-label="colombia">
            🇪🇸
          </span>
        </h1>
        <h2>Verb practice made easy.</h2>
      </div>
      <Container />
      <div className={classes.main} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Sign up now to level up your language learning.</h2>
        <img alt="conjugator dashboard gif" style={{ maxHeight: '487px', maxWidth: '684px' }} src="https://media.giphy.com/media/QsPVRVxhjQjshpu3Uj/giphy.gif" />
        <h2>Collect your stats</h2>
        <p>Every time you conjugate a verb, we log your response. Our interactive dashboard allows to look back over the days, weeks, and months. Figure out where you're excelling and where you need more practice. Filter your answers by tense or date range and watch your knowledge grow.</p>
        <img alt="conjugator settings gif" style={{ maxHeight: '487px', maxWidth: '684px' }} src="https://media.giphy.com/media/ZatvyBr6G2kQQjN64D/giphy.gif" />
        <h2>Take your skills to the next level</h2>
         <p>No matter your skill level, Conjugator.io has verbs you can practice with. Use our simple toggle system allows you to challenge yourself or review the basics. We've got you covered for every tense, Spanish vs. Latin American, and even regular, irregular, or all verbs.</p>
      </div>
      <Signup />
    </div>
  );
}

export default withStyles(styles)(Landing);
