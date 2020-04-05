// time: O(pow(n,2)) actually O(pow(n,1.6)) as right sub tree will be als=ways smaller than the left.
function fibboBruteForce(n){
    if(n ===0 ){
        return 0
    }
    if(n ===  1){
        return 1;
    }
    return fibboBruteForce(n-1) + fibboBruteForce(n-2);
}