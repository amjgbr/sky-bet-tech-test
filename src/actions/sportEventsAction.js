import { FETCH_SPORT_EVENTS_PENDING, FETCH_SPORT_EVENTS_SUCCESS, FETCH_SPORT_EVENTS_ERROR } from '../constants';

export function fetchSportEventsPending() {
    return {
        type: FETCH_SPORT_EVENTS_PENDING
    }
}

export function fetchSportEventsSuccess(events) {
    return {
        type: FETCH_SPORT_EVENTS_SUCCESS,
        payload: events
    }
}

export function fetchSportEventsError(error) {
    return {
        type: FETCH_SPORT_EVENTS_ERROR,
        error: error
    }
}