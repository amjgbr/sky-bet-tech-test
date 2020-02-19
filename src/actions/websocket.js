import { 
    WS_CONNECT,
    WS_CONNECTING,
    WS_CONNECTED,
    WS_DISCONNECT,
    WS_DISCONNECTED,
    INIT,
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
    UNSUBSCRIBE_OUTCOME
} from '../constants';

export const wsConnect = host => ({ type: WS_CONNECT, host });
export const wsConnecting = host => ({ type: WS_CONNECTING, host });
export const wsConnected = host => ({ type: WS_CONNECTED, host });
export const wsDisconnect = host => ({ type: WS_DISCONNECT, host });
export const wsDisconnected = host => ({ type: WS_DISCONNECTED, host });

export const wsGetLiveEvents = (includePrimary) => ({ type: FETCH_LIVE_EVENTS, includePrimary });
export const wsUnsubscribe = () => ({ type: UNSUBSCRIBE });


export const wsGetEvent = eventId => ({ type: FETCH_EVENT, eventId });
export const wsGetMarket = marketId => ({ type: FETCH_MARKET, marketId });
export const wsGetOutcome = outcomeId => ({ type: FETCH_OUTCOME, outcomeId });

export const wsSubscribeEvent = eventId => ({ type: SUBSCRIBE_EVENT, eventId });
export const wsSubscribeMarket = marketId => ({ type: SUBSCRIBE_MARKET, marketId });
export const wsSubscribeOutcome = outcomeId => ({ type: SUBSCRIBE_OUTCOME, outcomeId });

export const wsUnsubscribeEvent = eventId => ({ type: UNSUBSCRIBE_EVENT, eventId });
export const wsUnsubscribeMarket = marketId => ({ type: UNSUBSCRIBE_MARKET, marketId });
export const wsUnsubscribeOutcome = outcomeId => ({ type: UNSUBSCRIBE_OUTCOME, outcomeId });

export const connectionInitialised = (payload) => ({ type: INIT , payload }) 

