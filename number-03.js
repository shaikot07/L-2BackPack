// @ts-check

/**
 * Freelance billing utility functions
 *
 * Provides core calculations for estimating project budgets, durations, and discounted rates.
 */

/**
 * Derives the daily rate from a given hourly rate, assuming a standard 8-hour workday.
 *
 * @param {number} hourlyRate - The freelancer's hourly rate.
 * @returns {number} - The equivalent daily rate.
 */
export function dayRate(hourlyRate) {
  return hourlyRate * 8;
}

/**
 * Determines how many whole working days can be afforded within a given budget.
 *
 * @param {number} budget - Total available budget for the project.
 * @param {number} hourlyRate - The freelancer's hourly rate.
 * @returns {number} - Total number of full days that fit within the budget.
 */
export function daysInBudget(budget, hourlyRate) {
  const daily = dayRate(hourlyRate);
  return Math.floor(budget / daily);
}

/**
 * Estimates the total cost for a long-term project, applying a discount for full months.
 *
 * A "full month" is defined as 22 working days. The discount applies only to complete months.
 *
 * @param {number} hourlyRate - The freelancer's hourly rate.
 * @param {number} totalDays - The total number of working days the project requires.
 * @param {number} discount - Discount rate applied to full months (e.g., 0.15 for 15%).
 * @returns {number} - Total project cost after applying the discount, rounded up.
 */
export function priceWithMonthlyDiscount(hourlyRate, totalDays, discount) {
  const DAYS_IN_MONTH = 22;
  const fullMonths = Math.floor(totalDays / DAYS_IN_MONTH);
  const leftoverDays = totalDays % DAYS_IN_MONTH;

  const monthlyCost = DAYS_IN_MONTH * dayRate(hourlyRate);
  const discountedMonthlyCost = monthlyCost * (1 - discount);
  const partialCost = leftoverDays * dayRate(hourlyRate);

  const totalCost = (fullMonths * discountedMonthlyCost) + partialCost;
  return Math.ceil(totalCost);
}
