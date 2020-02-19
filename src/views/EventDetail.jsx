import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Market } from '../components/Market';
import { wsGetEvent, wsUnsubscribeEvent, wsSubscribeEvent } from '../actions/websocket';
import { EventHeader } from '../components/EventHeader';
import { useStyles } from '../assets/styles/styles';
import { OddsFormat } from '../components/OddsFormat';

import {
  INIT
} from '../constants';

export const EventDetail = ({ match }) => {
  const sport = match.params.sport;
  const eventId = parseInt(match.params.eventId, 10);
  const event = useSelector(state => (state.sportEvents.data[sport] && state?.sportEvents?.data?.[sport].find(event => event.eventId === eventId)) || {});
  const [eventDetail, setEvent] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const websocket = useSelector(state => state.websocket);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(wsUnsubscribeEvent(eventId))
    };
  }, [dispatch, eventId])

  useEffect(() => {
    if (eventId && websocket.type === INIT) {
      dispatch(wsGetEvent(eventId))
    }
  }, [eventId, websocket, dispatch]);

  useEffect(() => {
    if (event?.status?.displayable) {
      dispatch(wsSubscribeEvent(eventId))
    }
  }, [event, dispatch, eventId]);


  useEffect(() => {
    if (Object.keys(event)?.length) {
      setEvent(event)
    }
  }, [event, eventId, dispatch, sport]);

  const handleChange = (e, panelId) => {
    setExpanded(expanded === panelId ? null : panelId);
  };

  return (
    <Grid item xs={12} className={classes.grid} data-testid={'c-event-detail-grid'} >
      <Paper className={classes.paper}>
        <EventHeader eventDetail={eventDetail} />
        <OddsFormat />
        {eventDetail?.markets ? eventDetail?.markets.map(marketId => {
          return (
            <Market key={marketId} marketId={marketId} expanded={expanded} handleChange={handleChange} />
          )
        }) : (
            <div>No date</div>
          )}
      </Paper>
    </Grid>
  );
}