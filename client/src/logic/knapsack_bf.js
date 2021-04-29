import _ from 'lodash'

export function knapSackBF(W, arr) {
    // W = 16;
    let R = 2; //required num of players
    // console.log('calling brute force knapsack: W: '+W)
    console.log(arr)
    // const MIN_W = _.minBy(arr, (o) => o.credit);
    // console.log('MIN_W: ')
    // console.log(MIN_W)
    return _knapSackUtil(arr, arr.length, W, R, 0)
}

function _knapSackUtil(arr, n, W, R, index) {
    let val_incl, val_excl;
    if (index === n || W < 0)
        return {
            items: [],
            points: 0,
            rem_credit: W
        };

    if (arr[index].credit <= W) {
        val_incl = _knapSackUtil(arr, n, W - arr[index].credit, R, index + 1);
        val_incl.items.push(arr[index]);
        val_incl.points += arr[index].points;
        val_incl.rem_credit = W - arr[index].credit;

        val_excl = _knapSackUtil(arr, n, W, R, index + 1);

        // not only points be maximum, we also need to fulfill
        if (val_incl.points > val_excl.points)
            return val_incl;

        return val_excl;
    } else {
        val_excl = _knapSackUtil(arr, n, W, R, index + 1);
        return val_excl;
    }
}
