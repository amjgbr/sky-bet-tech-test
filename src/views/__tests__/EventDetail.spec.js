import React from 'react';
import { render } from '@testing-library/react';
import { EventDetail } from '../EventDetail';
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
            <EventDetail {...defaultProps}/>
        </Router>
      </Provider>
    );
  });

  test('should render the grid wrapper', () => {
    const { getByTestId } = component;
    const grid = getByTestId('c-event-detail-grid');
    expect(grid).toBeInTheDocument();
  });

  test('should render correct home team name', () => {
    const { getByTestId } = component;
    const homeTeamName = getByTestId('c-event-home-team-name');
    expect(homeTeamName).toBeInTheDocument();
    // console.log(component)
  });
})
