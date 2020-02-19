import React from 'react';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

import { formatDate } from '../utils';

export const EventHeader = ({ eventDetail }) => {
  const homeTeam = eventDetail?.competitors?.find(team => team.position === 'home');
  const awayTeam = eventDetail?.competitors?.find(team => team.position === 'away');
  return (
    <div id="match-details-curtain">
      <div id="match-details-container">
        <div id="title">{eventDetail?.linkedEventTypeName || 'Miscellaneous'}</div>
        <div id="teams-container">
          <div className="homecomming-team flexbox-items">
            <div className="homecomming-team logo"><SportsSoccerIcon color="primary" style={{ fontSize: 80 }} /></div>
            <br />
            <div className="homecomming-team name" data-testid={'c-event-home-team-name'}>{homeTeam?.name}</div>
          </div>
          <div className="flexbox-items">
            <div id="date-of-match">{formatDate(eventDetail?.startTime)}</div>
            <br />
            <div id="vs"><div className="circle"></div><hr id="vs-line" /><div className="circle"></div></div>
          </div>
          <div className="away-team flexbox-items">
            <div className="away-team logo"><SportsSoccerIcon color="secondary" style={{ fontSize: 80 }} /></div>
            <br />
            <div className="away-team name">{awayTeam?.name}</div>
          </div>
        </div>
        <div id="score-container">
          <div className="homecomming-team score">{eventDetail?.scores?.home}</div>
          <div className="away-team score">{eventDetail?.scores?.away}</div>
        </div>
        <hr id="bottom-divider" />
      </div>
    </div>
  );
}