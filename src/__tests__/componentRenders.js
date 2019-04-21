import React from 'react';
import { render } from 'test-utils';
import ReactDOM from 'react-dom';

import AccentButtons from '../components/Verb/AccentButtons';
import Info from '../components/Verb/Info';
import Person from '../components/Verb/Person';
// import Verb from '../components/Verb/index';
import Input from '../components/Verb/Input';

import Checkmark from '../components/Checkmark/Checkmark';
import Modal from '../components/Modal/Modal';

// Testing components render in the /Verb folder

test('AccentButtons component renders', () => {
  render(<AccentButtons />);
});

test('AccentButtons renders six buttons', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccentButtons />, div);
  expect(div.querySelectorAll('button')).toHaveLength(6);
  expect(div.querySelector('button')).toHaveAttribute('type', 'button');
});

test('Info component renders', () => {
  render(<Info />);
});

test('Person component renders', () => {
  render(<Person />);
});

// test('Verb component renders', () => {
//   render(<Verb />);
// });

test('Input component renders', () => {
  render(<Input />);
});

// Testing components render with .css imports

test('Checkmark component renders', () => {
  render(<Checkmark />);
});

test('Modal component renders', () => {
  render(<Modal />);
});
