import React from 'react';
import { render } from 'test-utils';

import Checkmark from './Checkmark';

test('Checkmark component renders', () => {
  render(<Checkmark />);
});

test("Checkmark doesn't render on incorrect", () => {
  const { container } = render(<Checkmark />);
  expect(container.firstChild).toHaveClass('checkmark-hide');
});

test('Checkmark renders on correct', () => {
  const { container } = render(<Checkmark correct />);
  expect(container.firstChild).toHaveClass('checkmark-display');
});
