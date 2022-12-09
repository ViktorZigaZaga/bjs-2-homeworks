"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2)-(4*a*c);
  
  if (discriminant === 0) {
    let rootOne = (-b)/(2*a);
    arr.push(rootOne);
  } else if (discriminant > 0) {
    let firstRoot = (-b + Math.sqrt(discriminant))/(2*a);
    let secondRoot = (-b - Math.sqrt(discriminant))/(2*a);
    arr.push(firstRoot, secondRoot);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let totalAmount;

  if (isNaN(percent) === true) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution) === true) {
    return `Параметр "Сумма первоначального взноса" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount) === true) { 
    return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
  }

  let percentMonth = (percent/100)/12;
  let refundAmountBank = amount - contribution;
  let monthlyFee = refundAmountBank * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
  totalAmount = countMonths*monthlyFee;
  return Number(totalAmount.toFixed(2));
}
