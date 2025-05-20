// Play with array methods


// 01. Remove Duplicates form array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const number = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(number);
console.log(result );