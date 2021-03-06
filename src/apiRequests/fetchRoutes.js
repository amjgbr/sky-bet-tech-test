import {fetchRoutesPending, fetchRoutesSuccess, fetchRoutesError} from '../actions/routes';
import { BASE_URL } from '../constants';

function fetchRoutes() {
    return dispatch => {
        dispatch(fetchRoutesPending());
        fetch(BASE_URL)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchRoutesSuccess(res.routes));
            return res.routes;
        })
        .catch(error => {
            dispatch(fetchRoutesError(error));
        })
    }
}

export default fetchRoutes;