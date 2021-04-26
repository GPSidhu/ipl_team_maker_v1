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

