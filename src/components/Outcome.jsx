import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

import { wsGetOutcome, wsUnsubscribeOutcome, wsSubscribeOutcome } from '../actions/websocket';

import { setPriceDisplay } from '../utils';

export const Outcome = withRouter(({ match, outcomeId, eventId }) => {
  const sport = match.params.sport;
  const eventOutcomes = useSelector(state => (state?.sportEvents?.outcomes?.[sport] && state?.sportEvents?.outcomes?.[sport].find(outcome => outcome.outcomeId === outcomeId)) || {});
  const [outcome, setOutcome] = useState({});
  const format = useSelector(state => state.oddsFormat);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(wsUnsubscribeOutcome(outcomeId))
    };
  }, [dispatch, outcomeId])

  useEffect(() => {
    if (outcomeId) {
      dispatch(wsGetOutcome(outcomeId))
    }
  }, [outcomeId, dispatch]);

  useEffect(() => {
    if (outcome?.status?.displayable) {
      dispatch(wsSubscribeOutcome(outcomeId))
    }
  }, [outcome, dispatch, outcomeId]);

  useEffect(() => {
    if (Object.keys(eventOutcomes).length) {
      setOutcome(eventOutcomes);
    }
  }, [eventOutcomes, sport, outcomeId, dispatch, eventId])

  if (Object.keys(outcome).length && outcome?.status?.displayable) {
    return (
      <TableRow >
        <TableCell >{outcome.name}</TableCell>
        <TableCell align="right">{setPriceDisplay(format, outcome.price)}</TableCell>
      </TableRow>
    );
  }
  return null;
})