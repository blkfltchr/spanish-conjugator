import React, { Component } from 'react';
import miniData from './miniData';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import { Route, Link } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData
    };
  }
  render() {
    return (
      <div>
        <StyledLink to="/">Spanish Conjugator</StyledLink>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <ConjugatorContainer {...props} data={this.state.data} />
            )}
          />
        </div>
        <div>
          <Route
            path="/options"
            render={props => <OptionsContainer {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
