// Have the function PermutationStep(num) take the num parameter being passed and return the next number greater 
// than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number 
// has no greater permutations, return -1 (ie. 999). 

function PermutationStep(num) { 
    var digits = num.toString().split("").map(function(d){return parseInt(d)});
    
    // find the left most index(i-1) we will be modifiying 
    for (var i = digits.length - 1; i > 0; i--){
       if(digits[i - 1] < digits[i]){
           break;
       }
    }
    
    if (i === 0){
        return -1;
    }
    
    // swap the left most index we are modifity with the smallest value that is larger than the start value
    var swap_index = i - 1;
    var start_value = digits[swap_index];
    
    digits[i-1] = digits[i];
    digits[i] = start_value;
    i++;
    
    for (; i < digits.length; i++){
        if (digits[i] < digits[swap_index] && digits[i] > start_value){
            temp = digits[swap_index];
            digits[swap_index] = digits[i];
            digitis[i] = temp;
        }
    }
    
    // sort the digits to the right of the swap index
    var right_half = digits.splice(swap_index+1).sort(function(a, b){return a-b}).join('');
    var left_half = digits.splice(0, swap_index+1).join('');
    return left_half + right_half;
    
    
}
   
// keep this function call here 
PermutationStep(readline());