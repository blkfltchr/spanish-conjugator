import React, { Component } from 'react';
import OptionsButton from '../home/OptionsButton';
import Random from './Random';

class ConjugatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h3>Based on the verb, tense, and person...<br /> submit your answer below.</h3>
        <Random data={this.props.data} />
        <OptionsButton />
      </div>
     );
  }
}
 
export default ConjugatorContainer;
