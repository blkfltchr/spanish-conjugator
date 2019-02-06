import React, { Component } from 'react';
import miniData from '../../miniData';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';
import FilteredRandomButton from '../OptionsPage/RandomFiltered/FilteredRandomButton';
import RandomButton from '../home/Options/RandomButton';
import { spainSpanish, latamSpanish } from '../../components/NumPersonFilters';
import { Beginner, Intermediate } from '../../components/VerbTensesFilters';
import { Link } from 'react-router-dom';

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Intermediate,
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate',
      updated: false
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
  };

  filterData = event => {
    event.preventDefault();
    console.log('Filtering data!');

    const spainBeg = spainSpanish(Beginner);
    const spainInter = spainSpanish(Intermediate);
    const spainAdv = spainSpanish(miniData);

    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Beginner'
    ) {
      this.setState({
        data: spainBeg
      });
    }
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Intermediate'
    ) {
      this.setState({
        data: spainInter
      });
    }
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Advanced'
    ) {
      this.setState({
        data: spainAdv
      });
    }

    const latamBeg = latamSpanish(Beginner);
    const latamInter = latamSpanish(Intermediate);
    const latamAdv = latamSpanish(miniData);

    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Beginner'
    ) {
      this.setState({
        data: latamBeg
      });
    }
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Intermediate'
    ) {
      this.setState({
        data: latamInter
      });
    }
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Advanced'
    ) {
      this.setState({
        data: latamAdv
      });
    }
    this.setState({
      updated: true
    });
  };

  render() {
    console.log('Data from render', this.state.data);
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
        {/* <Link
          to={{
            pathname: '/randomFiltered',
            state: { data: this.state.data }
          }}
        >
          <h4 type="submit">Begin Verb Pratice</h4>
        </Link> */}
        {/* <RandomButton /> */}
        {this.state.updated === false ? (
          <RandomButton />
        ) : (
          <FilteredRandomButton data={this.state.data} />
        )}
        {/* // <FilteredRandomButton data={this.state.data} /> */}
      </div>
    );
  }
}

export default OptionsContainer;
