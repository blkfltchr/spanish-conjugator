import React, { Component } from 'react';
// import React from 'react';

// const LoadingSpinner = props => {
//   console.log('PROPS', props.location.state.data);
//   return (
//     <div>
//       {props.history.push({
//         pathname: '/randomFiltered',
//         state: { data: props.location.state.data }
//       })}
//     </div>
//   );
// };

class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state.data
    };
  }
  componentDidMount = () => {
    console.log('STATE', this.state.data);
    if (this.state.data) {
      this.props.history.push({
        pathname: '/randomFiltered',
        state: { data: this.state.data }
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Heyyy</h1>
      </div>
    );
  }
}

export default LoadingSpinner;
