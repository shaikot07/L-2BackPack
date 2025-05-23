// Play with array methods


// 01. Remove Duplicates form array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const number = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(number);
// console.log(result );
// =============try to data stackture==================
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        
        for (let j = 0; j < len - 1; j++) {
            
            if (arr[j] > arr[j + 1]) {
              //  swape position and store value temporary
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr; 
}


let numbers = [64, 34, 25, 12, 22, 11, 90];
// console.log(bubbleSort(numbers)); 

const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the oven.
 *

 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Given a number of layers, determines the total preparation time.

 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calculates the total working time. (prep time + oven time)
 *
\
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}




// 02. Find the second largest number in an array
// Approach: Iterate through the array, keeping track of the largest and second largest numbers.

function secondLargest(arr) {
  if (arr.length < 2) return null;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(secondLargest(arr));