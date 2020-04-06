/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = [];
    for(let i =0;i<grid.length;i++){
        dp[i] = new Array(grid[0].length);        
        for(let j =0 ;j<grid[0].length;j++){
            if(i===0 && j===0){
                dp[i][j] = grid[i][j];
            } else if(i === 0){
                dp[i][j] = dp[i][j-1] + grid[i][j];
            }else if(j===0){
                dp[i][j] = dp[i-1][j] + grid[i][j];
            }else{
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
            }
        }
    }
    console.log(dp);
    return dp[grid.length-1][grid[0].length-1];
    
};