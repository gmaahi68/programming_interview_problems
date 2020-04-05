function quickSort(arr, low, high){
    if(low<high){
        let j = partition(arr, low, high);
        quickSort(arr, low, j);
        quickSort(arr, j+1, high);
    }
    return arr;
}
function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
function partition(arr, low, high){
    let i = low, j = high, pivot = arr[low];
    while(i<j){
        do{
            i++;
        }while(pivot>=arr[i]);
        do{
            j--;
        }while(pivot<arr[j]);
        if(i<j){
            swap(arr, i,j);
        }
    }
    swap(arr, low,j);
    return j;
}
console.log(quickSort([-78,97,34,-56,23,13,7], 0 , 7));