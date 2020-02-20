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

export const OddsFormat = () => {
    const format = useSelector(state => state.oddsFormat);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (event, value) => {
        if (value !== null) {
          dispatch(setOddsFormat(value));
        }
      };

    return (
        <div className={classes.toggleContainer} data-testid={'c-toggle-container'}>
          <ToggleButtonGroup
            value={format}
            exclusive
            onChange={handleChange}
            aria-label="text alignment"
            size="small"
            data-testid={'c-toggle-button-group'}
          >
            <ToggleButton value={DECIMAL} aria-label={DECIMAL} data-testid={'c-toggle-button-decimal'}>
              Decimal
            </ToggleButton>
            <ToggleButton value={FRACTION} aria-label={FRACTION} data-testid={'c-toggle-button-fraction'}>
              Fraction
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
    )
}