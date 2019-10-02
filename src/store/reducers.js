import {
  GET_INIT_DATA,
  START_FETCH_PLAYERS,
  END_FETCH_PLAYERS,
  CLEAR_PLAYERS,
  START_FETCH_TRANSFERS,
  END_FETCH_TRANSFERS,
  CLEAR_TRANSFERS,
  START_SET_TRAINING,
  END_SET_TRAINING,
  START_SEARCH_PLAYERS,
  END_SEARCH_PLAYERS,
  CLEAR_SEARCH,
  CLEAR_SEARCH_FILTER,
  MARK_NEWS,
} from 'common/constants';
import {combineReducers} from 'redux'; 
import {handleActions, combineActions} from 'redux-actions';

export const defaultState = { 
  competitions: {
    leagues: {
      premiership: '',
      div1: {
        'div1 A': '',
        'div1 B': '',
      },
      div2: {
        'A - J': {
          'A': '',
          B: '',
          C: '',
          D: '',
          E: '',
          F: '',
          G: '',
          H: '',
          I: '',
          J: '',
        },
        'divisions': {
          'div1 C': '',
          div2: '',
        },
      },
    },
    cups: {
      cup1: '',
      cup2: '',
    },
    national: {
      WC: '',
      WL: '',
    },
    current: {
      'Super League': '',
      'IC group X': '',
      IC: '',
    },
  },
  forums: {
    general: ['#', false, null, '_blank'], 
    national: ['#', true, null, '_blank'],
  },
  user: {
    id: 409,
    name: 'UserName',
    clubs: [
      {name: 'SKIF', id: 225, news: true},
      {name: 'England', id: 102, news: false}, 
      {name: 'Some Affiliate Club with long name', id: 102, news: false}, 
    ],
    messages: true,
  },
  currentClub: {
    id: 788,
    name: 'SKIF',
    players: [],
    sells: [],
    bids: [],
    logo: '/system/clubs/logos/000/000/729/medium/SKIFe3742f3164b95c4c912a7289a5941b22.png',
    leagueInfo: {
      position_txt: '6th',
      name: 'Super League',
      id: 4260,
    },
    rankings: [
      {type: 'Combined', rank: 23, rating: 86, url: '/clubs?index=23&order=combined'},
      {type: 'Strength', rank: 7, rating: 80, url: '/clubs?index=7&order=skill'},
      {type: 'Tactical', rank: 74, rating: 90, url: '/clubs?index=74&order=tactical'},
    ],
    streaks: [
      'w-w-d-w-D',
      'Unbeaten: 5',
      'Unbeaten(Home): 3',
    ],
    news: {
      msgs: [
        {
          body: "You sold <a href='/players/585428'>Anton Krämer</a> for $1,378,911 to Rest of the World. After fees of $137,891 you received $1,241,020 ",
          club_id: 729,
          date: "Wed  02 Oct 19 06:03",
          id: 5246179,
          opened: false,
          topic: "Auction over",
        },
        {
          body: "World League  Group B <a href='/matches/196439'>Match Report</a>",
          club_id: 729,
          date: "Tue  01 Oct 19 17:02",
          id: 5263443,
          opened: false,
          topic: "International Match Report Finland vs Ukraine",
        },
        {
          body: "The offer of $7,000,000 for <a href = /players/549978> Marcel Schepers </a> has been rejected by <a href = /clubs/4020> Dwingeland </a>.",
          club_id: 729,
          date: "Tue  01 Oct 19 13:52",
          id: 5233001,
          opened: true,
          topic: "Rejected Offer",
        },
        {
          body: "You sold <a href='/players/585428'>Anton Krämer</a> for $1,378,911 to Rest of the World. After fees of $137,891 you received $1,241,020 ",
          club_id: 729,
          date: "Wed  02 Oct 19 06:03",
          id: 52166179,
          opened: false,
          topic: "Auction over",
        },
        {
          body: "World League  Group B <a href='/matches/196439'>Match Report</a>",
          club_id: 729,
          date: "Tue  01 Oct 19 17:02",
          id: 5563459,
          opened: true,
          topic: "International Match Report Finland vs Ukraine",
        },
        {
          body: "The offer of $7,000,000 for <a href = /players/549978> Marcel Schepers </a> has been rejected by <a href = /clubs/4020> Dwingeland </a>.",
          club_id: 729,
          date: "Tue  01 Oct 19 13:52",
          id: 526300661,
          opened: true,
          topic: "Rejected Offer",
        },
        {
          body: "You sold <a href='/players/585428'>Anton Krämer</a> for $1,378,911 to Rest of the World. After fees of $137,891 you received $1,241,020 ",
          club_id: 729,
          date: "Wed  02 Oct 19 06:03",
          id: 52661779,
          opened: true,
          topic: "Auction over",
        },
        {
          body: "World League  Group B <a href='/matches/196439'>Match Report</a>",
          club_id: 729,
          date: "Tue  01 Oct 19 17:02",
          id: 52683459,
          opened: true,
          topic: "International Match Report Finland vs Ukraine",
        },
        {
          body: "The offer of $7,000,000 for <a href = /players/549978> Marcel Schepers </a> has been rejected by <a href = /clubs/4020> Dwingeland </a>.",
          club_id: 729,
          date: "Tue  01 Oct 19 13:52",
          id: 52630001,
          opened: true,
          topic: "Rejected Offer",
        },
        {
          body: "You sold <a href='/players/585428'>Anton Krämer</a> for $1,378,911 to Rest of the World. After fees of $137,891 you received $1,241,020 ",
          club_id: 729,
          date: "Wed  02 Oct 19 06:03",
          id: 50266179,
          opened: true,
          topic: "Auction over",
        },
        {
          body: "World League  Group B <a href='/matches/196439'>Match Report</a>",
          club_id: 729,
          date: "Tue  01 Oct 19 17:02",
          id: 52634599,
          opened: true,
          topic: "International Match Report Finland vs Ukraine",
        },
        {
          body: "The offer of $7,000,000 for <a href = /players/549978> Marcel Schepers </a> has been rejected by <a href = /clubs/4020> Dwingeland </a>.",
          club_id: 729,
          date: "Tue  01 Oct 19 13:52",
          id: 52630901,
          opened: true,
          topic: "Rejected Offer",
        },
        {
          body: "You sold <a href='/players/585428'>Anton Krämer</a> for $1,378,911 to Rest of the World. After fees of $137,891 you received $1,241,020 ",
          club_id: 729,
          date: "Wed  02 Oct 19 06:03",
          id: 59266179,
          opened: true,
          topic: "Auction over",
        },
        {
          body: "World League  Group B <a href='/matches/196439'>Match Report</a>",
          club_id: 729,
          date: "Tue  01 Oct 19 17:02",
          id: 95263459,
          opened: true,
          topic: "International Match Report Finland vs Ukraine",
        },
        {
          body: "The offer of $7,000,000 for <a href = /players/549978> Marcel Schepers </a> has been rejected by <a href = /clubs/4020> Dwingeland </a>.",
          club_id: 729,
          date: "Tue  01 Oct 19 13:52",
          id: 45263001,
          opened: true,
          topic: "Rejected Offer",
        },
      ],
      total: 64,
    },
    matches: [
      {
        away_info: {
          club_id: "729",
          club_name: "SKIF",
          goals: null,
          match_info: {
            match_id: "190490",
            team_id: null,
            club_id: 729,
          },
          show_create: true,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        competition: "Super League",
        date: "2019-11-27 18:30:00",
        formatted_date: "18:30  Wed  27 Nov 2019",
        home_info: {
          club_id: "765",
          club_name: "Papugi",
          goals: null,
          match_info: null,
          show_create: false,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        id: "190490",
        match_subscript: null,
        pending: false,
        played: false,
      },
      {
        away_info: {
          club_id: "729",
          club_name: "SKIF",
          goals: null,
          match_info: {
            match_id: "190490",
            team_id: null,
            club_id: 729,
          },
          show_create: true,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        competition: "Super League",
        date: "2019-11-27 18:30:00",
        formatted_date: "18:30  Wed  27 Nov 2019",
        home_info: {
          club_id: "765",
          club_name: "Papugi",
          goals: null,
          match_info: null,
          show_create: false,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        id: "190491",
        match_subscript: null,
        pending: false,
        played: false,
      },
      {
        away_info: {
          club_id: "729",
          club_name: "SKIF",
          goals: null,
          match_info: {
            match_id: "190490",
            team_id: null,
            club_id: 729,
          },
          show_create: true,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        competition: "Super League",
        date: "2019-11-27 18:30:00",
        formatted_date: "18:30  Wed  27 Nov 2019",
        home_info: {
          club_id: "765",
          club_name: "Papugi",
          goals: null,
          match_info: null,
          show_create: false,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        id: "190492",
        match_subscript: null,
        pending: false,
        played: false,
      },
      {
        away_info: {
          club_id: "729",
          club_name: "SKIF",
          goals: null,
          match_info: {
            match_id: "190490",
            team_id: null,
            club_id: 729,
          },
          show_create: true,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        competition: "Super League",
        date: "2019-11-27 18:30:00",
        formatted_date: "18:30  Wed  27 Nov 2019",
        home_info: {
          club_id: "765",
          club_name: "Papugi",
          goals: null,
          match_info: null,
          show_create: false,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        id: "190493",
        match_subscript: null,
        pending: false,
        played: false,
      },
      {
        away_info: {
          club_id: "729",
          club_name: "SKIF",
          goals: null,
          match_info: {
            match_id: "190490",
            team_id: null,
            club_id: 729,
          },
          show_create: true,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        competition: "Super League",
        date: "2019-11-27 18:30:00",
        formatted_date: "18:30  Wed  27 Nov 2019",
        home_info: {
          club_id: "765",
          club_name: "Papugi",
          goals: null,
          match_info: null,
          show_create: false,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        id: "190494",
        match_subscript: null,
        pending: false,
        played: true,
      },
      {
        away_info: {
          club_id: "729",
          club_name: "SKIF",
          goals: null,
          match_info: {
            match_id: "190490",
            team_id: null,
            club_id: 729,
          },
          show_create: true,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        competition: "Super League",
        date: "2019-11-27 18:30:00",
        formatted_date: "18:30  Wed  27 Nov 2019",
        home_info: {
          club_id: "765",
          club_name: "Papugi",
          goals: null,
          match_info: null,
          show_create: false,
          show_pending_button: false,
          show_visit: false,
          team_id: null,
        },
        id: "190495",
        match_subscript: null,
        pending: false,
        played: true,
      },
    ]
  },
  search: {
    players: [],
    clubs: [],
    filter: {},
  },
  loading: {
    players: false,
    search: false,
    transfers: false,
    trainings: [],
  },
};

const forums = handleActions(
  {
    [combineActions(
      GET_INIT_DATA,
    )]: (state, action) => ({
      ...state, 
      ...action.payload.forums,
    }),
  },
  defaultState.forums
);
const competitions = handleActions(
  {
    [combineActions(
      GET_INIT_DATA,
    )]: (state, action) => ({
      ...state, 
      ...action.payload.competitions,
    }),
  },
  defaultState.competitions
);
const user = handleActions(
  {
    [combineActions(
      GET_INIT_DATA,
    )]: (state, action) => ({
      ...state, 
      ...action.payload.user,
    }),
  },
  defaultState.user
);
const currentClub = handleActions(
  {
    [combineActions(
      GET_INIT_DATA,
      END_FETCH_PLAYERS,
      CLEAR_PLAYERS,
      END_FETCH_TRANSFERS,
      CLEAR_TRANSFERS,
      START_SET_TRAINING,
      END_SET_TRAINING,
      MARK_NEWS,
    )]: (state, action) => ({
      ...state, 
      ...action.payload.currentClub,
    }),
    // [MARK_NEWS_OPENED]: (state, action) => {
    //   const openedNewsId = action.payload;
    //   const {msgs, total} = state.news;
    //   return ({
    //     ...state,
    //     news: {
    //       msgs: msgs.map(msg => {
    //         const {id} = msg;
    //         return (id === openedNewsId) ?
    //           {...msg, opened: true} :
    //           msg;
    //       }),
    //       total:27,
    //     },
    //   });
    // },
  },
  defaultState.currentClub
);
const search = handleActions(
  {
    [combineActions(
      START_SEARCH_PLAYERS,
      END_SEARCH_PLAYERS,
      CLEAR_SEARCH,
      CLEAR_SEARCH_FILTER,
    )]: (state, action) => ({
      ...state, 
      ...action.payload.search,
    }),
  },
  defaultState.search
);
const loading = handleActions(
  {
    [combineActions(
      GET_INIT_DATA,
      START_FETCH_PLAYERS,
      END_FETCH_PLAYERS,
      START_FETCH_TRANSFERS,
      END_FETCH_TRANSFERS,
      START_SET_TRAINING,
      END_SET_TRAINING,
      START_SEARCH_PLAYERS,
      END_SEARCH_PLAYERS,
    )]: (state, action) => ({
      ...state, 
      ...action.payload.loading,
    }),
  },
  defaultState.loading
);

export const appState = combineReducers({
  competitions,
  forums,
  user,
  currentClub,
  search,
  loading,
});
