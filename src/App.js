import React, { Component } from 'react';
import miniData from './miniData';
import presentData from './presentData';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import Home from './components/home/Home';
import Header from './components/Header';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer'
import Conversation from './components/conversationPage/Conversation';
import BeginnerPage from './components/home/Levels/BeginnerPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData,
      present: presentData,
      verbTenses: []
    };
  }

  filterData = event => {
    event.preventDefault();
    const test = Object.values(miniData).filter(
      verb => verb.infinitive === 'hablar'
    );
    this.setState({
      data: test
    });
  };

  setTenses = event => {
    this.setState({
      verbTenses: event.target.value
    });
    console.log('Clicked!');
  };

  render() {
    return (
      <div style={{width: '420px', margin: '0 auto'}}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/conversation" component={Conversation} />
        <Route exact path="/beginner" component={BeginnerPage} />
        <Route
            exact path="/random"
            render={props => (
              <ConjugatorContainer
                {...props}
                setTenses={this.setTenses}
                data={this.state.present}
              />
            )}
          />
        <div>
          <Route
            exact path="/options"
            render={props => (
              <OptionsContainer {...props} filterData={this.filterData} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
