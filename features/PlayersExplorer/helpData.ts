import { Gameweek, Player } from "~/features/AppData/appDataTypes";
import { ElementStatus } from "~/features/AppData/fplTypes";

export const player: Player = {
  id: 302,
  web_name: "Fernandes",
  news: "Too good",
  status: ElementStatus.INJURED,
  now_cost: 115,
  photo: "141746.jpg",
  chance_of_playing_next_round: null,
  chance_of_playing_this_round: null,
  total_points: 228,
  transfers_in_event: 2524,
  transfers_out_event: 31638,
  element_type: {
    singular_name_short: "MID",
  },
  team: {
    id: 13,
    short_name: "MUN",
  },
  linked_data: {
    understat_id: "1228",
    past_matches: [
      {
        opponent_short_title: "BHA",
        is_home: true,
        match_xgi: 0.7231284081935883,
        match_xga: 1.41071,
      },
      {
        opponent_short_title: "TOT",
        is_home: false,
        match_xgi: 0.7817299589514732,
        match_xga: 0.921801,
      },
      {
        opponent_short_title: "BUR",
        is_home: true,
        match_xgi: 0.44403740763664246,
        match_xga: 0.959804,
      },
      {
        opponent_short_title: "LEE",
        is_home: false,
        match_xgi: 0.5469669923186302,
        match_xga: 0.216834,
      },
      {
        opponent_short_title: "AVL",
        is_home: false,
        match_xgi: 1.067942786961794,
        match_xga: 0.565472,
      },
    ],
    season_xgi: 0.8092587503113785,
    season_xga: 1.0710169999999999,
    teamcolorcodes: {
      team: "Man Utd",
      background: "#dc1f29",
      text: "#fae935",
      highlight: "#000",
    },
    transfers_delta_event: -29114,
    previous_gameweeks: [
      {
        opponent_team_short_name: "BUR",
        was_home: true,
        kickoff_time: "2021-04-18T15:00:00Z",
        total_points: 2,
        bps: 7,
        minutes: 90,
      },
      {
        opponent_team_short_name: "LEE",
        was_home: false,
        kickoff_time: "2021-04-25T13:00:00Z",
        total_points: 3,
        bps: 13,
        minutes: 90,
      },
      {
        opponent_team_short_name: "AVL",
        was_home: false,
        kickoff_time: "2021-05-09T13:05:00Z",
        total_points: 7,
        bps: 27,
        minutes: 85,
      },
      {
        opponent_team_short_name: "LEI",
        was_home: true,
        kickoff_time: "2021-05-11T17:00:00Z",
        total_points: 0,
        bps: 0,
        minutes: 0,
      },
      {
        opponent_team_short_name: "LIV",
        was_home: true,
        kickoff_time: "2021-05-13T19:15:00Z",
        total_points: 0,
        bps: 0,
        minutes: 0,
      },
    ],
    next_gameweeks: [
      {
        opponent_team_short_name: "FUL",
        is_home: true,
        event: 37,
        finished: false,
        difficulty: 2,
      },
      {
        opponent_team_short_name: "WOL",
        is_home: false,
        event: 38,
        finished: false,
        difficulty: 3,
      },
    ],
  },
};

export const gameweeks: Gameweek[] = [
  {
    id: 34,
    deadline_time: "2021-05-23T13:30:00Z",
    is_previous: false,
    is_current: true,
    is_next: false,
  },
  {
    id: 35,
    deadline_time: "2021-05-23T13:30:00Z",
    is_previous: false,
    is_current: false,
    is_next: true,
  },
  {
    id: 36,
    deadline_time: "2021-05-23T13:30:00Z",
    is_previous: false,
    is_current: false,
    is_next: false,
  },
  {
    id: 37,
    deadline_time: "2021-05-23T13:30:00Z",
    is_previous: false,
    is_current: false,
    is_next: false,
  },
  {
    id: 38,
    deadline_time: "2021-05-23T13:30:00Z",
    is_previous: false,
    is_current: false,
    is_next: false,
  },
];
