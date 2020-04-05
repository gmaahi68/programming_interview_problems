// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?
//Bruteforce
//Time: O(pow(n,2))
//Space: O()
function isuniqueBruteforce(str){
    for(let i = 0 ;i <str.length;i++){
        for(let j = i+1;j<str.length;j++){
            if(str[i]===str[j]){
                return false;
            }
        }
    }
    return true;
}
//Time: O(n)
//Space: O(n)

function isuniqueUsingMap(str){
    let map = new Map();
    for(let i = 0 ;i <str.length;i++){
        if(map.has(str[i])){
            return false;
        }else{
            map.set(str[i],0);
        }
    }
    return true;
}

//Time: O(n)
//Space: O(n)
// We can further reduce the DS and space usage if the alphabet is less than 32 in programming languages like Java, not sure in java script though.
// forgot to add the edge case if the length of the string is more than the length of alphabet
function isuniqueWithoutUsingAdditionalDS(str){
    let countArr = new Array(128).fill(false);
    for(let i = 0 ;i <str.length;i++){
        if(countArr[str.charCodeAt(i)]){
            return false;
        }else{
            countArr[str.charCodeAt(i)] = true;
        }
    }
    return true;
}

console.log(isuniqueBruteforce("abcsdsd"));
console.log(isuniqueBruteforce("abcdef"));
console.log(isuniqueUsingMap("abcsdsd"));
console.log(isuniqueUsingMap("abcdef"));
console.log(isuniqueWithoutUsingAdditionalDS("abcsdsd"));
console.log(isuniqueWithoutUsingAdditionalDS("abcdef"));

