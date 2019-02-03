import React, { Component } from 'react';
import '../../app.css';

const initialState = {
  value: '',
  helperText: null,
  correct: false,
  randomVerb: {},
  randomPerson: []
  // data: latamSpanish(miniData)
};

// beginner = () => {
//     this.state.data.filter(
//         verb =>
//             (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
//             (verb.tense_english === 'Future' && verb.mood_english === 'Indicative')
//     );
// }

class BeginnerRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      count: 0,
      bestStreak: 0
    };
  }

  componentDidMount() {
    this.setState({ hint: false });
    this.randomize();
  }

  randomize = () => {
    const randomVerb = this.props.data[
      Math.floor(Math.random() * this.props.data.length)
    ];
    const randomPerson = Object.entries(randomVerb)[
      Math.floor(Math.random() * 5) + 7
    ];
    this.setState({
      randomVerb,
      randomPerson
    });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.randomPerson[1] === this.state.value) {
      this.addCounter();
      alert('Correct!');
      this.handleRefresh();
      this.setState({ correct: true });
      this.addStreak();
    } else if (this.state.randomPerson[1] !== this.state.value) {
      this.setState({
        helperText: `False, the correct answer is ${
          this.state.randomPerson[1]
        }.`
      });
      this.resetCounter();
    } else {
      console.log('hmmm');
    }
  };

  handleRefresh = () => {
    this.setState({ ...initialState });
    this.randomize();
  };

  handleHint = event => {
    const answer = this.state.randomPerson[1];
    event.preventDefault();
    this.setState({
      hint: true,
      helperText: `The answer ends with -${answer.substring(
        answer.length - 3,
        answer.length
      )}.`
    });
  };

  addStreak = () => {
    if (this.state.count >= this.state.bestStreak) {
      this.setState(prevState => {
        return {
          bestStreak: prevState.bestStreak + 1
        };
      });
    }
  };

  addCounter = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    console.log(this.state.randomPerson[1]);
    if (!this.state.randomVerb) {
      return <h1>Loading....</h1>;
    } else {
      const {
        count,
        bestStreak,
        randomVerb,
        randomPerson,
        helperText,
        value
      } = this.state;
      const {
        infinitive,
        infinitive_english,
        tense_english,
        mood_english
      } = randomVerb;
      return (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '22px',
              padding: '0 0 16px 0',
              marginTop: '0'
            }}
          >
            <p>
              <b>Verb: </b>
              {infinitive}
            </p>
            <p>
              <b>Streak: </b>
              {count}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '22px',
              padding: '0 0 16px 0',
              marginTop: '0'
            }}
          >
            <p>
              <b>Translation: </b>
              {infinitive_english}
            </p>
            <p>
              <b>Best streak: </b>
              {bestStreak}
            </p>
          </div>
          <p>
            <b>Tense: </b>
            {tense_english} {mood_english}
          </p>
          <p>
            <b>Pronoun:</b>
            {randomPerson[0] === 'form_1s' && (
              <span> Yo (Singular, 1st person)</span>
            )}
            {randomPerson[0] === 'form_2s' && (
              <span> Tú (Singular, 2nd person)</span>
            )}
            {randomPerson[0] === 'form_3s' && (
              <span> Él/Ella/Usted (Singular, 3rd person)</span>
            )}
            {randomPerson[0] === 'form_1p' && (
              <span> Nosotros (Plural, 1st person)</span>
            )}
            {randomPerson[0] === 'form_3p' && (
              <span> Ellos/Ellas/Ustedes (Plural, 3rd person)</span>
            )}
          </p>
          <label>
            <input
              type="text"
              value={value}
              onChange={this.handleChange}
              className="input"
            />
            <span style={{ fontSize: '12px' }}>En Español</span>
          </label>
          {helperText && <p>{helperText}</p>}
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <button className="button" onClick={this.handleSubmit}>
              Check
            </button>
            <button className="button" onClick={this.handleHint}>
              Hint
            </button>
            <button className="button" onClick={this.handleRefresh}>
              Next verb
            </button>
          </div>
        </div>
      );
    }
  }
}

export default BeginnerRandom;
