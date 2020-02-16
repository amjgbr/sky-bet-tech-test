import { FETCH_SPORT_EVENTS_PENDING, FETCH_SPORT_EVENTS_SUCCESS, FETCH_SPORT_EVENTS_ERROR } from '../constants';

const initialState = {
    pending: false,
    data: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SPORT_EVENTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_SPORT_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case FETCH_SPORT_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case 'UPDATE_EVENT':
            console.log('data', state.data, action.payload)
            let newData = []
            if (state.data.length > 0) { 
                newData = state.data.map(x => (x.eventId === action.payload.eventId) ? {...x, ...action.payload } : x)
            } else {
                newData.push(action.payload)
            }
            console.log(newData)
            return { ...state, data: newData }
        default: 
            return state;
    }
}

export const getSportEvents = state => state.data;
export const getSportEventsPending = state => state.pending;
export const getSportEventsError = state => state.error;