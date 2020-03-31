/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let ans = [];
    for(let i = 0;i<nums.length;i++){
        let res = findDiv(nums[i]);
        if(res.count === 4){
            ans.push(res.div[0] + res.div[1] + res.div[2] + res.div[3])
        }
    }
    return ans;
    
};

function findDiv(num){
    let res= {
        count: 2,
        div:[1,21]
    }
let sq = Math.sqrt(num);
    for(let i =2; i<sq;i++){
        if(num%i === 0){
            res.count++;
            res.div.push(i);
            res.div.push(num/i);
            res.count++;
        }
        
    }
return res;
}

console.log(sumFourDivisors([21,21]))