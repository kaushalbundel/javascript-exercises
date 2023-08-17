const repeatString = function(string, repeat) {
    let emptyString = ""
if (repeat === 0){
    emptyString =  "";
}
else if (repeat < 0){
    emptyString = "ERROR";
}
else {
    for(let i = 0; i < repeat; i++){
        emptyString = emptyString + string;
}
}
return emptyString;}

// Do not edit below this line
module.exports = repeatString;
