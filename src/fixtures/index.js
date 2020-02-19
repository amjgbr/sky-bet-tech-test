import { 
    INIT
} from '../constants';


export const mockStoreError = {
    routes: {
        error: {
            message: "Issue with data"
        },
        pending: false
    },
    sportEvents: {
        error: {
            message: "Issue with data"
        },
        pending: false
    }
}

export const mockStorePending = {
    routes: {
        error: null,
        pending: true
    },
    sportEvents: {
        error: null,
        pending: true
    }
}

export const mockStoreFixture = {
    routes: {
        data: {
            football: {
                live: "/football/live"
            },
            sportsbook: {
                events: '/football/events',
                markets: '/football/markets',
                outcomes: '/football/outcomes'
            }
        },
        pending: false
    },
    sportEvents: {
      data: {
        football: [
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
              93649150,
            ]
          }
        ]
      },
      pending: false,
    },
    websocket: {
      type: INIT
    },
    subscriptions: {
        data: ['e.123456', 'e.123457', 'e.123458']
    }
}

export const mockExistingSportsEventsFixture = {
    data: {
        football: [
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
            }
        ]
    },
    pending: false
}