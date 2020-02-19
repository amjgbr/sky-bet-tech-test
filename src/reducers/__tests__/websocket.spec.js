import reducer from '../websocket';
import * as actions from '../../actions/websocket';
import expect from 'expect';
import { connection } from '../../fixtures/getWebsocketMock';

describe('websocket reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle INIT', () => {
    const payload = {
      type: 'CONNECTED',
      data: {
        key: 'test-data'
      }
    }
    const startAction = actions.connectionInitialised(payload);
    expect(reducer({}, startAction)).toEqual(connection);
  });

});