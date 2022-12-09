function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((result,item) => result + item);
  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length == 0) return 0;
  const sum = arr.reduce((result, item) => { return result + item}, 0);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0) return 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) return 0;
  const sumEvenElement = arr.reduce((result, item) => { return item % 2 === 0 ? result + item : result }, 0);
  const sumOddElement = arr.reduce((result, item) => { return item % 2 !== 0 ? result + item : result }, 0);

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) return 0;
  const sumEvenElement = arr.reduce((result, item) => { return item % 2 === 0 ? result + item : result }, 0);
  const countEvenElement = arr.filter(item => item % 2 === 0).length;
  const avgEvenElement = sumEvenElement / countEvenElement;

  return avgEvenElement;
}

function makeWork (arrOfArr, func) {
const maxWorkerResult = Math.max(null,...arrOfArr.map(item => func(...item)));

return maxWorkerResult;
}
