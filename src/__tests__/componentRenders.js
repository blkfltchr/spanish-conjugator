import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';

import AccentButtons from '../components/Verb/AccentButtons';
import Info from '../components/Verb/Info';
import Person from '../components/Verb/Person';
import Streak from '../components/Verb/Streak';
// import Verb from '../components/Verb/index';
// import Input from '../components/Verb/Input';

import Checkmark from '../components/Checkmark/Checkmark';
import Modal from '../components/Modal/Modal';

// Testing components render in the /Verb folder

test('AccentButtons component renders', () => {
  render(<AccentButtons />);
});

test('Info component renders', () => {
  render(<Info />);
});

test('Person component renders', () => {
  render(<Person />);
});

test('Streak component renders', () => {
  render(<Streak />);
});

// Testing components render with .css imports

test('Checkmark component renders', () => {
  render(<Checkmark />);
});

test('Modal component renders', () => {
  render(<Modal />);
});

// To be tested: Components with props

// test('Verb component renders', () => {
//   render(<Verb />);
// });

// test('Input component renders', () => {
//   render(<Input />);
// });
