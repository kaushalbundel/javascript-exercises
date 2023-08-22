const reverseString = function(string) {
let finalString = "";
let stringLength = string.length
    for(let i = stringLength - 1; i >= 0; i--){
        finalString = finalString + string[i];
}
    return finalString;
}

// Do not edit below this line
module.exports = reverseString;
