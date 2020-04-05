// 5376. Minimum Subsequence in Non-Increasing Order

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let sum = 0;
    let arr = new Array(101).fill(0);
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
        arr[nums[i]]++;
    }
    let finalSum = 0, res = 0, diff = 0;
    for(let j = 100;j>0;j--){
        finalSum += arr[j]*j;
        if(finalSum>(sum-finalSum)){
            res = j;
            diff = sum-finalSum;
            break;
        }
    }
        let ans = [];
        for(let k = 100; k>=res;k--){
            for(let r = 0;r<arr[k];r++){
                ans.push(k);
            }
        }
    return ans;
};

console.log(minSubsequence([4,3,10,9,8]))