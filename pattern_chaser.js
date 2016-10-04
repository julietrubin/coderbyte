// Have the function PatternChaser(str) take str which will be a string and return 
// the longest pattern within the string. A pattern for this challenge will be defined as:
//  if at least 2 or more adjacent characters within the string repeat at least twice. So for 
// example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. 
// Your program should return yes/no pattern/null. So if str were "aabejiabkfabed" the output should be yes abe. 
// If str were "123224" the output should return no null. The string may either contain all characters (a through z only), 
// integers, or both. But the parameter will always be a string type. The maximum length for the string being passed in will be 
// 20 characters. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". You must always return the longest pattern possible. 

function FindLongestAtStartIndexes(str, start1, start2){
    var end1 = start1 + 2;
    var end2 = start2 + 2;
    
    var match = "";
    while (end1 < start2 && end2 < str.length + 1 && str.slice(start1, end1) === str.slice(start2, end2)){
        match = str.slice(start1, end1);
        end1 += 1;
        end2 += 1;
    }
    return match; 
}

function PatternChaser(str) { 
    var longestMatch = "";

    if (str.length < 5) {
        return "no null"
    }
    
    for (var i=0; i<str.length-5; i++){
        for (var j=i+2; j<str.length-1; j++){
            pattern = FindLongestAtStartIndexes(str, i, j)
            if (pattern.length > longestMatch.length){
                longestMatch = pattern
            }
        }
    }
    
    if (longestMatch.length > 1){
        return "yes " + longestMatch;
    }
    else {
        return "no null";
    }
    
         
}
   
// keep this function call here 
PatternChaser(readline());