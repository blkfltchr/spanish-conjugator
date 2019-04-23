import React from 'react';
import { render } from 'test-utils';

import AccentButtons from '../AccentButtons';
import Info from '../Info';
import Person from '../Person';

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
