import React from 'react';
import { render } from '@testing-library/react';
import {formatDate, setPriceDisplay, lookUpSport, groupBy} from '..';
import { mockStoreFixture } from '../../fixtures';

import {
    DECIMAL,
    FRACTION
} from '../../constants';

const mockPriceInformation = {decimal: 0.3 , den: 1, num: 6 }

test('setPriceDisplay should render correct for decimal oddsFormat', () => {
    expect(setPriceDisplay(DECIMAL, mockPriceInformation)).toBe('0.30')
});

test('setPriceDisplay should render correct for fraction oddsFormat', () => {
    expect(setPriceDisplay(FRACTION, mockPriceInformation)).toBe('1/6')
});

test('setPriceDisplay should render no price if price object not provided', () => {
    expect(setPriceDisplay(FRACTION, undefined)).toBe('No price data')
});

test('lookUpSport returns correct string from data and eventId', () => {
    expect(lookUpSport(mockStoreFixture.sportEvents.data, 21249939)).toBe('football')
});