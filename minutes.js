// Have the function CountingMinutes(str) take the str parameter being passed which will be two times 
// (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of
//  minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am 
// then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

function GetMinutes(str){
    var t = str.split(":");
    var hours = parseInt(t[0]);
    var minutes = parseInt(t[1].substring(0,2));
    if (str.endsWith('pm')) {
        hours += 12;
    }
    return minutes + hours * 60;
}

function CountingMinutes(str) { 
    var FULL_DAY = 24*60;
    var times = str.split('-');
    var time1 = GetMinutes(times[0]);
    var time2 = GetMinutes(times[1]);
    time2 = time2 < time1 ? time2 + FULL_DAY : time2;
    return time2 - time1;
    
}
   
// keep this function call here 
CountingMinutes(readline());