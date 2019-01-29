import React, { Component } from 'react';
import '../../../app.css'

class FilteredBegRandom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            answer: false,
            hint: false,
            helperText: '',
            correct: false
         }
    }
    
    randomVerb = this.props.data[ Math.floor(Math.random() * this.props.data.length) ];
    randomPerson = Object.entries(this.randomVerb)[ Math.floor(Math.random() * 2) + 7 ]

    handleChange = (event) => {
        this.setState({ value: event.target.value });
      }

    handleSubmit = () => {
        if (this.randomPerson[ 1 ] === this.state.value) {
            alert('Correct!');
            this.setState({ correct: true })
            this.handleRefresh()
        } this.setState({ answer: true, helperText: `False, the correct answer is ${ this.randomPerson[ 1 ] }.` }) 
    }

    handleRefresh = () => {
        window.location.reload()
    }

    handleHint = (event) => {
        event.preventDefault();
        this.setState({ hint: true, helperText: `The answer starts with ${ this.randomPerson[ 1 ].substring(0, 3) }...` }) 
    }
    
    render() { 
        let infinitive = '';
        let infinitive_english = '';
        let tense_english = '';
        for (let i = 0; i < this.randomVerb.length; i++) {
            if (this.randomVerb[i].infinitive !== undefined) {
                infinitive = this.randomVerb[i].infinitive;
            } else if (this.randomVerb[i].infinitive_english !== undefined) {
                infinitive_english = this.randomVerb[i].infinitive_english
            } else if (this.randomVerb[i].tense_english !== undefined) {
                tense_english = this.randomVerb[i].tense_english
            }
        }
        console.log('Random person =', Object.values(this.randomPerson))
        const randomPersonValues = Object.values(this.randomPerson)[1];
        const pronoun = Object.keys(randomPersonValues)[0]
        return ( 
            <div>
                <p><b>Verb: </b>{infinitive}</p>
                <p><b>Translation: </b>{infinitive_english}</p>
                <p><b>Tense: </b>{tense_english}</p>
                <p><b>Pronoun:</b>
                    { pronoun === 'form_1s' &&
                        <span> Yo (Singular, 1st person)</span>
                    }
                    { pronoun === 'form_2s' &&
                        <span> Tu (Singular, 2nd person)</span>
                    }
                </p>
                <label>
                    <input 
                        type="text"
                        value={ this.state.value } 
                        onChange={ this.handleChange }
                        className='input'
                    />
                    <span style={ { fontSize: '12px' } }>En Español</span>
                </label>
                { ((this.state.hint || this.state.answer) && !this.state.correct ) &&
                    <p>{this.state.helperText}</p>
                }
                <div style={ { marginTop: '1rem', display: 'flex', justifyContent: 'space-between' } }>
                    <button className='button' onClick={ this.handleSubmit }>Check</button>
                    <button className='button' onClick={ this.handleHint }>Hint</button>
                    <button className='button' onClick={ this.handleRefresh }>Next verb</button>
                </div>
            </div>
         );
    }
}
 
export default FilteredBegRandom;
