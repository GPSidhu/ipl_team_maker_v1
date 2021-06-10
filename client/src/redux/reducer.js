import teamsData from "../data/teams";
import { createTeams } from "../logic/createTeams";

const defaultState = {
	selectedTeams: 0,
	teams: teamsData,
	playingTeams: [],
};

const teamsReducer = function teams(state = defaultState, action) {
	switch (action.type) {
		case "SELECT_TEAM":
			if (state.playingTeams.length === 2) return state; // already selected

			// update selected prop of other teams
			let playingTeams = [
				...state.playingTeams,
				{
					...action.team,
					playing11: [], //getFirst11(action.team), // testing
					//playingCount: 11 - testing
				},
			];
			let allTeams = setSelected(state.teams, playingTeams);
			return {
				...state,
				playingTeams: playingTeams,
				teams: [...allTeams],
			};

		case "DESELECT_TEAM":
			let idx = state.playingTeams.findIndex(
				(t) => t.code === action.team.code
			);
			if (idx !== -1) {
				let newPT = state.playingTeams;
				newPT.splice(idx, 1);
				let allTeams = setSelected(state.teams, newPT);
				return {
					...state,
					playingTeams: [...newPT],
					teams: [...allTeams],
				};
			}
			return state;
		case "SELECT_PLAYER":
			if (state.playingTeams && state.playingTeams.length > 0) {
				let playingTeams = state.playingTeams;
				playingTeams.forEach((pt) => {
					if (pt.code === action.team.code) {
						pt.playing11.push(action.player);
						pt.playingCount = pt.playing11.length;
					}
				});
				console.log("player selected: " + action.player.name);
				return { ...state, playingTeams: [...playingTeams] };
			}
			break;

		case "DESELECT_PLAYER":
			if (state.playingTeams) {
				let playingTeams = state.playingTeams;
				playingTeams.forEach((pt) => {
					if (pt.code === action.team.code) {
						pt.playing11 = pt.playing11.filter(
							(p) => p.id !== action.player.id
						);
						pt.playingCount = pt.playing11.length;
					}
				});
				return { ...state, playingTeams: [...playingTeams] };
			}
			break;
		case "CREATE_TEAMS":
			let res =
				createTeams(
					action.team1,
					action.team2,
					action.constraints || undefined
				) || [];
			return { ...state, result: [...res] };
		case "CLEAR_TEAMS":
			return { ...state, result: [], playingTeams: [] };
		default:
			return state;
	}
};

function setSelected(teams, playingTeams) {
	teams &&
		teams.forEach((t) => {
			playingTeams.forEach((pt) => {
				if (pt.code === t.code) t.selected = true;
				else t.selected = false;
			});
		});
	return teams;
}

// tester -- remove
// function getFirst11(team) {
//     let res = [];
//     let i = 0;
//     for (i = 0; i < 2; i++) {
//         res.push(team.players.wicketkeepers[i])
//         res.push(team.players.batsmen[i])
//         res.push(team.players.allrounders[i])
//     }
//     res.push(team.players.batsmen[i])
//     res.push(team.players.batsmen[i+1])
//     res.push(team.players.bowlers[i])
//     res.push(team.players.bowlers[i+1])
//     res.push(team.players.bowlers[i+2])
//     return res;
// }

export default teamsReducer;
