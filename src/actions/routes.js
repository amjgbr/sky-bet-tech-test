import { FETCH_ROUTES_PENDING, FETCH_ROUTES_SUCCESS, FETCH_ROUTES_ERROR } from '../constants';

export function fetchRoutesPending() {
    return {
        type: FETCH_ROUTES_PENDING
    }
}

export function fetchRoutesSuccess(routes) {
    return {
        type: FETCH_ROUTES_SUCCESS,
        payload: routes
    }
}

export function fetchRoutesError(error) {
    return {
        type: FETCH_ROUTES_ERROR,
        error: error
    }
}