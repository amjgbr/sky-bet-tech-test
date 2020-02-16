import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import Grid from '@material-ui/core/Grid';
import { wsGetEvent } from '../actions/websocket';
import { formatDate } from '../utils';

import { useStyles } from '../assets/styles/styles';

export const EventDetail = ({match}) => {
  console.log(match)
  const eventId = parseInt(match.params.eventId, 10);
  const [eventDetail, setEvent] = useState([])
  const event = useSelector(state => state.sportEvents.data);
  const websocket = useSelector(state => state.websocket);
  
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // move this to app
    if(websocket.type === 'INIT') {
      dispatch(wsGetEvent(eventId))
    }
  }, [eventId, websocket, dispatch]);


  useEffect(() => {
    if(event) {
      const singleEvent = event.filter(a => a.eventId === eventId)[0];
      setEvent(singleEvent)
    }

    if(event?.markets?.length > 0) {

    }
  }, [event, eventId]);

  // const groups = (events.length > 0 && groupBy(events, 'linkedEventTypeName')) || {};
  const homeTeam = eventDetail?.competitors?.find(team => team.position === 'home');
  const awayTeam = eventDetail?.competitors?.find(team => team.position === 'away');
  return (
    <Grid item xs={12} className={classes.grid} >
      <Paper className={classes.paper}>
        <div id="match-details-curtain">
          <div id="match-details-container">
              <div id="title">{eventDetail?.linkedEventTypeName || 'Miscellaneous'}</div>
              <div id="teams-container">
                  <div className="homecomming-team flexbox-items">
                      <div className="homecomming-team logo"><SportsSoccerIcon color="primary" style={{ fontSize: 80 }} /></div>
                      <br />
                      <div className="homecomming-team name">{homeTeam?.name}</div>
                  </div>
                  <div className="flexbox-items">
                      <div id="date-of-match">{formatDate(eventDetail?.startTime)}</div>
                      <br />
                      <div id="vs"><div className="circle"></div><hr id="vs-line"/><div className="circle"></div></div>
                  </div>
                  <div className="away-team flexbox-items">
                      <div className="away-team logo"><SportsSoccerIcon color="secondary" style={{ fontSize: 80 }}/></div>
                      <br />
                      <div className="away-team name">{awayTeam?.name}</div>
                  </div>
              </div>
              <div id="score-container">
                  <div className="homecomming-team score">{eventDetail?.scores?.home}</div>
                  <div className="away-team score">{eventDetail?.scores?.away}</div>
              </div>
              <hr id="bottom-devider" />
          </div>
      </div>
          {/* {groups ? Object.keys(groups).map(event => {
            return (
              <ExpansionPanel key={event} style={{margin: '10px'}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{event}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TableContainer component={Paper}>
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
                            <Event key={row.name} eventId={row.eventId} />
                          )
                     })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          }): (
            <div>No date</div>
          )} */}
        </Paper>
    </Grid>
  );
}