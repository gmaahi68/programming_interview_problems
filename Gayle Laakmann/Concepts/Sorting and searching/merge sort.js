function mergeSort(arr, low, high){
    let mid = Math.floor((high + low)/2);
    if(low<high){
        mergeSort(arr,low,mid);
        mergeSort(arr, mid+1, high);
        merge(arr,low,mid,high);
    }
    return arr;
}
function merge(arr, low, mid, high){
    let i = low, j = mid+1, res = [], k = 0;
    while(i<=mid && j<=high){
        if(arr[i]<arr[j]){
            res[k++] = arr[i++];
        }else{
            res[k++] =  arr[j++];
        }
    }
    while(i<=mid){
        res[k++] = arr[i++];
    }
    while(j<=high){
        res[k++] = arr[j++];
    }
    for(let r = low,l = 0;r<=high;r++,l++){
        arr[r] = res[l];
    }
}

console.log(mergeSort([17,21,1,23,4,6,3,67,45,-2323,1,23,17], 0, 12));