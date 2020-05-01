// 1296. Divide Array in Sets of K Consecutive Numbers
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {

    if(nums.length % k !== 0){
        return false;
    }else{
        let map = new Map();
        for(let i =0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i], 2);
            }else{
                map.set(nums[i], 1);
            }
        }
        console.log(map);       
    }
};
isPossibleDivide([1,2,3,4,1,1],3);