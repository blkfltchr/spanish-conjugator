import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'test-utils';
import { fireEvent } from 'react-testing-library';
import VerbRegion from './VerbRegion';
import VerbTenses from './VerbTenses';
import Settings from './Settings';

test('VerbRegion renders two options', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VerbRegion />, div);
  expect(div.querySelectorAll('option')).toHaveLength(2);
});

test('VerbTenses renders seven options', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VerbTenses />, div);
  expect(div.querySelectorAll('option')).toHaveLength(7);
});

test('Button click changes button text first time', () => {
  const { getByText } = render(<Settings />);
  const button = getByText(/Change level/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent('Update level');
});
