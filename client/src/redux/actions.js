export function selectTeam(team) {
    return {
        type: 'SELECT_TEAM',
        team: team
    }
}

export function deSelectTeam(team) {
    return {
        type: 'DESELECT_TEAM',
        team: team
    }
}

export function selectPlayer(team, player) {
    return {
        type: 'SELECT_PLAYER',
        team: team,
        player: player
    }
}

export function deSelectPlayer(team, player) {
    return {
        type: 'DESELECT_PLAYER',
        team: team,
        player: player
    }
}

export function createTeams(team1, team2, constraints) {
    return {
        type: 'CREATE_TEAMS',
        team1: team1,
        team2: team2,
        constraints: constraints
    }
}

export function clearTeams() {
    return {
        type: 'CLEAR_TEAMS'
    }
}
