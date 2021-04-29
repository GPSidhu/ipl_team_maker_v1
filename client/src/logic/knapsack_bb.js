import _ from 'lodash'
import { Queue } from './queue'


const a = [
    { credit: 8.5, points: 257 },
    { credit: 10.5, points: 193 },
    { credit: 8.5, points: 135 },
    { credit: 8.5, points: 94 },
    { credit: 9.5, points: 85 },
    { credit: 8.5, points: 85}
]
// Using branch and bound as credits can be decimal values

// select players from "arr" such as sum of points is maximum and sum of credits is <= W
export function knapSack(W/** max credit */, arr/** list of players */) {
    let arrList = _.cloneDeep(arr);
    // let arrList = _.cloneDeep(a);
    W = 27
    const n = arrList.length;
    console.log(arrList)

    // sorting by value per unit weight
    arrList.sort((a, b) => ((b.points/b.credit) - (a.points/a.credit)))

    let queue = new Queue();
    // let u = new Node(-1 /** level */, 0 /** profit */, null /** bound */, 0 /** weight */);
    let u = {
        level: -1,
        profit: 0,
        weight: 0
    }, v = {}; 

    // dummy node at starting
    queue.enqueue(u);

    // One by one extract an item from decision tree
    // compute profit of all children of extracted item
    // and keep saving maxProfit
    let maxProfit = 0;
    while (!queue.isEmpty()) {
        // Dequeue a node
        u = queue.dequeue();
  
        // If it is starting node, assign level 0
        if (u.level === -1)
            v.level = 0;
  
        // If there is nothing on next level
        if (u.level === n-1)
            continue;
  
        // Else if not last node, then increment level,
        // and compute profit of children nodes.
        v.level = u.level + 1;
  
        // Taking current level's item add current
        // level's weight and value to node u's
        // weight and value
        v.weight = u.weight + arrList[v.level].credit;
        v.profit = u.profit + arrList[v.level].points;
  
        // If cumulated weight is less than W and
        // profit is greater than previous profit,
        // update maxprofit
        if (v.weight <= W && v.profit > maxProfit)
            maxProfit = v.profit;
  
        // Get the upper bound on profit to decide
        // whether to add v to Q or not.
        v.bound = bound(v, n, W, arr);
  
        // If bound value is greater than profit,
        // then only push into queue for further
        // consideration
        if (v.bound > maxProfit)
            queue.enqueue(v);
  
        // Do the same thing,  but Without taking
        // the item in knapsack
        v.weight = u.weight;
        v.profit = u.profit;
        v.bound = bound(v, n, W, arr);
        if (v.bound > maxProfit)
            queue.enqueue(v);
    }
  
    return maxProfit;
}

// Returns bound of profit in subtree rooted with u.
// This function mainly uses Greedy solution to find
// an upper bound on maximum profit.
function bound(u/** Object */, n /** number */, W /** number */, arr)
{
    // if weight overcomes the knapsack capacity, return
    // 0 as expected bound
    if (u.weight >= W)
        return 0;
  
    // initialize bound on profit by current profit
    let profit_bound = u.profit;
  
    // start including items from index 1 more to current
    // item index
    let j = u.level + 1;
    let totweight = u.weight;
  
    // checking index condition and knapsack capacity
    // condition
    while ((j < n) && (totweight + arr[j].credit <= W))
    {
        totweight    += arr[j].credit;
        profit_bound += arr[j].points;
        j++;
    }
  
    // If k is not n, include last item partially for
    // upper bound on profit
    if (j < n)
        profit_bound += (W - totweight) * arr[j].points /
                                         arr[j].credit;
  
    return profit_bound;
}

 