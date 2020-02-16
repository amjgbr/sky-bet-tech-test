import {fetchSportEventsPending, fetchSportEventsSuccess, fetchSportEventsError} from '../actions/sportEventsAction';
import { BASE_URL } from '../constants';

function fetchSportEvents(sport, url) {
    return dispatch => {
        dispatch(fetchSportEventsPending());
        fetch(`${BASE_URL}${url}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const sportEvents = {[sport]: res.events}
            dispatch(fetchSportEventsSuccess(sportEvents));
            return res.events;
        })
        .catch(error => {
            dispatch(fetchSportEventsError(error));
        })
    }
}

export default fetchSportEvents;