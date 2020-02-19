import { FETCH_ROUTES_PENDING, FETCH_ROUTES_SUCCESS, FETCH_ROUTES_ERROR } from '../constants';

const initialState = {
    pending: false,
    data: {},
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROUTES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_ROUTES_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case FETCH_ROUTES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}