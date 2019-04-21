import React from 'react';
import ReactDOM from 'react-dom';

import Input from '../components/Verb/Input';

test('Show example div renders as a button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  expect(div.querySelector('.hover-text')).toHaveAttribute('type', 'button');
});
