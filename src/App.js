import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import './assets/styles/App.css';
import { Header } from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LiveSport, EventDetail, HomePage } from './views/';
import { wsConnect } from './actions/websocket';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '24px',
  },
  grid: {
    justifyContent: 'center'
  }
}));

export const App = () => {
  const host = `ws://127.0.0.1:8889/`;
    
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnect(host));
  }, [dispatch, host]);

  
  return (
    <Router>
      <Header />
      <Switch>
          <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3} className={classes.grid}>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/:sport' component={LiveSport}/>
              <Route exact path='/:sport/:eventId' component={EventDetail} />
            </Grid>
          </Container>
      </Switch>
    </Router>
  );
}
