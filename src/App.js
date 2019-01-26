import React, { Component } from 'react';
import miniData from './miniData';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import Home from './components/home/Home';
import Header from './components/Header';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import Conversation from './conversationPage/Conversation';
import { spainSpanish, latamSpanish } from './components/NumPersonFilters';
import { beginner, intermediate } from './components/VerbTensesFilters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData,
      tempData: [],
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate'
    };
  }

  filterData = event => {
    event.preventDefault();

    if (this.state.VerbTenses === 'Beginner') {
      this.setState({
        data: beginner
      });
    }

    if (this.state.VerbTenses === 'Intermediate') {
      this.setState({
        data: intermediate
      });
    }

    if (this.state.VerbTenses === 'Advanced') {
      this.setState({
        data: miniData
      });
    }

    const spainSpanishFiltered = spainSpanish(this.state.data);
    if (this.state.NumberPerson === 'Spain') {
      this.setState({
        tempData: spainSpanishFiltered
      });
    }
    const latamFiltered = latamSpanish(this.state.data);
    if (this.state.NumberPerson === 'Latam') {
      this.setState({
        tempData: latamFiltered
      });
    }
  };

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value
    });
  };

  updateVerbTenses = event => {
    this.setState({
      VerbTenses: event.target.value
    });
  };

  render() {
    console.log('Data =', this.state.data);
    console.log('Temp data =', this.state.tempData);
    return (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/conversation" component={Conversation} />
        <Route
          exact
          path="/random"
          render={props => (
            <ConjugatorContainer
              {...props}
              setTenses={this.updateVerbTenses}
              data={this.state.data}
            />
          )}
        />
        <div>
          <Route
            exact
            path="/options"
            render={props => (
              <OptionsContainer
                {...props}
                updateNumPerson={this.updateNumPerson}
                updateVerbTenses={this.updateVerbTenses}
                filterData={this.filterData}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
