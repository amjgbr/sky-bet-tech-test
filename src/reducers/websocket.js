import {
    WS_CONNECT,
    INIT
} from '../constants';

const websocketInitialState = {};

export default (state = { ...websocketInitialState }, action) => {
    switch (action.type) {
        case WS_CONNECT:
            return { ...state, host: action.host };
        case INIT:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};