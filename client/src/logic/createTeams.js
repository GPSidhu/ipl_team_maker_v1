import _ from 'lodash'
import {
    canSelectPlayer,
    getMaxPointPlayersUnderCredit
} from './util'

const COLOR = {
    HEADER : "#454442"
}
// Result will contain following type of teams 
const TEAM_TYPES = [
    {type: 'biased', team: 1},  // team1 to win: max players(7) will be selected from team1
    {type: 'biased', team: 2},  // team2 to win: max players(7) will be selected from team2
    {type: 'balanced', team: 1}, // anybody can win: max players(6) will be selected from team1
    {type: 'balanced', team: 2}, // anybody can win: max players(6) will be selected from team2
]

/* 
    @input
    team1 <Object*> : Input team1
    team2 <Object*> : Input team2
    constraints <Object*> : 
    @return
        <Array<Object>> : Possible team combinations complying to input constraints
*/
export const createTeams = function(team1, team2, constraints = {
    wk: [1,3],  // min no. of weeketkeepers: 1, max: 3
    bt: [3,6],  // min no. of batsmen: 3, max: 6
    ar: [1,3],  // min no. of allrounders: 1, max: 3
    bl: [3,6],  // min no. of bowlers: 3, max: 6
    max: 7      // max players from one team: 7
}) {
    if (!team1 || !team2) {
        console.error('One or both the teams missing!!!')
        return {}
    }
    let res = [];
    let data = preProcess(team1, team2)
    for(let o in TEAM_TYPES) {
        let config = {
            team_type: TEAM_TYPES[o],
            max_credit: 100,
            constraints: constraints,
            t1: team1.code,
            t2: team2.code
        }
        let base = selectTeam(data, config)
        let o_team = {name: `Team ${parseInt(o)+1}`}
        o_team.players = {};
        o_team.playingCount = 0;
        o_team.rem_credit = parseFloat(base.rem_credit);
        o_team.t1 = base.t1;
        o_team.t2 = base.t2;
        o_team.color = COLOR.HEADER;
        o_team.cvc_candidates = base.cvc_candidates;
        if (base.players) {
            o_team.players.wicketkeepers = base.players.filter((p) => p.role === 'wk');
            o_team.players.batsmen = base.players.filter((p) => p.role === 'bt');
            o_team.players.allrounders = base.players.filter((p) => p.role === 'ar');
            o_team.players.bowlers = base.players.filter((p) => p.role === 'bl');
            o_team.playingCount = base.players.length;
        }
        res.push(o_team);
    }

    return res;
}

function preProcess(team1, team2) {
    let t1 = team1.playing11.map((p) => ({...p, team: team1.code, color: team1.color}))
    let t2 = team2.playing11.map((p) => ({...p, team: team2.code, color: team2.color}))

    // get merged array 
    let merged = _.union(t1, t2);
    return {
        merged: merged,
        m_sorted_points: _.orderBy(merged, ['points'], ['desc']),
        t1_sorted: _.orderBy(t1, ['points'], ['desc']),
        t2_sorted: _.orderBy(t2, ['points'], ['desc']),
        team1: team1,
        team2: team2
    }
}

// select balanced or biased team based on config and constraints
function selectTeam(data, config) {
    const constraints = config.constraints;
    const t = config.team_type.team;
    let max_players_from_fav_team = constraints.max;
    if (config.team_type.type === 'balanced')
        max_players_from_fav_team = 6;
    
    let players = [];
    let creditLeft = config.max_credit;
    const team1 = t === 1 ? data.team1 : data.team2;
    const team2 = t !== 1 ? data.team1 : data.team2;
    const fav_team_sorted = t === 1 ? _.cloneDeep(data.t1_sorted) : _.cloneDeep(data.t2_sorted);
    const other_team_sorted = t !== 1 ? _.cloneDeep(data.t1_sorted) : _.cloneDeep(data.t2_sorted);
    let fav_team_count = 0;
    let other_team_count = 0;

    let counts = {
            wk: 0,
            ar: 0,
            bt: 0,
            bl : 0,
        }
    let totalPlayersToSelect = constraints.wk[0] + constraints.bt[0] + constraints.ar[0] + constraints.bl[0];
    for (let i = 0; i < fav_team_sorted.length; i++) {
        const p = fav_team_sorted[i];
        if (canSelectPlayer(p, counts, constraints, creditLeft)) {
            players.push(p);
            creditLeft -= p.credit;
            counts[p.role]++;
            fav_team_count++;
            totalPlayersToSelect--;
        }
        if (totalPlayersToSelect === 0 || fav_team_count === max_players_from_fav_team)
            break;
    }

    // find what are remaining min players and add from other team
    if (totalPlayersToSelect > 0)
        Object.keys(counts).forEach((k) => {
            if (counts[k] < constraints[k][0]) {
                let ot = addPlayer(k, other_team_sorted, constraints[k][0] - counts[k], creditLeft, players);
                creditLeft = ot.rem_credit;
                other_team_count += ot.added_players || 0;
                if (ot.rem_players === 0) // constraints met update counts
                    counts[k] = constraints[k][0]
            }
        })
    
    // need to select remaining players from other team with remaining credits left
    totalPlayersToSelect = 11 - players.length; 
    const remPlayers = getMaxPointPlayersUnderCredit(other_team_sorted, creditLeft)
    if (remPlayers && remPlayers.players) {
        other_team_count += remPlayers.players.length;
        if (remPlayers.players.length < totalPlayersToSelect) {
            console.error('[getMaxPointPlayersUnderCredit] could not find remaining players within credit limit')
        }
    }
    // console.log('all players')
    const playing11 = [...players, ...remPlayers.players];
    // console.log(playing11)
    const sortedPlaying11 = _.orderBy(playing11, ['points'], ['desc']);
    // console.log('all players - sorted')
    // console.log(sortedPlaying11)
    const cvc_candidates = _.slice(sortedPlaying11, 0, 2);
    // console.log(cvc_candidates)
    return {
        rem_credit: remPlayers.rem_credit,
        players: playing11,
        cvc_candidates: cvc_candidates,
        counts: counts,
        t1: {
            name: team1.name,
            code: team1.code,
            color: team1.color,
            playingCount: fav_team_count
        },
        t2: {
            name: team2.name,
            code: team2.code,
            color: team2.color,
            playingCount: other_team_count
        },
    }
}

function addPlayer(role/** 'wk', 'bt',... */, playersList/** array */, n, creditLeft, result/** array */) {
    let i = 0;
    let c = 0;
    while(n > 0 && i < playersList.length) {
        if (playersList[i].role === role) {
            result.push(playersList[i]);
            creditLeft -= playersList[i].credit;
            c++;
            n--;
            playersList.splice(i, 1);
            i--
        }
        i++
    }
    return {
        rem_credit: creditLeft,
        rem_players: n,
        added_players: c
    }
}
