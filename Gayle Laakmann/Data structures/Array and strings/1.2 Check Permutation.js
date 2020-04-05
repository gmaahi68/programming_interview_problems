// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.
// time:O(pow(n,2))
// space:O(1)
function checkPermutationBruteForce(firstStr, secStr){
    if(firstStr.length === secStr.length){
        for(let i = 0;i<firstStr.length;i++){
            let charFound = false;
            for(let j = 0; j<secStr.length;j++){
                if(firstStr[i] === secStr[j]){
                    charFound = true;
                    break;
                }
            }
            if(!charFound){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }

}

// time:O(pow(n,2))
// space:O(1)
// two independant for loops and a map of length of the string.
function checkPermutationOptimized(firstStr, secStr){
    if(firstStr.length === secStr.length){
        let map = new Map();
        for(let i = 0;i<firstStr.length;i++){
            if(map.has(firstStr[i])){
                const count = map.get(firstStr[i]) + 1
                map.set(firstStr[i], count);
            }else{
                map.set(firstStr[i],1);
            }
        }
        for(let i = 0;i<secStr.length;i++){
            if(map.has(secStr[i]) && map.get(secStr[i]) > 0){
                const count = map.get(secStr[i]) - 1
                map.set(secStr[i], count);
            }else{
                return false;
            }
        }
        return true;
    }else{
        return false;
    }

}
console.log(checkPermutationBruteForce("abcd", "dcab"));
console.log(checkPermutationBruteForce("abcd", "dcasaab"));
console.log(checkPermutationOptimized("abcd", "dcab"));
console.log(checkPermutationOptimized("abcd", "dcasaab"));



