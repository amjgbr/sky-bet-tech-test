import * as websocketActions from '../actions/websocket';
import * as sportsEventActions from '../actions/sportEvents';
import { storeSubscriptions } from '../actions/subscriptions';

import {
  INIT,
  WS_CONNECT,
  WS_DISCONNECT,
  FETCH_LIVE_EVENTS,
  UNSUBSCRIBE,
  FETCH_EVENT,
  FETCH_MARKET,
  FETCH_OUTCOME,
  SUBSCRIBE_EVENT,
  SUBSCRIBE_MARKET,
  SUBSCRIBE_OUTCOME,
  UNSUBSCRIBE_EVENT,
  UNSUBSCRIBE_MARKET,
  UNSUBSCRIBE_OUTCOME,
  CURRENT_SUBSCRIPTIONS,
  LIVE_EVENTS_DATA,
  EVENT_DATA,
  MARKET_DATA,
  OUTCOME_DATA,
  PRICE_CHANGE,
  MARKET_STATUS,
  OUTCOME_STATUS,
  ERROR,
  WS_SUBSCRIBE,
  WS_UNSUBSCRIBE,
  WS_GET_LIVE_EVENTS,
  WS_GET_EVENT,
  WS_GET_MARKET,
  WS_GET_OUTCOME,
} from '../constants';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    store.dispatch(websocketActions.wsConnected(event.target.url));
  };

  const onClose = store => () => {
    store.dispatch(websocketActions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    const payload = JSON.parse(event.data);
    switch (payload.type) {
      case INIT:
        store.dispatch(websocketActions.connectionInitialised(payload));
        break;
      case CURRENT_SUBSCRIPTIONS:
        store.dispatch(storeSubscriptions(payload.data));
        break;
      case LIVE_EVENTS_DATA:
        store.dispatch(sportsEventActions.fetchSportEventsSuccess(payload.data));
        break;
      case EVENT_DATA:
        store.dispatch(sportsEventActions.updateEvent(payload.data));
        break;
      case MARKET_DATA:
        store.dispatch(sportsEventActions.updateMarkets(payload.data));
        break;
      case OUTCOME_DATA:
        store.dispatch(sportsEventActions.updateOutcomes(payload.data));
        break;
      case PRICE_CHANGE:
        store.dispatch(sportsEventActions.updateOutcomes(payload.data));
        break;
      case MARKET_STATUS:
        store.dispatch(sportsEventActions.updateMarkets(payload.data));
        break;
      case OUTCOME_STATUS:
        store.dispatch(sportsEventActions.updateOutcomes(payload.data));
        break;
      case ERROR:
        // store.dispatch(updateGamePlayer(payload.current_player));
        break;
      default:
        break;
    }
  };

  return store => next => (action) => {
    const subscriptions = store.getState().subscriptions.data
    switch (action.type) {
      case WS_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case WS_DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case FETCH_LIVE_EVENTS:
        socket.send(JSON.stringify({ type: WS_GET_LIVE_EVENTS, primaryMarkets: action.includePrimary }));
        break;
      case FETCH_EVENT:
        socket.send(JSON.stringify({ type: WS_GET_EVENT, id: action.eventId }));
        break;
      case FETCH_MARKET:
        socket.send(JSON.stringify({ type: WS_GET_MARKET, id: action.marketId }))
        break;
      case FETCH_OUTCOME:
        socket.send(JSON.stringify({ type: WS_GET_OUTCOME, id: action.outcomeId }));
        break;
      case SUBSCRIBE_EVENT:
        subscriptions.push(`e.${action.eventId}`)
        socket.send(JSON.stringify({ type: WS_SUBSCRIBE, keys: subscriptions }));
        break;
      case SUBSCRIBE_MARKET:
        subscriptions.push(`m.${action.marketId}`)
        socket.send(JSON.stringify({ type: WS_SUBSCRIBE, keys: subscriptions }));
        break;
      case SUBSCRIBE_OUTCOME:
        subscriptions.push(`o.${action.outcomeId}`)
        socket.send(JSON.stringify({ type: WS_SUBSCRIBE, keys: subscriptions }));
        break;
      case UNSUBSCRIBE:
        socket.send(JSON.stringify({ type: WS_UNSUBSCRIBE }));
        break;
      case UNSUBSCRIBE_EVENT:
        socket.send(JSON.stringify({ type: WS_UNSUBSCRIBE, keys: [`e.${action.eventId}`] }));
        break;
      case UNSUBSCRIBE_MARKET:
        socket.send(JSON.stringify({ type: WS_UNSUBSCRIBE, keys: [`m.${action.marketId}`] }));
        break;
      case UNSUBSCRIBE_OUTCOME:
        socket.send(JSON.stringify({ type: WS_UNSUBSCRIBE, keys: [`o.${action.outcomeId}`] }));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();