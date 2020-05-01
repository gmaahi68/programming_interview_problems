//5363. Reducing Dishes
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    let max = 0;
    let sortedSat = satisfaction.sort((a,b)=>{return a-b;});
    for(let i = 0;i<=sortedSat.length;i++){
        let tempMax = 0;
        for(let j=i,t=1;j<sortedSat.length;j++,t++){
            tempMax += t*sortedSat[j];
        }
        if(tempMax>max){
            max = tempMax;
        }
    }
    return max;
};

console.log(maxSatisfaction([-1,-8,0,5,-9]));