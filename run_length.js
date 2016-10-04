// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using 
// the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting 
// that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. 
// The string will not contain any numbers, punctuation, or symbols. 

function RunLength(str) { 
    count = 1
    current = str[0]
    r = ""
    
    for (var i=1; i<str.length; i++){
        if (str[i] === current){
            count++
        } 
        else {
            r += count + current
            current = str[i]
            count = 1
        }
    }
    r += count + current
    
    return r
}
   
// keep this function call here 
RunLength(readline());