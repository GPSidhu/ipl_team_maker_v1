import _ from "lodash";

export function getSubArraysWithinMaxCredit(arr=[8, 7, 9, 8, 10, 11], maxC=26) {
    const n = arr.length;
    printAllSubsetsRec(arr, n, [], maxC);
}

function  printAllSubsetsRec(arr, n, vec, sum) {
    // If remaining sum is 0, then print all 
    // elements of current subset. 
    if (sum == 0) { 
    //for (let i = 0; i < vec.length; i++) {
        console.log(vec)
        return; 
    } 

    // If no remaining elements, 
    if (n == 0) 
        return;

    // We consider two cases for every element. 
    // a) We do not include last element. 
    // b) We include last element in current subset. 
    printAllSubsetsRec(arr, n - 1, vec, sum); 
    // Vector<Integer> v1=new Vector<Integer>(v);
    let v1 = _.cloneDeep(vec);
    v1.push(arr[n - 1]); 
    printAllSubsetsRec(arr, n - 1, v1, sum - arr[n - 1]); 
}