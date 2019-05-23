import React from 'react';
import { render } from 'test-utils';
import Header from './Header';

test('Button click changes button text first time', () => {
  const { getByText } = render(<Header />);
  const SpanishConjugator = getByText(/Spanish Conjugator/i);
  expect(SpanishConjugator).toBeInTheDocument();
});
