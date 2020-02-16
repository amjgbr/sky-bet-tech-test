import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { wsGetEvent } from '../actions/websocket';

import { useStyles } from '../assets/styles/styles';

const getEventStatus = (obj) => {
  let status = ""
  if (obj.active) {
    status = 'Active'
  }
  if (obj.started) {
    status = 'Started'
  }
  if (obj.live) {
    status = 'Live'
  }
  if (obj.resulted) {
    status = 'Resulted'
  }
  if (obj.finished) {
    status = 'Finished'
  }
  return status
}

const getBetStatus = (obj) => {
  let status = ""
  if (obj.cashoutable) {
    status = 'Cash Out'
  }
  return status
}

export const Event = withRouter(({sport, eventId, history}) => {
    const [eventDetails, setEventDetails] = useState({})
    const sportEvents = useSelector(state => state.sportEvents.data);
    const websocket = useSelector(state => state.websocket);
    const classes = useStyles();
    const dispatch = useDispatch();

  useEffect(() => {
    if(websocket.type === 'INIT') {
      dispatch(wsGetEvent(eventId))
    }
  }, [websocket, dispatch, eventId]);

  useEffect(() => {
    if(sportEvents) {
        const eventDetail = sportEvents.filter(item => item.eventId === eventId)[0] || {};
        setEventDetails(eventDetail)
    }
  }, [sportEvents, eventId, eventDetails, dispatch]);

  if (!Object.keys(eventDetails).length) {
      return null;
  }
  console.log(eventDetails?.markets?.length)
  return (
    <TableRow 
        className={
            eventDetails?.markets?.length ? classes.tableRowClick : ''
        } 
        onClick={() => 
            eventDetails?.markets?.length > 0 && 
            history.push({pathname: `/${sport}/${eventId}`, state: {markets: eventDetails?.markets}})
        }
    >
        <TableCell >{eventDetails.name}</TableCell>
        <TableCell align="right">{eventDetails.className}</TableCell>
        <TableCell align="right">{eventDetails.typeName}</TableCell>
        <TableCell align="right">{eventDetails.startTime}</TableCell>
        <TableCell align="right">{getEventStatus(eventDetails.status)}</TableCell>
        <TableCell align="right">{getBetStatus(eventDetails.status)}</TableCell>
    </TableRow>
  );
})