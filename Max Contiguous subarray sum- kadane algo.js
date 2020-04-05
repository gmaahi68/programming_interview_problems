function kadane(arr){
    let aux = [arr[0]], maxSum = Number.MIN_SAFE_INTEGER, endingIndex = -1, subarr = [];
    for(let i = 1; i<arr.length;i++){
        aux[i] = Math.max(arr[i], aux[i-1] + arr[i]);
    }
    for(let j = 0; j<aux.length;j++){
        if(maxSum < aux[j]){
            maxSum = aux[j];
            endingIndex = j;
        }
    }
    let tempSum = maxSum;
    while(tempSum !==0){
        subarr.push(arr[endingIndex]);
        tempSum-=arr[endingIndex];
        endingIndex--;
    }
    console.log("subarr", subarr)
    return maxSum;
}

console.log(kadane([8,9,4,5,7,2,6,3,1]))
console.log(kadane([8,-9,4,-5,7,2,6,-3,1]))