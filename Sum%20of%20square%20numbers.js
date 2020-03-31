// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i = 1;i<=Math.sqrt(c);i++){
        let a  = Math.sqrt(c-i*i);
        if(Number.isInteger(a)){
            return true;
        }
    }
    return false;    
};

console.log(judgeSquareSum(4));