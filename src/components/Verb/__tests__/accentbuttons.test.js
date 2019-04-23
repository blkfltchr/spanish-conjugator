import React from 'react';
import ReactDOM from 'react-dom';
import AccentButtons from '../AccentButtons';

test('AccentButtons renders six buttons', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccentButtons />, div);
  expect(div.querySelectorAll('button')).toHaveLength(6);
  expect(div.querySelector('button')).toHaveAttribute('type', 'button');
});
