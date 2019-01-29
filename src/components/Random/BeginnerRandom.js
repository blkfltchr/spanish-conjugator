import React, { Component } from 'react';
import '../../app.css'

const initialState = {
    value: '',
    hint: false,
    helperText: '',
    correct: false,
    randomVerb: {},
    randomPerson: []
}

class BeginnerRandom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...initialState
        }
    }

    componentDidMount() {
        this.setState({hint: false});
        this.randomize()
    }


    randomize = () => {
        const randomVerb = this.props.data[Math.floor(Math.random() * this.props.data.length)];
        const randomPerson = Object.entries(randomVerb)[ Math.floor(Math.random() * 2) + 7 ];
        this.setState({
            randomVerb, randomPerson
        })
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    handleSubmit = () => {
        // event.preventDefault();
        if (this.state.randomPerson[1] === this.state.value) {
            alert("Correct!");
            this.handleRefresh()
            this.setState({correct: true})
        } this.setState({hint: true, helperText: `False, the correct answer is ${this.state.randomPerson[1]}.`}) 
    }

    handleRefresh = () => {
        this.setState({...initialState})
        this.randomize();
    }

    handleHint = (event) => {
        event.preventDefault();
        this.setState({hint: true, helperText: `The answer starts with ${this.state.randomPerson[1].substring(0, 3)}...`}) 
    }
    
    render() { 
        console.log(this.state)
        if (!this.state.randomVerb) {
            return (
                <h1>Loading....</h1>
            )
        } else { 
            const { randomVerb, randomPerson, hint, correct, helperText, value } = this.state
            const { infinitive, infinitive_english, tense_english } = randomVerb
            return ( 
                <div>
                    <p><b>Verb: </b>{infinitive}</p>
                    <p><b>Translation: </b>{infinitive_english}</p>
                    <p><b>Tense: </b>{tense_english}</p>
                    <p><b>Pronoun:</b>
                        { randomPerson[0] === 'form_1s' &&
                            <span> Yo (Singular, 1st person)</span>
                        }
                        { randomPerson[0] === 'form_2s' &&
                            <span> Tu (Singular, 2nd person)</span>
                        }
                    </p>
                    <label>
                        <input 
                            type="text"
                            value={value} 
                            onChange={this.handleChange}
                            className='input'
                        />
                        <span style={{fontSize: '12px'}}>En Español</span>
                    </label>
                    { ( hint && !correct ) &&
                        <p>{helperText}</p>
                    }
                    <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                        <button className='button' onClick={this.handleSubmit}>Check</button>
                        <button className='button' onClick={this.handleHint}>Hint</button>
                        <button className='button' onClick={this.handleRefresh}>Next verb</button>
                    </div>
                </div>
             );
        }
    }
}
 
export default BeginnerRandom;
