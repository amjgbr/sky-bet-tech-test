import React from 'react';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsMmaIcon from '@material-ui/icons/SportsMma';

export const BASE_URL = 'http://localhost:8888'

export const FETCH_ROUTES_PENDING = 'FETCH_ROUTES_PENDING';
export const FETCH_ROUTES_SUCCESS = 'FETCH_ROUTES_SUCCESS';
export const FETCH_ROUTES_ERROR = 'FETCH_ROUTES_ERROR';

export const FETCH_SPORT_EVENTS_PENDING = 'FETCH_SPORT_EVENTS_PENDING';
export const FETCH_SPORT_EVENTS_SUCCESS = 'FETCH_SPORT_EVENTS_SUCCESS';
export const FETCH_SPORT_EVENTS_ERROR = 'FETCH_SPORT_EVENTS_ERROR';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_MARKETS = 'UPDATE_MARKETS';
export const UPDATE_OUTCOMES = 'UPDATE_OUTCOMES';

export const INIT = 'INIT';
export const WS_CONNECT = 'WS_CONNECT';
export const WS_CONNECTING = 'WS_CONNECTING';
export const WS_CONNECTED = 'WS_CONNECTED';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const WS_DISCONNECTED = 'WS_DISCONNECTED';

export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const FETCH_LIVE_EVENTS = 'FETCH_LIVE_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';
export const FETCH_MARKET = 'FETCH_MARKET';
export const FETCH_OUTCOME = 'FETCH_OUTCOME';
export const SUBSCRIBE_EVENT = 'SUBSCRIBE_EVENT';
export const SUBSCRIBE_MARKET = 'SUBSCRIBE_MARKET';
export const SUBSCRIBE_OUTCOME = 'SUBSCRIBE_OUTCOME';
export const UNSUBSCRIBE_EVENT = 'UNSUBSCRIBE_EVENT';
export const UNSUBSCRIBE_MARKET = 'UNSUBSCRIBE_MARKET';
export const UNSUBSCRIBE_OUTCOME = 'UNSUBSCRIBE_OUTCOME';
export const STORE_SUBSCRIPTIONS = 'STORE_SUBSCRIPTIONS';
export const CURRENT_SUBSCRIPTIONS = 'CURRENT_SUBSCRIPTIONS';

export const ERROR = 'ERROR';
export const EVENT_DATA = 'EVENT_DATA';
export const LIVE_EVENTS_DATA = 'LIVE_EVENTS_DATA';
export const MARKET_DATA = 'MARKET_DATA';
export const MARKET_STATUS = 'MARKET_STATUS';
export const OUTCOME_DATA = 'OUTCOME_DATA';
export const OUTCOME_STATUS = 'OUTCOME_STATUS';
export const PRICE_CHANGE = 'PRICE_CHANGE';

export const WS_SUBSCRIBE = 'subscribe';
export const WS_UNSUBSCRIBE = 'unsubscribe';
export const WS_GET_LIVE_EVENTS = 'getLiveEvents';
export const WS_GET_EVENT = 'getEvent';
export const WS_GET_MARKET = 'getMarket';
export const WS_GET_OUTCOME = 'getOutcome';

export const FRACTION = 'fraction';
export const DECIMAL = 'decimal';

export const SportsList = {
    football: {
        heading: "Football",
        subHeading: "View current live games",
        url: "/football",
        icon: <SportsSoccerIcon />,
        colour: 'green'
    },
    rugby: {
        heading: "Rugby",
        subHeading: "6 Nations Super Boost",
        url: "/rugby",
        icon: <SportsRugbyIcon />,
        colour: 'yellow'
    },
    golf: {
        heading: "Golf",
        subHeading: "Live PGA Tour events",
        url: "/golf",
        icon: <SportsGolfIcon />,
        colour: 'blue'
    },
    motorSports: {
        heading: "Motorsports",
        subHeading: "Formula-E final showdown event",
        url: "/motorsports",
        icon: <SportsMotorsportsIcon />,
        colour: 'pink'
    },
    tennis: {
        heading: "Tennis",
        subHeading: "Wimbledon Finals",
        url: "/tennis",
        icon: <SportsTennisIcon />,
        colour: 'green'
    },
    cricket: {
        heading: "Cricket",
        subHeading: "6/1 Ben Stokes to score a century",
        url: "/cricket",
        icon: <SportsCricketIcon />,
        colour: 'red'
    },
    ufc: {
        heading: "UFC",
        subHeading: "£5 free bet available",
        url: "/ufc",
        icon: <SportsMmaIcon />,
        colour: 'hotGreen'
    }
}