// @ts-check
//
// 👋🏽 Hi again!
//
// A freelance project management system needs functions to calculate rates and budgets.

/**
 * Calculates the day rate based on an hourly rate.
 *
 * @param {number} ratePerHour The rate per hour.
 * @returns {number} The rate per day.
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8; // Assuming 8 hours in a day
}

/**
 * Calculates the number of days within a given budget at a specified hourly rate.
 *
 * @param {number} budget The total budget available.
 * @param {number} ratePerHour The rate per hour.
 * @returns {number} The number of days within the budget, rounded down.
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the total project cost with a monthly discount applied for larger projects.
 *
 * @param {number} ratePerHour The rate per hour.
 * @param {number} numDays The number of days the project spans.
 * @param {number} discount The discount rate (e.g., 0.2 for 20% discount).
 * @returns {number} The total project cost with the discount applied, rounded up.
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDaysPerMonth = 22; // Assuming 22 billable days per month
  const fullMonths = Math.floor(numDays / billableDaysPerMonth);
  const remainingDays = numDays % billableDaysPerMonth;

  const fullMonthRate = billableDaysPerMonth * dayRate(ratePerHour);
  const discountedMonthRate = fullMonthRate * (1 - discount);
  const remainingDaysRate = remainingDays * dayRate(ratePerHour);

  const total = (fullMonths * discountedMonthRate) + remainingDaysRate;
  return Math.ceil(total); // Rounded up to the nearest whole number
}
