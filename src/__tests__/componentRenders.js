import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';

import AccentButtons from '../components/Verb/AccentButtons';
import Info from '../components/Verb/Info';
// import Container from '../components/Verb/index';
// import Input from '../components/Verb/Input';
import Person from '../components/Verb/Person';
import Streak from '../components/Verb/Streak';

test('AccentButtons component renders', () => {
  render(<AccentButtons />);
});

// test('Container component renders', () => {
//   render(<Container />);
// });

test('Info component renders', () => {
  render(<Info />);
});

// test('Input component renders', () => {
//   render(<Input />);
// });

test('Person component renders', () => {
  render(<Person />);
});

test('Streak component renders', () => {
  render(<Streak />);
});
