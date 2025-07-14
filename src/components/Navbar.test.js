jest.config.js
{
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/setupTests.js"]
}

src/components/Navbar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  const { getByText } = render(<Navbar />);
  const linkElement = getByText(/navbar/i);
  expect(linkElement).toBeInTheDocument();
});

package.json
{
  "scripts": {
    "test": "jest"
  }
}