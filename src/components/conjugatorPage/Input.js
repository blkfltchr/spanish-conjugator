import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            answer: ''
         }
    }

    randomVerb = this.props.data[Math.floor(Math.random() * this.props.data.length)];
    randomPerson = Object.entries(this.randomVerb)[ Math.floor(Math.random() * 7) + 7 ]

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.randomPerson[1] === this.state.value) {
            alert("Correct!")
        } this.setState({answer: this.randomPerson[1]}) 
    }
    
    render() { 
        const { infinitive, infinitive_english, tense_english } = this.randomVerb
        return ( 
            <div>
                <p><b>Verb: </b>{infinitive}</p>
                <p><b>Translation: </b>{infinitive_english}</p>
                <p><b>Tense: </b>{tense_english}</p>
                <p><b>Person:</b>
                    { this.randomPerson[0] === 'form_1s' &&
                        <span> Singular, 1st person</span>
                    }
                    { this.randomPerson[0] === 'form_2s' &&
                        <span> Singular, 2nd person</span>
                    }
                    { this.randomPerson[0] === 'form_3s' &&
                        <span> Singular, 3rd person</span>
                    }
                    { this.randomPerson[0] === 'form_1p' &&
                        <span> Plural, 1st person</span>
                    }
                    { this.randomPerson[0] === 'form_2p' &&
                        <span> Plural, 2nd person</span>
                    }
                    { this.randomPerson[0] === 'form_3p' &&
                        <span> Plural, 3rd person</span>
                    }
                    { this.randomPerson[0] === 'gerund' &&
                        <span> Gerund</span>
                    }
                </p>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Check</button>
                { this.state.answer &&
                 <p>False, the correct answer is <i>{this.state.answer}</i>.</p>
                }
                <p><button onClick={() => window.location.reload()}>Next verb</button></p>
            </div>
         );
    }
}
 
export default Input;