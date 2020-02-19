import reducer from '../sportEvents';
import * as sportEventActions from '../../actions/sportEvents';
import expect from 'expect';
import { mockStoreFixture, mockStoreError, mockStorePending, mockExistingSportsEventsFixture } from '../../fixtures';

describe('sportEvents reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      error: null,
      markets: [],
      outcomes: [],
      pending: false,
    });
  });

  it('should return correct data if successful', () => {
    const payload = [
        {
          eventId: 21249939,
          name: "Shanghai Shenhua 0 v 0 Shandong Luneng Taishan",
          displayOrder: -1000,
          sort: "MTCH",
          linkedEventId: 21228740,
          classId: 5,
          className: "Football",
          typeId: 10003971,
          typeName: "Football Live",
          linkedEventTypeId: 10005942,
          linkedEventTypeName: "Chinese Super League",
          startTime: "2017-09-19T11:35:23.000Z",
          scores: {
            home: 0,
            away: 0
          },
          competitors: [
            {
              name: "Shanghai Shenhua",
              position: "home"
            },
            {
              name: "Shandong Luneng Taishan",
              position: "away"
            }
          ],
          status: {
            active: true,
            started: true,
            live: true,
            resulted: false,
            finished: false,
            cashoutable: true,
            displayable: true,
            suspended: false,
            requestabet: false
          },
          boostCount: 0,
          superBoostCount: 0,
          markets: [
            93649849,
            93649179,
            93649150
          ]
        }
      ]
    const setEvents = sportEventActions.fetchSportEventsSuccess(payload);
    expect(reducer({}, setEvents)).toEqual(mockStoreFixture.sportEvents);
  });

  it('should return error if no data', () => {
    const payload = {
      message: "Issue with data"
    }
    const setEvents = sportEventActions.fetchSportEventsError(payload);
    expect(reducer({}, setEvents)).toEqual(mockStoreError.sportEvents);
  });

  it('should return pending', () => {
    const setEvents = sportEventActions.fetchSportEventsPending();
    expect(reducer({}, setEvents)).toEqual(mockStorePending.sportEvents);
  });

  it('should update event data', () => {
    const payload = {
        eventId: 21249939,
        name: "Shanghai Shenhua 0 v 0 Shandong Luneng Taishan",
        displayOrder: -1000,
        sort: "MTCH",
        linkedEventId: 21228740,
        classId: 5,
        className: "Football",
        typeId: 10003971,
        typeName: "Football Live",
        linkedEventTypeId: 10005942,
        linkedEventTypeName: "Chinese Super League",
        startTime: "2017-09-19T11:35:23.000Z",
        scores: {
          home: 0,
          away: 0
        },
        competitors: [
          {
            name: "Shanghai Shenhua",
            position: "home"
          },
          {
            name: "Shandong Luneng Taishan",
            position: "away"
          }
        ],
        status: {
          active: true,
          started: true,
          live: true,
          resulted: false,
          finished: false,
          cashoutable: true,
          displayable: true,
          suspended: false,
          requestabet: false
        },
        boostCount: 0,
        superBoostCount: 0,
        markets: [
          93649849,
          93649179,
          93649150
        ]
      }
    const setEvents = sportEventActions.updateEvent(payload);
    expect(reducer(mockExistingSportsEventsFixture, setEvents)).toEqual(mockStoreFixture.sportEvents);
  });

});