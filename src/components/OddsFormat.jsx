import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setOddsFormat } from '../actions/oddsFormat';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { useStyles } from '../assets/styles/styles';
import {
  DECIMAL,
  FRACTION
} from '../constants';

export const OddsFormat = ({ match, outcomeId, eventId }) => {
    const format = useSelector(state => state.oddsFormat);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (event, value) => {
        if (value !== null) {
          dispatch(setOddsFormat(value));
        }
      };

    return (
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={format}
            exclusive
            onChange={handleChange}
            aria-label="text alignment"
            size="small"
          >
            <ToggleButton value={DECIMAL} aria-label={DECIMAL}>
              Decimal
            </ToggleButton>
            <ToggleButton value={FRACTION} aria-label={FRACTION}>
              Fraction
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
    )
}