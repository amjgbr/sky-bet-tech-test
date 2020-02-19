import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/images/logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
  },
  navStyle: {
    backgroundColor: 'black'
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.navStyle}>
              <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6" className={classes.title}>
            Andy Jones - SkyBet Tech Test
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}