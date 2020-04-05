function countingSort(arr){
    let max = findMax(arr), res = [];
    let countArray = new Array(max + 1).fill(0);
    for(let i = 0;i<arr.length;i++){
        countArray[arr[i]]++;
    }
    for(let j =1;j<countArray.length;j++){
        countArray[j] += countArray[j-1];
    }
    for(let k = arr.length-1;k>=0;k--) {
        let idx = --countArray[arr[k]];
        res[idx] = arr[k];
    }
    return res;
}

function findMax(arr){
    let max = Number.MIN_SAFE_INTEGER;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(countingSort([8,9,4,5,7,2,6,3,1]))