import { 
    FETCH_SPORT_EVENTS_PENDING, 
    FETCH_SPORT_EVENTS_SUCCESS, 
    FETCH_SPORT_EVENTS_ERROR, 
    UPDATE_EVENT, 
    UPDATE_MARKETS, 
    UPDATE_OUTCOMES 
} from '../constants';
import { groupBy, lookUpSport } from '../utils'

const initialState = {
    pending: false,
    data: {},
    markets: [],
    outcomes: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SPORT_EVENTS_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_SPORT_EVENTS_SUCCESS:
            const groupedEventData = groupBy(action.payload, 'className', true);
            return {
                ...state,
                pending: false,
                data: groupedEventData
            }
        case FETCH_SPORT_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case UPDATE_EVENT:
            const eventUpdateSport = lookUpSport(state.data, action.payload.eventId);
            let newData = []
            if (state.data.length > 0) {
                newData = state.data[eventUpdateSport].map(x => (x.eventId === action.payload.eventId) ? { ...x, ...action.payload } : x)
            } else {
                newData.push(action.payload)
            }
            newData = groupBy(newData, 'className', true);
            return { ...state, data: newData }
        case UPDATE_MARKETS:
            const sport = lookUpSport(state.data, action.payload.eventId);
            let newMarkets = [...state.markets[sport] || []];
            if (state.markets[sport]?.length > 0 && state.markets[sport]?.find((event => event.marketId === action.payload.marketId && event.eventId === action.payload.eventId))) {
                newMarkets = state.markets[sport].map(x => (x.marketId === action.payload.marketId && x.eventId === action.payload.eventId) ? { ...x, ...action.payload } : x);
            } else {
                newMarkets.push(action.payload)
            }
            const sportMarkets = { [sport]: newMarkets.filter(market => market?.status?.displayable) }
            return { ...state, markets: sportMarkets }
        case UPDATE_OUTCOMES:
            const outComeSport = lookUpSport(state.data, action.payload.eventId);
            let newOutcomes = [...state.outcomes[outComeSport] || []];
            if (state.outcomes[outComeSport]?.length > 0 && state.outcomes[outComeSport]?.find((event => event.marketId === action.payload.marketId && event.eventId === action.payload.eventId && event.outcomeId === action.payload.outcomeId))) {
                newOutcomes = state.outcomes[outComeSport].map(x => (x.marketId === action.payload.marketId && x.eventId === action.payload.eventId && x.outcomeId === action.payload.outcomeId) ? { ...x, ...action.payload } : x);
            } else {
                newOutcomes.push(action.payload)
            }
            const sortedOutcomes = newOutcomes
                .sort((a, b) => a.displayOrder - b.displayOrder);
            const sportOutcomes = { [outComeSport]: sortedOutcomes.filter(outcome => outcome?.status?.displayable) }
            return { ...state, outcomes: sportOutcomes }
        default:
            return state;
    }
}