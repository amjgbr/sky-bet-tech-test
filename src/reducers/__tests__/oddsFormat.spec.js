import reducer from '../oddsFormat';
import { setOddsFormat } from '../../actions/oddsFormat';
import expect from 'expect';

import {
    DECIMAL,
    FRACTION
} from '../../constants';

describe('oddsFormat reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, FRACTION)).toEqual(FRACTION);
  });

  it('should change fraction to decimal', () => {
    const payload = DECIMAL;
    const setOddsAction = setOddsFormat(payload);
    expect(reducer('', setOddsAction)).toEqual(DECIMAL);
  });

});