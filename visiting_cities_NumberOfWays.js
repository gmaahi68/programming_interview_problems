function findNumberOfWays(n, masterVisited){
    console.log("Number of cities: " + n);
    console.log("Already visited cities: " + masterVisited.toString());
    var ways = 0;
    for(var i =0;i<masterVisited.length;i++){
        let temp = visitCurrentNode(n, masterVisited, masterVisited[i])
        console.log("If we start from " + masterVisited[i] + " there are " + temp + "ways to visit all cities.")
        ways += temp;
    }
    console.log("Total : " + ways + " way(s).");
}

function visitCurrentNode(n, visited, index){
    if(visited.length === n){
        return 0;
    }else{
        var indiWays = 0;
        if(index >1 && visited.indexOf(index-1) == -1){
            var newvisted = visited.concat([index-1]);
            indiWays++;
            indiWays += visitCurrentNode(n, newvisted, index-1);
            console.log("sub: "+ (index - 1) + " from " + visited.toString() + "  has "   + indiWays + " ways.");
        }

        if(index < n && visited.indexOf(index+1) == -1){
            var newvisted = visited.concat([index+1]);
            indiWays++;
            indiWays += visitCurrentNode(n, newvisted, index+1);
            console.log("add: " + (index + 1) + " to " + visited.toString() + "  has "   + indiWays + " ways.");
        }
        return indiWays;
    }
}

findNumberOfWays(5, [1,5]);