import React, { Component } from 'react';
import miniData from './miniData';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import Home from './components/home/Home';
import Header from './components/Header';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import Conversation from './conversationPage/Conversation';

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
    console.log('Clicked!');
    const spainSpanish = miniData.map(verb => [
      { form_1s: verb.form_1s },
      { form_2s: verb.form_2s },
      { form_3s: verb.form_3s },
      { form_1p: verb.form_1p },
      { form_3p: verb.form_3p },
      { gerund: verb.gerund },
      { pastparticiple: verb.pastparticiple }
    ]);
    this.setState({
      tempData: spainSpanish
    });
  };

  setTenses = event => {
    this.setState({
      verbTenses: event.target.value
    });
    console.log('Clicked!');
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
    console.log('Dataaaa =', this.state.data);
    console.log('TEMP', this.state.tempData);
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
              setTenses={this.setTenses}
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
