/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
*/
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let result = [];
    debugger;
    if(n===1){
        result.push(0);
    }else if(n%2===0){
        result = makePairs(n, result);
    }else{
        result = breakdown(n, result);
    }
    console.log(result);
    var sum =0;
    result.reduce((sum, b)=> {return sum + b});
    console.log(sum)
    return result;
};

var makePairs = function(n, res){
    for(var i = 1; i<n/2+1; i++){
        res.push(i);
        res.push(-i);
    }
    return res;
}
// or we could have just added a zero for the odd element

var breakdown = function(n, result){
    result.push(n);
    if(n>2){
        result = makePairs(n-3, result);
    }        
    var part1 = Math.floor(n/2);
    var part2 = Math.ceil(n/2);
    result.push(-part1);
    result.push(-part2);
    return result;
}

sumZero(5);