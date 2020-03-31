/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = "";
    for(let i = s.length-1; i>=0;i--){
        if(s[i] === "#"){
             number = s[i-2] + s[i-1];
            i = i-2;
        }else {
             number = s[i];            
        }
        res = String.fromCharCode(96 + parseInt(number)) + res;
    }
    return res;
};
freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")