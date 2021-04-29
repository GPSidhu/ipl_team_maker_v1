import _ from "lodash";

export function getMaxPointPlayersUnderCredit(players, maxCredit) {
    const options = getMaxPlayersInCredit(players, maxCredit);
    let maxPoints = 0, finalIndex = -1;
    for (let i = 0; i < options.length; i++) {
        const p = getSumByKey(options[i], 'points');
        if (p > maxPoints) {
            maxPoints = p;
            finalIndex = i;
        }
    }
    if (finalIndex !== -1) {
        return {
            rem_credit: maxCredit - getSumByKey(options[finalIndex], 'credit'),
            players: options[finalIndex]
        }
    }
    
    return {
        rem_credit: maxCredit,
        players: []
    };
}

// returns array of arrays
export function getMaxPlayersInCredit(arr=[8, 7, 9, 8, 10, 11], maxCredit=26) {
    const n = arr.length;
    let res = []
    _getMaxPlayersInCredit(arr, n, [], maxCredit, res);
    // console.log('_getMaxPlayersInCredit')
    // console.log(res)
    return res;
}

function  _getMaxPlayersInCredit(list, n, currentList, creditLeft, res) {
    // If remaining sum is 0, then print all 
    // elements of current subset. 
    if (creditLeft == 0) {
        res.push(currentList)
        return; 
    } 

    // If no remaining elements, 
    if (n == 0) 
        return;

    // do not include last element    
    _getMaxPlayersInCredit(list, n - 1, currentList, creditLeft, res);

    let cL = _.cloneDeep(currentList);
    cL.push(list[n - 1]); 
    // include last element in current subset
    _getMaxPlayersInCredit(list, n - 1, cL, creditLeft - list[n - 1].credit, res); 
}

export function getMinMaxCredit(playerList) {
    let min = 9999, max = 0;
    playerList && playerList.forEach((p) => {
        if (p.credit > max)
            max = p.credit;
        if (p.credit < min)
            min = p.credit
    })
    return {
        min: min,
        max: max
    }
}

export function canSelectPlayer(player/** object */, counts/** object */, constraints/** object */, creditLeft/** number */) {
    if (counts[player.role] < constraints[player.role][1] && (creditLeft - player.credit > 0)) {
        return true
    }
    return false
}

export function getSumByKey(list, key/** 'points', 'credit' */) {
    let sum = 0;
    list && list.forEach((p) => sum += p[key])
    return sum;
}
