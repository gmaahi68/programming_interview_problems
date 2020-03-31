function addComma(index){
    let num = index;
    num = num.replace(",","");
    let parts = num.toString().split(".");
    let res = "";
    for(let i = parts[0].length -1, j = 0; i>=0 && j<parts[0].length; i--, j++){
      res = parts[0][i] + res;
      if(j!==0 && j%3 === 0){
        res = "," + res
      }
    }
    parts[0] = res;
    console.log(parts.join("."));
  }

  addComma("122323242434")