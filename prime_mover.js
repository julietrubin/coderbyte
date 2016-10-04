// Have the function PrimeMover(num) return the numth prime number.
//  The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

function PrimeMover(num) { 
    
    var prime_numbers = []
    
    for (var i=2; i<=Math.pow(10,4); i++){
        var is_prime = true 
        for (var j=0; j<prime_numbers.length; j++){
            if (i % prime_numbers[j] === 0){
                is_prime = false
                break;
            }
        }
        if (is_prime) {
            prime_numbers.push(i)
            if (prime_numbers.length === num){
                return prime_numbers[num-1] 
            } 
        }
       
    }
}
   
// keep this function call here 
PrimeMover(readline());