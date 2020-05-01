/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let grid = [];
    grid[0] = A[0];
    for(let i = 1; i<A.length;i++){
        if(i>0){
            grid[i] = new Array(A.length);
        }
        for(let j =0;j<A.length;j++){
            if(j === 0){
               grid[i][j] = A[i][j] + Math.min(grid[i-1][0], grid[i-1][1]); 
            }else if(j === A.length-1){
                grid[i][j] = A[i][j] + Math.min(grid[i-1][j], grid[i-1][j-1]);
            }else
                grid[i][j] = A[i][j] + Math.min(grid[i-1][j], grid[i-1][j-1],grid[i-1][j+1]);
            }
        }
    let min = Number.MAX_SAFE_INTEGER;
    for(let g = 0;g<A.length;g++){
        if(grid[A.length-1][g]<min){
            min = grid[A.length-1][g];
        }
    }
    return min;
    }   