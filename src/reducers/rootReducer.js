import { combineReducers } from 'redux';
import routes from './routes';
import sportEvents from './sportEvents';
import websocket from './websocket';
import subscriptions from './subscriptions';
import oddsFormat from './oddsFormat'

export default combineReducers({
    routes,
    sportEvents,
    websocket,
    subscriptions,
    oddsFormat
});