import React, { Component } from 'react';
import miniData from '../../miniData';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';
import RandomButton from '../home/Options/RandomButton';
import ConversationButton from '../home/Options/ConversationButton';
import { spainSpanish, latamSpanish } from '../../components/NumPersonFilters';
import { Beginner, Intermediate } from '../../components/VerbTensesFilters';
import { Route, Link } from 'react-router-dom';
import RandomFiltered from './RandomFiltered/RandomFiltered';

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Intermediate,
      // tempData: Intermediate,
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate'
    };
  }

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value
    });
  };

  updateVerbTenses = event => {
    if (event.target.value === 'Beginner') {
      this.setState({
        data: Beginner
      });
    } else if (event.target.value === 'Intermediate') {
      this.setState({
        data: Intermediate
      });
    } else if (event.target.value === 'Advanced') {
      this.setState({
        data: miniData
      });
    }
    // this.setState({
    //   VerbTenses: event.target.value
    // });
  };

  // verbTenseChange = event => {
  //   event.preventDefault();

  //   if (this.state.VerbTenses === 'Beginner') {
  //     this.setState({
  //       data: Beginner
  //     });
  //   } else if (this.state.VerbTenses === 'Intermediate') {
  //     this.setState({
  //       data: Intermediate
  //     });
  //   } else if (this.state.VerbTenses === 'Advanced') {
  //     this.setState({
  //       data: miniData
  //     });
  //   }

  //   // const spainSpanishFiltered = spainSpanish(this.state.data);
  //   // if (this.state.NumberPerson === 'Spain') {
  //   //   this.setState({
  //   //     data: spainSpanishFiltered
  //   //   });
  //   // }
  //   // const latamFiltered = latamSpanish(this.state.data);
  //   // if (this.state.NumberPerson === 'Latam') {
  //   //   this.setState({
  //   //     data: latamFiltered
  //   //   });
  //   // }
  // };

  filterData = event => {
    event.preventDefault();

    const spainBeg = spainSpanish(Beginner);
    const spainInter = spainSpanish(Intermediate);
    const spainAdv = spainSpanish(miniData);
    console.log('We are in filter data!');
    // const spainSpanishFiltered = spainSpanish(this.state.data);
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Beginner'
    ) {
      console.log('1st');
      this.setState({
        data: spainBeg
      });
    }
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Intermediate'
    ) {
      console.log('2nd');
      this.setState({
        data: spainInter
      });
    }
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Advanced'
    ) {
      console.log('3rd');
      this.setState({
        data: spainAdv
      });
    }

    const latamBeg = latamSpanish(Beginner);
    const latamInter = latamSpanish(Intermediate);
    const latamAdv = latamSpanish(miniData);
    console.log('LATAM BEG', latamBeg);
    console.log('Number person', this.state.NumberPerson);
    console.log('Verb tense', this.state.VerbTenses);
    // console.log('Afterwards', this.state.data);
    // const latamFiltered = latamSpanish(this.state.data);
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Beginner'
    ) {
      console.log('4th');
      this.setState({
        data: latamBeg
      });
    }
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Intermediate'
    ) {
      console.log('5th');
      this.setState({
        data: latamInter
      });
    }
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Advanced'
    ) {
      console.log('6th');
      this.setState({
        data: latamAdv
      });
    }

    console.log('state data after filters', this.state.data);
  };

  render() {
    console.log('Data from render', this.state.data);
    // console.log('Temp', this.state.tempData);

    // console.log('Beginner data =', Beginner);

    return (
      <div>
        <form onSubmit={this.filterData}>
          <div>
            <h3>Verb Frequency</h3>
            <VerbFrequency />
          </div>
          <div>
            <h3>Verb Tenses</h3>
            <VerbTenses updateVerbTenses={this.updateVerbTenses} />
          </div>
          <div>
            <h3>Number and Person</h3>
            <NumberPerson updateNumPerson={this.updateNumPerson} />
          </div>
          <button type="submit">Update Settings</button>
        </form>
        <Link
          to={{
            pathname: '/randomFiltered',
            state: { data: this.state.data }
          }}
        >
          <h4 type="submit">Begin Verb Pratice</h4>
        </Link>
        <Link to="/AdvancedOptions">
          <h4 type="submit">Advanced Settings</h4>
        </Link>
        <RandomButton />
        <ConversationButton />
      </div>
    );
  }
}

export default OptionsContainer;
