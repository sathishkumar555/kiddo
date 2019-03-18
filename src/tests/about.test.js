import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../components/About';

test('should render About correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
  console.log(renderer.getRenderOutput());
});

