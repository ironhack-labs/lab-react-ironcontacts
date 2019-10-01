import React from 'react';
import ReacdivOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReacdivOM.render(<App />, div);
  ReacdivOM.unmountComponentAtNode(div);
});
