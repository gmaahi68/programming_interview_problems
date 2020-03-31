function absolute(num){
    return Math.abs(num);
}

function cTof(c){
    return (c*9)/5 + 32;
}

function quadRoots(a,b,c){

    var discSq = (Math.pow(b,2)- (4*a*c));
    if(a===0){
        console.log("Invalid");
    }else if(discSq<0){
        console.log("Imaginary");
    }else{
        var disc = Math.sqrt(discSq);
        var root1 = (-(b) + disc)/(2*a);
        var root2 = (-(b) - disc)/(2*a);
        console.log(`${Math.floor(root1)} ${Math.floor(root2)}`);
    } 

}

function factorialRecursive(n){
    if(n===1){
        return 1
    }else{
        return n*factorial(n-1);
    }
}

function factorialIterative(n){
    var result = 1n;
    for(let i = 2n; i<=n;i++){
        result*= i;
    }
    return result;
}

// console.log(factorialIterative(180));

function digitsInFactorial(num){
    var len = 0.0;
    for(var i = 1;i<=num;i++){
        len += Math.log10(i);
    }
    return Math.floor(len) + 1;
}

digitsInFactorial(8);