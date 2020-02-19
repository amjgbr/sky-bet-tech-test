import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('App connected redux component', () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('should render the header', () => {
    const { getByText } = component;
    const headerText = getByText(/Andy Jones - SkyBet Tech Test/i);
    expect(headerText).toBeInTheDocument();
  });
})
