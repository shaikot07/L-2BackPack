// // simple code genarator 
// // @ts-check

// /**
//  * Encodes a message by shifting each character by a fixed amount.
//  *
//  * @param {string} message
//  * @param {number} shift
//  * @returns {string}
//  */
// export function encodeMessage(message, shift) {
//   return [...message].map(char => {
//     const code = char.charCodeAt(0);
//     return String.fromCharCode(code + shift);
//   }).join('');
// }

// /**
//  * Decodes a message encoded with `encodeMessage`.
//  *
//  * @param {string} encoded
//  * @param {number} shift
//  * @returns {string}
//  */
// export function decodeMessage(encoded, shift) {
//   return encodeMessage(encoded, -shift);
// }
