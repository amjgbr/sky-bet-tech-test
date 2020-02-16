import * as actions from '../actions/websocket';
import { fetchSportEventsSuccess } from '../actions/sportEventsAction';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = store => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    const payload = JSON.parse(event.data);
    console.log('payload', payload)
    switch (payload.type) {
      case "INIT":
        store.dispatch(actions.connectionInitialised(payload));
        break;
      case "CURRENT_SUBSCRIPTIONS":
        // store.dispatch(updateGame(payload.game));
        break;
      case "LIVE_EVENTS_DATA":
        store.dispatch(fetchSportEventsSuccess(payload.data));
        break;
      case "EVENT_DATA":
        store.dispatch(actions.updateEvent(payload.data));
        break;
      case "MARKET_DATA":
        store.dispatch(actions.updateEvent(payload.data));
        break;
      case "OUTCOME_DATA":
        store.dispatch(actions.updateEvent(payload.data));
        break;
      case "PRICE_CHANGE":
        store.dispatch(actions.updateEvent(payload.data));
        break;
      case "MARKET_STATUS":
        store.dispatch(actions.updateEvent(payload.data));
        break;
      case "OUTCOME_STATUS":
        store.dispatch(actions.updateEvent(payload.data));
        break;
      case "ERROR":
        console.log(payload);
        // store.dispatch(updateGamePlayer(payload.current_player));
        break;
      default:
        console.log('payload', payload);
        break;
    }
  };

  return store => next => (action) => {
    switch (action.type) {
      case 'WS_CONNECT':
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
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case 'FETCH_LIVE_EVENTS':
        socket.send(JSON.stringify({type: "getLiveEvents", primaryMarkets: action.includePrimary}));
        break;
      case 'FETCH_EVENT':
          socket.send(JSON.stringify({ type: "getEvent", id: action.eventId }));
          socket.send(JSON.stringify({type: "subscribe", keys: [`e.${action.eventId}`]}));
          break;
      case 'FETCH_MARKETS':
        socket.send(JSON.stringify({ type: "getMarket", id: parseInt(action.marketId, 10) }));
        socket.send(JSON.stringify({type: "subscribe", keys: [`m.${action.marketId}`]}));
        // socket.send(JSON.stringify({type: "subscribe", keys: ['o.*']}));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();