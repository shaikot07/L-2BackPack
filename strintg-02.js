// @ts-check

/**
 * Return a formal greeting using the guest's name.
 *
 * @param {string} name - The name of the guest.
 * @returns {string}
 */
export function greetGuest(name) {
  return `Welcome, ${name.trim()}!`;
}

/**
 * Format the guest name for a formal invitation.
 *
 * @param {string} name - The name to format.
 * @returns {string}
 */
export function formatGuestName(name) {
  return name.trim().split(' ')
    .map(part => part[0].toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}
