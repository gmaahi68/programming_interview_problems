// Print all subsets of a string
function printAllSubsets(str, index, current){
   if(index === str.length){
       console.log(current);
       return;
   }

   printAllSubsets(str, index+1, current+str[index]);
   printAllSubsets(str, index+1, current);
}
printAllSubsets("abcd", 0, "");

function printAllSubsetsItr(str){
    
}