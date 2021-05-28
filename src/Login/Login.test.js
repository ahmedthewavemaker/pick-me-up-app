import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter> <Login />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter> <Login  />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})