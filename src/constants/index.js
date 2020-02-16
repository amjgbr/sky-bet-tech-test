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