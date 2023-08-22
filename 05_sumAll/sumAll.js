// Approach 1
// Iterate with one number as the starting point till the other number and add the numbers; But this complicates the when the larger number is mentioned
// first and then smaller number is mentioned second.
// Also, the performance of this algorithm will be bad, if very large numbers will be added
// const sumAll = function(a, b) {
//   let sum = 0;
//   if ()
//   for (a; a<=b; a++){
//     sum = sum + a;
//   }
// return sum;
// };

// Approach 2
// The sum of any consecutive numbers between two number is, ((max-min)+1 * (min+max))/2
// This solves the above problem

const sumAll = function(a, b){
if (typeof a === 'number' && typeof b === 'number' && a > 0 && b > 0){
  if (a < b){
    let minimum = a;
    let maximum = b;
    return (((maximum - minimum)+1) * (maximum + minimum))/2;
  }
  else {
    let minimum = b;
    let maximum = a;
    return (((maximum - minimum)+1) * (maximum + minimum))/2;
    }
}
else {
return 'ERROR';
}
}




// Do not edit below this line
module.exports = sumAll;
