import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Games from './Games';
import { MemoryRouter } from 'react-router-dom';

describe('Login component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter> <Games />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter> <Games  />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})