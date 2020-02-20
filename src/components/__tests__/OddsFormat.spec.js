import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OddsFormat } from '../OddsFormat';
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
  },
}

describe('Odds Format component', () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore(mockStoreFixture);
    component = render(
      <Provider store={store}>
        <Router>
            <OddsFormat {...defaultProps}/>
        </Router>
      </Provider>
    );
  });

  test('should render the wrapper', () => {
    const { getByTestId } = component;
    const container = getByTestId('c-toggle-container');
    expect(container).toBeInTheDocument();
  });

  test('should render the toggle button group', () => {
    const { getByTestId } = component;
    const container = getByTestId('c-toggle-button-group');
    expect(container).toBeInTheDocument();
  });

  test('should render the decimal button', () => {
    const { getByTestId } = component;
    const container = getByTestId('c-toggle-button-decimal');
    expect(container).toBeInTheDocument();
  });

  test('should render the fraction button', () => {
    const { getByTestId } = component;
    const container = getByTestId('c-toggle-button-fraction');
    expect(container).toBeInTheDocument();
  });
})
