var nums = [12,7,11,15,2];
var target = 9;
var twoSum = function(nums, target) {
    let numLength = nums.length, numMap = {};
    for(let i = 0; i<numLength; i++){
        numMap[nums[i]] = i;
    }
    console.log(numMap);
    for(num in numMap){
        let diff = target-parseInt(num);
        if(numMap.hasOwnProperty(diff)){
            let init = numMap[num], en = numMap[diff];
            return [init, en].sort();
        }
    }
};
console.log(twoSum(nums, target));