function getSocialCircles(N, matrix){
    var parent = [];
    var result = 0;
    for(let i = 0; i<N; i++){
        parent[i] = -1;
    }
    for(let j = 1; j<N;j++){
        for(let k = 0; k< j; k++){
            if(matrix[j][k] ==='Y'){
                union(parent, j, k);
            }
                
        }
    }
    while(parent.indexOf(-1) !== -1){
        result++;
        parent.splice(parent.indexOf(-1), 1);
    }
    console.log("Sample Output: " + result);
}
    function find(parent, i){
        if (parent[i] == -1){
          return i;
        }
        return find(parent, parent[i]); 
    }
  

    function union( parent,  x,  y){
        var xset = find(parent, x); 
        var yset = find(parent, y); 
        if(xset!=yset){
           parent[xset] = yset; 
        }
    }

// var given = [['Y', 'Y', 'N', 'N'],['Y', 'Y', 'Y', 'N'],['N', 'Y', 'Y', 'N'],['N', 'N', 'N', 'Y']];

var given = [['Y', 'N', 'N', 'N', 'N'],[ 'N', 'Y', 'N', 'N', 'N'],['N','N', 'Y','N', 'N'],['N', 'N', 'N', 'Y', 'N'],['N', 'N', 'N', 'N', 'Y']];


getSocialCircles(5, given);
