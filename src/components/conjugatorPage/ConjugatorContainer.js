import React, { Component } from 'react';
import Text from './Text';
import Input from './Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  }
`;

class ConjugatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <StyledLink to="/options">Options</StyledLink>
        <Text data={this.props.data} />
        <Input data={this.props.data} />
      </div>
     );
  }
}
 
export default ConjugatorContainer;
