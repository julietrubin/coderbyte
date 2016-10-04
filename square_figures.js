// Have the function SquareFigures(num) read num which will be an integer. 
// Your program should return the smallest integer that when squared has a length equal to num. 
// For example: if num is 6 then your program should output 317 because 317^2 = 100489 while 316^2 = 99856 
// which does not have a length of six. 

function SquareFigures(num) { 
    if (num <= 1){
        return 0;
    }
    for(var i=Math.pow(10,num-1); i< Math.pow(10,num); i++){
        if (Math.sqrt(i) %1 === 0){
            return Math.sqrt(i);
        }
    }
    return 0;
         
}
   
// keep this function call here 
SquareFigures(readline());