import _ from 'lodash'
import {
    knapSack
} from './knapsack_bb'
import {
    knapSackBF
} from './knapsack_bf'
import {
    getSubArraysWithinMaxCredit
} from './util'

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
    //console.log(processedData);
    //for(let o in TEAM_TYPES) {
        let config = {
            team_type: TEAM_TYPES[0],
            max_credit: 100,
            constraints: constraints,
            t1: team1.code,
            t2: team2.code
        }
        let base = selectTeam(data, config)
        console.log(base)
    //}
        let o_t1 = {name: 'Team 1'}
        o_t1.players = {};
        o_t1.players.wicketkeepers = base.players.filter((p) => p.role === 'wk');
        o_t1.players.batsmen = base.players.filter((p) => p.role === 'bt');
        o_t1.players.allrounders = base.players.filter((p) => p.role === 'ar');
        o_t1.players.bowlers = base.players.filter((p) => p.role === 'bl');
        o_t1.playingCount = base.players.length;
        res.push(o_t1);
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

// select min players in each category i.e. wk, bt, ar, bl
function selectTeam(data, config) {
    const teamType = config.team_type;

    // in case of biased, start with the highest point player of 
    switch(teamType.type) {
        case 'biased': return getBiasedTeam(data, config, teamType.team)
                break;

        case 'balanced': return getBalancedTeam(data, config) 
                break;
        
        default: //random
    }
    
    return {}
}


function getBiasedTeam(data, config, t /** 1 or 2 */) { 
    let players = [];
    let creditLeft = config.max_credit;
    const constraints = config.constraints;
    // const fav_team = t === 1 ? data.team1 : team2;
    // const other_team = t !== 1 ? data.team1 : team2;
    const fav_team_sorted = t === 1 ? _.cloneDeep(data.t1_sorted) : _.cloneDeep(data.t2_sorted);
    const other_team_sorted = t !== 1 ? _.cloneDeep(data.t1_sorted) : _.cloneDeep(data.t2_sorted);
    // const fav_team_code =  t === 1 ? config.t1 : config.t2;
    // const other_team_code = t !== 1 ? config.t1 : config.t2;
    let fav_team_count = 0;
    // let other_team_count = 0;

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
        if (totalPlayersToSelect === 0 || fav_team_count === constraints.max)
            break;
    }

    // find what are remaining min players and add from other team
    if (totalPlayersToSelect > 0)
        Object.keys(counts).forEach((k) => {
            if (counts[k] < constraints[k][0]) {
                let ot = addPlayer(k, other_team_sorted, constraints[k][0] - counts[k], creditLeft, players);
                creditLeft = ot.rem_credit;
                if (ot.rem_players === 0) // constraints met update counts
                    counts[k] = constraints[k][0]
            }
        })

    // need to select remaining players from other team with remaining credits left
    totalPlayersToSelect = 11 - players.length;

    let testTeam = other_team_sorted.filter((p, i) => [0, 1 ].indexOf(i) === -1)
    const remPlayers = getMaxCreditPlayers(other_team_sorted, 16, 2); //creditLeft, totalPlayersToSelect)
    // console.log('getMaxCreditPlayers')
    // console.log(remPlayers)
    //let v = knapSack(creditLeft, other_team_sorted)
    //console.log(v)
    //let val = knapSackBF(16, testTeam) //creditLeft, testTeam)
    // players = [...players, ...remPlayers]
    //console.log('bruteforce')
    //console.log(val)
    getSubArraysWithinMaxCredit()

    debugger;
    return {
        rem_credit: remPlayers.rem_credit,
        players: [...players, ...remPlayers.players],
        counts: counts
    }
}

function addPlayer(role/** 'wk', 'bt',... */, playersList/** array */, n, creditLeft, result/** array */) {
    let i = 0;
    while(n > 0 && i < playersList.length) {
        if (playersList[i].role === role) {
            result.push(playersList[i]);
            creditLeft -= playersList[i].credit;
            n--;
            playersList.splice(i, 1);
            i--
        }
        i++
    }
    return {
        rem_credit: creditLeft,
        rem_players: n
    }
}

function getMaxCreditPlayers(players, creditLeft, n /** number of players needed */) {
    // let result = [];
    //debugger
    return _getMaxCreditPlayers(players, 0, [], n, n, creditLeft)
}

function _getMaxCreditPlayers(players, currentIndex, result, totalN, currentN, creditLeft) {
    //debugger
    let p = players[currentIndex];
    if (currentIndex >= players.length || currentN === 0)
        return {
            rem_credit: creditLeft,
            players: result
        }

    let r1, r2;
    // when current player is selected
    if (p.credit <= creditLeft) {
        let res = _.cloneDeep(result)
        res.push(p)
        r1 = _getMaxCreditPlayers(players, currentIndex + 1, res, totalN, currentN-1, creditLeft - p.credit)

        // when current player is not selected
        r2 = _getMaxCreditPlayers(players, currentIndex + 1, result, totalN, currentN, creditLeft)

        // if both paths have found required players
        if (r1 && r2) { // && r1.players.length === totalN && r1.players.length === totalN) {
            // select one with less credits remaining
            let r1_credit_sum = getCreditSum(r1.players)
            let r2_credit_sum = getCreditSum(r2.players)
            if (r1_credit_sum === r2_credit_sum)
                return {
                    players: r1.rem_credit < r2.rem_credit ? r1.players : r2.players,
                    rem_credit: r1.rem_credit < r2.rem_credit ? r1.rem_credit : r2.rem_credit,
                    points: r1.rem_credit < r2.rem_credit ? r1_credit_sum : r2_credit_sum
                }
            if (r1_credit_sum > r2_credit_sum)
                return {
                    players: r1.players,
                    rem_credit: r1.rem_credit,
                    points: r1_credit_sum
                }
            else 
                return {
                    players: r2.players,
                    rem_credit: r2.rem_credit,
                    points: r2_credit_sum
                }
        }

    } else {
        // when current player is not selected
        r2 = _getMaxCreditPlayers(players, currentIndex + 1, result, totalN, currentN, creditLeft)
        let r2_credit_sum = getCreditSum(r2.players)
        return {
            players: r2.players,
            rem_credit: r2.rem_credit,
            points: r2_credit_sum
        }
    }

    // return the one with all the required players
    // if (r1 && r1.players.length === totalN) {
    //     return {
    //         players: r1.players,
    //         rem_credit: r1.rem_credit
    //     }
    // }

    // return {
    //     players: r2.players,
    //     rem_credit: r2.rem_credit
    // }
}

function getCreditSum(list) {
    let sum = 0;
    list && list.forEach((p) => sum += p.points) //p.credit
    return sum;
}

// function getMinMaxCredit(playerList) {
//     let min = 9999, max = 0;
//     playerList && playerList.forEach((p) => {
//         if (p.credit > max)
//             max = p.credit;
//         if (p.credit < min)
//             min = p.credit
//     })
//     return {
//         min: min,
//         max: max
//     }
// }

function canSelectPlayer(player/** object */, counts/** object */, constraints/** object */, creditLeft/** number */) {
    if (counts[player.role] < constraints[player.role][1] && (creditLeft - player.credit > 0)) {
        return true
    }
    return false
}

function getBalancedTeam() {

}




// returns object containing 
// -> array of "n" number of players (can be < n) with total
// -> creditLeft
// overall credit <= maxCredit from given array of "players"
// function getPlayers(players, n, role /** wk, bt, ar, bl */, maxCredit) {
//     let result = {
//         players: [],
//         rem_credit: maxCredit
//     }
//     if (!players || players.length === 0)
//         return result

//     // sort list by points
//     const sortedByPoints = _.sortBy(players, ['points'], ['desc']);

//     // select first n players from the list
//     let i = 0;
//     while(i < n && n < players.length) {
//         result.players.push(players[i]);
//         result.rem_credit -= players[i].credit;
//         i++
//     }
//     return result
// }


