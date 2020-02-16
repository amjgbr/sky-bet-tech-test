export const wsConnect = host => ({ type: 'WS_CONNECT', host });
export const wsConnecting = host => ({ type: 'WS_CONNECTING', host });
export const wsConnected = host => ({ type: 'WS_CONNECTED', host });
export const wsDisconnect = host => ({ type: 'WS_DISCONNECT', host });
export const wsDisconnected = host => ({ type: 'WS_DISCONNECTED', host });

export const wsGetLiveEvents = (includePrimary) => ({ type: 'FETCH_LIVE_EVENTS', includePrimary });
export const wsGetEvent = (eventId) => ({ type: 'FETCH_EVENT', eventId });
export const wsGetMarkets = markets => ({ type: 'FETCH_MARKETS', markets });

export const updateEvent = payload => ({ type: 'UPDATE_EVENT', payload });

export const connectionInitialised = (payload) => ({ type: 'INIT', payload }) 

