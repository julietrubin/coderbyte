// Have the function StringScramble(str1,str2) take both parameters being passed and 
// return the string true if a portion of str1 characters can be rearranged to match str2, 
// otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" 
// the output should return true. Punctuation and symbols will not be entered with the parameters. 

function stringScramble(str1,str2) { 
  for (var i=0; i < str2.length; i++){
      character = str2[i] 
      
      if (str1.split(character).length < str2.split(character).length){
          return false
      }
  }
  return true; 
         
}
   
// keep this function call here 
stringScramble(readline());
