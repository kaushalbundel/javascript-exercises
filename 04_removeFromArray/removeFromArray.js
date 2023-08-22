//Approach 1
// The argument list needs to be converted to an array first
// Array can be broken into two parts, 1. The list from which results will be checked and 2. The list which will be checked
// The elements from the first list will be iterated and matched with the second list, if the elements are same then we don't do anything, if the elements
// are different then we store them in an empty list
//
// Approach 2
// Point 1 and 2 will be same in approach 1, but last point ie. removing the elements of array on the basis of another array is different
// here we are checking index of elements, from one array and filtering them if the elements are present if their index is not present(meaning the elements in list are not matching with
// check)
// These elements will be captured in another list called finalList
const removeFromArray = function(a) {
  let finalList = [];
  const args = Array.from(arguments)
  list = args[0];
  check = args.slice(1,);
  // console.log(list, check);  // for checking if the *argument logic is working correctly
  finalList = list.filter(function(el){ return check.indexOf(el) <0 });
  return finalList;
}



// Do not edit below this line
module.exports = removeFromArray;
