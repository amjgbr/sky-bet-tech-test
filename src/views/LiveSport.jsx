import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { wsGetLiveEvents } from '../actions/websocket';
import fetchRoutes from '../apiRequests/fetchRoutes'
import { SportsList, INIT } from '../constants';
import { groupBy } from '../utils';
import { Event } from '../components/Event';
import { useStyles } from '../assets/styles/styles';

export const LiveSport = ({ match }) => {
  const sport = match.params.sport;
  const sportEvents = useSelector(state => state.sportEvents.data);

  const [events, setEvents] = useState(sportEvents);
  const routes = useSelector(state => state.routes.data);

  const websocket = useSelector(state => state.websocket);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutes())
  }, [dispatch]);

  useEffect(() => {
    if (websocket.type === INIT && routes[sport]) {
      dispatch(wsGetLiveEvents(true))
    }
  }, [websocket, dispatch, routes, sport]);

  useEffect(() => {
    if (sportEvents) {
      setEvents(sportEvents[sport])
    }
  }, [sportEvents, sport]);

  const groups = (events?.length > 0 && groupBy(events, 'linkedEventTypeName')) || {};
  return (
    <Grid item xs={12} className={classes.grid} data-testid={'c-live-sport-grid'}>
      <Paper className={classes.paper}>
        <Typography variant="h2" component="h1" className={classes.title}>
          <Avatar className={`${classes[SportsList[sport].colour]} ${classes.background} ${classes.marginAuto}`}>
            {SportsList[sport].icon}
          </Avatar>

          {sport}
        </Typography>
        {groups ? Object.keys(groups).map(event => {
          return (
            <ExpansionPanel defaultExpanded key={event} style={{ margin: '10px' }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{event}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Class</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Start time</TableCell>
                        <TableCell align="right">Event status</TableCell>
                        <TableCell align="right">Bet Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {groups[event].map(row => {
                        return (
                          <Event key={row.name} eventId={row.eventId} sport={sport} />
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        }) : (
            <div>No data</div>
          )}
      </Paper>
    </Grid>
  );
}