'use strict';

const temperatures1 = [3, 2, 6, 'eror'];
const temperatures2 = [9, 1, 'eror', 'not'];
/*
const calcTemAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  debugger;
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] === 'number') if (temp[i] > max) max = temp[i];
    if (temp[i] < min) min = temp[i];
  }
  console.log({ min, max });
  return max - min;
};
const finalResult = calcTemAmplitudeNew(temperatures1, temperatures2);
console.log(finalResult);
*/

/*
//psedu code
const posRange = [];
const negRange = [];

const range = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      posRange.push(arr[i]);
    } else if (arr[i] <= 0) {
      negRange.push(arr[i]);
    } else {
      continue;
    }
  }
};
range(temperatures);
console.log(`Negetive temperatures:${negRange}`);
console.log(`Positive temperatures:${posRange}`);

const findMinMax = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return { min, max };
};

const posMinMax = findMinMax(posRange);
const negMinMax = findMinMax(negRange);
const min = negMinMax.min;
const max = posMinMax.max;
console.log(min, max);
*/

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log({ min, max });
  return max - min;
};
console.log(calcTempAmplitude(temperatures));
console.log(calcTempAmplitude([6, 0]));
*/

//tamrin
/*
const arr = [1, 2, 3, 4];
const newArr = function (arr1) {
  let arr2 = [];
  for (let i = arr1.length - 1; i > -1; i--) {
    arr2.push(arr1[i]);
  }
  return arr2;
};
console.log(newArr(arr));
*/

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };
// console.log(measurement.value);
// console.warn(measurement.value);
// console.error(measurement.value);

//console.table(measurement);
//console.log(measurement);

//
//   const Kelvin = measurement.value + 273;
//   return Kelvin;
// };
// console.log(measureKelvin());

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const printForecast = function (arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} day... `;
//   }
//   console.log(`...` + str);
// };
// printForecast(data1, data2);

/*
const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const totalHours = function (times) {
  let sum = 0;
  for (let i = 0; i < times.length; i++) sum += Number(times[i]);
  console.log(sum);
};
const sum = totalHours(data);
const averageDailyHours = function (times) {
  let averageHours = [];
  for (let i = 0; i < times.length; i++) averageHours.push(times[i] / 2);
  console.log(averageHours);
};
averageDailyHours(data);
const mostHoursWorkedDay = function (times) {
  let max = times[0];
  for (let i = 0; i < times.length; i++) if (times[i] > max) max = times[i];
  console.log(max);
};
mostHoursWorkedDay(data);
const daysWorked = function (times) {
  const days = times.length - 1;
  console.log(days);
};
daysWorked(data);
const checkFulltimeOrParttime = function (sum) {
  if (sum >= 35) {
    return `Full-time`;
  } else {
    return `Part-time`;
  }
};

console.log(checkFulltimeOrParttime(sum));
*/

const analyzeWorkWeek = function (times) {
  const totalHours = times.reduce((sum, hours) => sum + hours, 0);
  const daysWorked = times.filter(hours => hours > 0).length;
  const averageDailyWork = totalHours / times.length;
  const maxHours = Math.max(...times);
  const maxHoursDayIndex = times.indexOf(maxHours);
  const fullTimeStatus = totalHours >= 35 ? 'Full-time' : 'Part-time';

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const maxHoursDay = daysOfWeek[maxHoursDayIndex];

  return {
    totalHours,
    averageDailyWork,
    maxHours,
    maxHoursDay,
    daysWorked,
    fullTimeStatus,
  };
};

// Example array where Monday is the first day of the week
const times = [7.5, 8, 6.5, 0, 8.5, 4, 0]; // [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
const workWeekAnalysis = analyzeWorkWeek(times);

console.log(`Total hours worked: ${workWeekAnalysis.totalHours}`);
console.log(
  `Average daily work: ${workWeekAnalysis.averageDailyWork.toFixed(2)} hours`
);
console.log(
  `Day with the most hours worked: ${workWeekAnalysis.maxHours} hours on ${workWeekAnalysis.maxHoursDay}`
);
console.log(`Number of days worked: ${workWeekAnalysis.daysWorked}`);
console.log(`Week status: ${workWeekAnalysis.fullTimeStatus}`);
console.log(analyzeWorkWeek(times));
