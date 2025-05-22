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