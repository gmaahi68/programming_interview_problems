function removeRedundants(str){
    var newStr =str, prev ="";
    while(newStr.length>2 && prev !== newStr){
        prev = newStr;
        for(var i =0; i< prev.length-1; i++){
            if(prev[i]==prev[i+1]){
                newStr = prev.slice(0,i);
                if((i+2)<prev.length){
                    newStr+= prev.slice(i+2);
                }
            }
        }
        
    }
    return newStr;
}

console.log(removeRedundants("abaa"));