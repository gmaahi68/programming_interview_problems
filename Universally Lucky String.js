function isUnivLucky(str){
    var treatedStr = str.toLowerCase();
    var charMap = {};
    var strlen = str.length;
    for(let i = 0; i< strlen; i++){
        if(charMap.hasOwnProperty(str[i])){
            charMap[str[i]] += 1;
        }else{
            charMap[str[i]] = 1;
        }
    }
    var keys = Object.keys(charMap);
    var keylen = keys.length;
    var subtractFlag = false;
    currentCharCount = charMap[keys[0]];
    for(let j = 1; j< keylen; j++){
        if(currentCharCount == charMap[keys[j]]){
            continue;
        }else if(!subtractFlag && Math.abs(currentCharCount - charMap[keys[j]]) == 1){
            subtractFlag = true;
        }else{
            console.log("No");
            return;
        }
    }
    console.log("YES");

}

// isUnivLucky("aabbccd");
// isUnivLucky("aaabbbccccc");