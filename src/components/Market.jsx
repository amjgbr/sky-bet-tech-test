import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import { Outcome } from './Outcome';

import { wsGetMarket, wsUnsubscribeMarket, wsSubscribeMarket } from '../actions/websocket';

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
  if (obj.suspended) {
    status = 'Suspended'
  }

  return status
}

export const Market = withRouter(({ match, marketId, expanded, handleChange }) => {
  const sport = match.params.sport;
  const eventMarkets = useSelector(state => (state?.sportEvents?.markets?.[sport] && state?.sportEvents?.markets?.[sport].find(market => market.marketId === marketId)) || {});
  const [market, setMarket] = useState({});
  const [showItems, setShowItems] = useState(10)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(wsUnsubscribeMarket(marketId))
    };
  }, [dispatch, marketId])

  useEffect(() => {
    if (marketId) {
      dispatch(wsGetMarket(marketId))
    }
  }, [marketId, dispatch]);

  useEffect(() => {
    if (market?.status?.displayable && expanded === market.marketId) {
      dispatch(wsSubscribeMarket(marketId))
    }
  }, [market, dispatch, marketId, expanded]);

  useEffect(() => {
    if (Object.keys(eventMarkets).length) {
      setMarket(eventMarkets);
    }
  }, [eventMarkets, marketId]);

  const handleShowMore = () => {
    setShowItems(market.outcomes.length)
  }

  if (Object.keys(market).length && market?.status?.displayable) {
    const outcomes = market?.outcomes?.slice(0, showItems)
    return (
      <ExpansionPanel 
        TransitionProps={{ unmountOnExit: true }} 
         
        expanded={expanded === market.marketId} 
        key={market.marketId} style={{ margin: '10px' }} 
        onChange={(e) => handleChange(e, market.marketId)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          className={market?.status?.suspended ? classes.suspendedMarket : ''}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{market.name} - {getEventStatus(market?.status)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <>
                  {expanded === market.marketId && outcomes.map((outcomeId, index) => {
                    return (
                      <Outcome key={outcomeId} outcomeId={outcomeId} marketId={market.marketId} />
                    )
                  })}
                  {market?.outcomes?.length > showItems &&
                    <TableRow >
                      <TableCell>
                        <button onClick={handleShowMore}>
                              Show more!
                        </button>
                      </TableCell>
                    </TableRow>
                  }
                </>
              </TableBody>
            </Table>
          </TableContainer>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
  return null;
})