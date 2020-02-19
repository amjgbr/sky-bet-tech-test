import { FRACTION } from '../constants';
const initialState = FRACTION;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOGGLE':
      return action.payload;
    default:
      return state;
  }
};