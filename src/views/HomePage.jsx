import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Paper from '@material-ui/core/Paper';

import { SportsList } from '../constants';
import { useStyles } from '../assets/styles/styles';

export const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.grid} data-testid={'c-homepage-grid'}>
      <Paper className={classes.paper} data-testid={'c-homepage-paper'}>
        <Typography variant="h2" component="h1" className={classes.title} data-testid={'c-homepage-title'}>
          Sports
        </Typography>
        <List data-testid={'c-homepage-sport-list'}>
          {Object.keys(SportsList).map((sport, index) => {
            return (
              <Link key={index} to={SportsList[sport].url} >
                <ListItem className={index % 2 ? classes.rowBackground : classes.row}>
                  <ListItemAvatar>
                    <Avatar className={`${classes[SportsList[sport].colour]} ${classes.background}`}>
                      {SportsList[sport].icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={SportsList[sport].heading}
                    secondary={SportsList[sport].subHeading}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" className={index % 2 ? classes.hotGreen : null}>
                      <DoubleArrowIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            )
          })}
        </List>
      </Paper>
    </Grid>
  );
}