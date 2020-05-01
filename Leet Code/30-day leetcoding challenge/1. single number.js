// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// Bruteforce: 
// Time:O(pow(n, 2));
// Memory: O(1)

// using map
// Time : O(n)
// Memory: O((n-1)/2) ~ O(n)

// using bit manipulation
// time: O(n)
// Memory: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numToFind = 0;
    for(let i = 0;i<nums.length;i+=1){
        numToFind^=nums[i];
    }
    return numToFind;
    
};