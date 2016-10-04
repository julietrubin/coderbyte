// Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. 
// That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16
//  both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 


function Factors(num){
    //what about itself
    r = []
    for (var i=1; i<=num; i++){
        if (num % i === 0){
            r.push(i)
        }   
    }
    return r
}

function Division(num1,num2) { 
    var factors1 = Factors(num1)
    var factors2 = Factors(num2)
    var intersection_factors = factors1.filter(function(value) { 
                                   return factors2.indexOf(value) > -1;
                               });
    return intersection_factors.reverse()[0]
}
   
// keep this function call here 
Division(readline());