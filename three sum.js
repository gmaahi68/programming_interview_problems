function threeSum(arr, target){
    let sortedArr = arr.sort((a,b)=>{return a-b;})
    for(let i =0;i<sortedArr.length-1;i++){
        let l = i+1;
        let r = sortedArr.length - 1;
        while(l<r){
            if(sortedArr[i] + sortedArr[l] + sortedArr[r] === target){
                console.log(sortedArr[i] , sortedArr[l] , sortedArr[r]);
                l++; r--;
            }else if(sortedArr[i] + sortedArr[l] + sortedArr[r] < target){
                l++;
            } else if(sortedArr[i] + sortedArr[l] + sortedArr[r] > target){
                 r--;
            }
        }
    }
}

threeSum([2,3,5,7,9,10,4,11,9, 0, 0, 23], 23)