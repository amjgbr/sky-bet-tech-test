import reducer from '../subscriptions';
import * as actions from '../../actions/subscriptions';
import expect from 'expect';
import { mockStoreFixture } from '../../fixtures/';

describe('subscriptions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({data: []});
  });

  it('should store subscriptions', () => {
    const payload = ['e.123458']
    const store = actions.storeSubscriptions(payload);
    expect(reducer({data: ['e.123456', 'e.123457']}, store)).toEqual(mockStoreFixture.subscriptions);
  });

});