// // string puzzle


// // @ts-check

// /**
//  * Returns the middle character(s) of the given word.
//  *
//  * @param {string} word
//  * @returns {string}
//  */
// export function getMiddleCharacter(word) {
//   const len = word.length;
//   const mid = Math.floor(len / 2);
//   return len % 2 === 0
//     ? word.slice(mid - 1, mid + 1)
//     : word[mid];
// }

// /**
//  * Returns true if the word is a palindrome.
//  *
//  * @param {string} word
//  * @returns {boolean}
//  */
// export function isPalindrome(word) {
//   const clean = word.toLowerCase().replace(/\s+/g, '');
//   return clean === clean.split('').reverse().join('');
// }
