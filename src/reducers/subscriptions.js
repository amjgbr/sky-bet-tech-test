import {
  STORE_SUBSCRIPTIONS
} from '../constants';

const websocketInitialState = {
  data: []
};

export default (state = { ...websocketInitialState }, action) => {
  switch (action.type) {
    case STORE_SUBSCRIPTIONS:
      return {
        ...state,
        data: [...state.data, action.payload[0]]
      };
    default:
      return state;
  }
};