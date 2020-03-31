/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let count = 0, currMax = rating[0], currMin =  rating[0];
    for(let i = 0;i<rating.length;i++){
        localCount = 0;
        for(let j = i+1;j<rating.length;j++){
            if(rating[j]>rating[i]){
                for(let k = j+1;k<raitng.length;k++){
                    if(rating[k]>rating[j]){
                        localCount++;
                    }
                    if(localCount === 3){
                        count++;
                    }
                }
                
            }
            
        }
    }
    
    for(let i = 0;i<rating.length;i++){
        localCount = 0;
        for(let j = i+1;j<rating.length;j++){
            if(rating[j]<rating[i]){
                for(let k = j+1;k<raitng.length;k++){
                    if(rating[k]<rating[j]){
                        localCount++;
                    }
                    if(localCount === 3){
                        count++;
                    }
                }
                
            }
            
        }
    }
    return count;
    
};
console.log(numTeams([2,5,3,4,1]));