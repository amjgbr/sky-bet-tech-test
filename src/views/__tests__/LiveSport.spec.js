import React from 'react';
import { render } from '@testing-library/react';
import { LiveSport } from '../LiveSport';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mockStoreFixture } from '../../fixtures';

const mockStore = configureStore([]);

const defaultProps = {
  match: {
    params: {
      sport: 'football',
      eventId: 21249939
    }
  }
}

describe('Event Detail view', () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore(mockStoreFixture);
    component = render(
      <Provider store={store}>
        <Router>
            <LiveSport {...defaultProps}/>
        </Router>
      </Provider>
    );
  });

  test.skip('should render the grid wrapper', () => {
    const { getByTestId } = component;
    const grid = getByTestId('c-live-sport-grid');
    expect(grid).toBeInTheDocument();
  });
})
