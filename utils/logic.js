import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 9 });

export const add = (value1, value2) => {
  const number1 = BigNumber(value1);
  const number2 = BigNumber(value2);

  const answer = number1.plus(number2);

  return answer.toString();
};

export const subtract = (number1, number2) => {};

export const multiply = (number1, number2) => {};

export const divide = (number1, number2) => {};
