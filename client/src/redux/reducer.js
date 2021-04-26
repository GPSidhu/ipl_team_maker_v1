import teamsData from '../data/teams'

const defaultState = {
    selectedTeams: 0,
    teams: teamsData,
    playingTeams: []
}

const teamsReducer = function teams(state = defaultState, action) {
    //select team action
    // if (action && action.team)
    //     console.log('team to select: ' + action.team.code)

    switch(action.type) {
        case 'SELECT_TEAM': 
                            if (state.playingTeams.length === 2)
                                return state // already selected
                            
                            // update selected prop of other teams
                            let playingTeams = [
                                ...state.playingTeams,
                                        {
                                            ...action.team,
                                            playing11: []
                                        }
                            ]
                            let allTeams = setSelected(state.teams, playingTeams)
                            return {
                                    ...state, 
                                    playingTeams: [ 
                                        ...state.playingTeams,
                                        {
                                            ...action.team,
                                            playing11: []
                                        }
                                    ],
                                    teams: [...allTeams]
                                }

        case 'DESELECT_TEAM':
                            let idx = state.playingTeams.findIndex((t) => t.code === action.team.code)
                            if (idx !== -1) {
                                let newPT = state.playingTeams;
                                newPT.splice(idx, 1)
                                let allTeams = setSelected(state.teams, newPT)
                                return {...state, playingTeams: [...newPT], teams: [...allTeams]}
                            }
                            return state 
        case 'SELECT_PLAYER':
                            if (state.team1 && action.team.code === state.team1.code) {
                                let playing11 = state.team1.playing11;
                                playing11.push(action.player);
                                return {...state, team1: {...state.team1, playing11: playing11}}
                            }
                            if (state.team2 && action.team.code === state.team2.code) {
                                let playing11 = state.team1.playing11;
                                playing11.push(action.player);
                                return {...state, team2: {...state.team2, playing11: playing11}}
                            }
                            console.log('player selected: '+action.player.name)
                        break;
        
        case 'DESELECT_PLAYER': 
                            debugger
                            if (state.team1 && action.team.code === state.team1.code) {
                               // let index = state.team1.playing11.findIndex((p) => p.id === action.player.id);
                                let playing11 = state.team1.playing11.filter((p) => p.id !== action.player.id)
                                return {...state, team1: {...state.team1, playing11: playing11}}
                            }
                            if (state.team2 && action.team.code === state.team1.code) {
                                let index = state.team1.playing11.findIndex((p) => p.id === action.player.id);
                                let playing11 = state.team1.playing11.splice(index, 1)
                                return {...state, team2: {...state.team2, playing11: playing11}}
                            }
                            console.log('player deselected: '+action.player.name)
                        break;

        default: return state
    }
    return state
}

function setSelected(teams, playingTeams) {
    teams && teams.forEach((t) => {
        playingTeams.forEach((pt)  => {
            if (pt.code === t.code)
                t.selected = true
            else
                t.selected = false
        })
    })
    return teams
}

export default teamsReducer
