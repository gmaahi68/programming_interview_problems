function radixSort(arr){
    let max = findMax(arr);
    for(let pos = 1; Math.floor(max/pos)>0; pos*=10){
        arr = countingSort(arr, pos);
    }
    return arr;
}
function countingSort(arr, pos){
    let res = []
    let countArray = new Array(10).fill(0);
    for(let i = 0;i<arr.length;i++){
        let digit = Math.floor(arr[i]/pos)%10;
        countArray[digit]++;
    }
    for(let j =1;j<countArray.length;j++){
        countArray[j] += countArray[j-1];
    }
    for(let k = arr.length-1;k>=0;k--) {
        let digit = Math.floor(arr[k]/pos)%10;
        let idx = --countArray[digit];
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

console.log("ans", radixSort([128,29,435,534,107,82,634,653,111]))