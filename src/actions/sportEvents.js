import { 
    FETCH_SPORT_EVENTS_PENDING, 
    FETCH_SPORT_EVENTS_SUCCESS, 
    FETCH_SPORT_EVENTS_ERROR,
    UPDATE_EVENT,
    UPDATE_MARKETS,
    UPDATE_OUTCOMES
} from '../constants';


export const fetchSportEventsPending = payload => ({ type: FETCH_SPORT_EVENTS_PENDING });
export const fetchSportEventsSuccess = events => ({ type: FETCH_SPORT_EVENTS_SUCCESS, payload: events });
export const fetchSportEventsError = error => ({ type: FETCH_SPORT_EVENTS_ERROR, error: error });

export const updateEvent = payload => ({ type: UPDATE_EVENT, payload });
export const updateMarkets  = payload => ({ type: UPDATE_MARKETS, payload });
export const updateOutcomes = payload => ({ type: UPDATE_OUTCOMES, payload });