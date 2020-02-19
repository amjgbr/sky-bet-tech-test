import reducer from '../routes';
import { fetchRoutesSuccess, fetchRoutesError, fetchRoutesPending } from '../../actions/routes';
import expect from 'expect';
import { mockStoreFixture, mockStoreError, mockStorePending } from '../../fixtures';

describe('routes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      error: null,
      pending: false,
    });
  });

  it('should return correct data if successful', () => {
    const payload = {
        football: {
            live: "/football/live"
        },
        sportsbook: {
            events: '/football/events',
            markets: '/football/markets',
            outcomes: '/football/outcomes'
        }
    }
    const setRoutes = fetchRoutesSuccess(payload);
    expect(reducer({}, setRoutes)).toEqual(mockStoreFixture.routes);
  });

  it('should return error if no data', () => {
    const payload = {
      message: "Issue with data"
    }
    const setRoutes = fetchRoutesError(payload);
    expect(reducer({}, setRoutes)).toEqual(mockStoreError.routes);
  });

  it('should return pending', () => {
    const setRoutes = fetchRoutesPending();
    expect(reducer({}, setRoutes)).toEqual(mockStorePending.routes);
  });

});