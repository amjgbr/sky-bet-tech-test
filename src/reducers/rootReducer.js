import { combineReducers } from 'redux';
import routes from './routes';
import sportEvents from './sportEvents';
import websocket from './websocket'

export default combineReducers({
    routes,
    sportEvents,
    websocket
});