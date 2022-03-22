let selectElementsStartingWithA = (array) => {
  return array.filter((el) => el[0] === "a");
};

let selectElementsStartingWithVowel = (array) => {
  return array.filter((el) => /^[aeiou]/i.test(el));
};

let removeNullElements = (array) => {
  return array.filter((el) => el != null);
};

let removeNullAndFalseElements = (array) => {
  return array.filter((el) => el !== null && el !== false);
};

let reverseWordsInArray = (array) => {
  let arrNew = [];
  for (let elem of array) {
    arrNew.push(elem.split("").reverse().join(""));
  }
  return arrNew;
};

let everyPossiblePair = (array) => {
  let arr1 = [];
  for (let i = 0; i < array.length; i++) {
    let arr2 = [];
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        arr2.push(array[j]);
      }
      arr2.sort();
    }
    arr1.push(arr2);
  }
  arr1.sort();
  return arr1;
};

let allElementsExceptFirstThree = (array) => {
  array.splice(0, 3);
  return array;
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = (array) => {
  let arrNew = [];
  for (let elem of array) {
    arrNew.push(elem.split("").reverse().join(""));
  }
  arrNew.sort();
  let arrSort = [];
  for (let elem of arrNew) {
    arrSort.push(elem.split("").reverse().join(""));
  }

  return arrSort;
};

let getFirstHalf = (string) => {
  let newStr = string.slice(0, Math.round(string.length / 2));
  return newStr;
};

let makeNegative = (number) => {
  return  (number > 0) ? number*= -1 : number;
};

let numberOfPalindromes = (array) => {
  let count = 0;
  for (let elem of array) {
    if (elem === elem.split("").reverse().join("")) count++;
  }
  return count;
};

let shortestWord = (array) => {
  let min = 1000;
  let minStr;
  for (let elem of array) {
    if (elem.length < min) {
      min = elem.length;
      minStr = elem;
    }
  }
  return minStr;
};

let longestWord = (array) => {
  let max = 0;
  let maxStr;
  for (let elem of array) {
    if (elem.length > max) {
      max = elem.length;
      maxStr = elem;
    }
  }
  return maxStr;
};

let sumNumbers = (array) => {
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }
  return sum;
};

let repeatElements = (array) => {
  return array.concat(array);
};

let stringToNumber = (string) => {
  return +string;
};

let calculateAverage = (array) => {
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }
  return sum / array.length;
};

let getElementsUntilGreaterThanFive = (array) => {
  let newArray = [];
  for (let elem of array) {
    if (elem <= 5) {
      newArray.push(elem);
    } else break;
  }
  return newArray;
};

let convertArrayToObject = (array) => {
  let obj = {};
  for (let i = 0; i < array.length - 1; i += 2) {
    obj[array[i]] = array[i + 1];
  }
  return obj;
};

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

let getAllLetters = (array) => {
  let string = array.join("");
  let arrLettres = string.split("");
  arrLettres.sort();
  let result = [...new Set(arrLettres)];
  return result;
};

let swapKeysAndValues = (object) => {
  let newObj = {};
  for (let key in object) {
    newObj[object[key]] = key;
  }
  return newObj;
};

let sumKeysAndValues = (object) => {
  let sum = 0;
  for (let key in object) {
    sum += +key;
    sum += +object[key];
  }
  return sum;
};

let removeCapitals = (string) => {
  return string.replace(/[A-Z]+/g, "");
};

let roundUp = (number) => {
  return Math.ceil(number);
};

let formatDateNicely = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  let dateNew = `${day}/${month}/${year}`;
  return dateNew;
};

let getDomainName = (string) => {
  let index = string.indexOf('@');
  let domain = string.slice(index + 1);
  let indEnd = domain.indexOf('.com');
  let result = domain.slice(0, indEnd);
  return result;
};
// https://flexiple.com/javascript-capitalize-first-letter/

let titleize = (string) => {
  
  const arr = string.split(' ');

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].charAt(0) != 't' && arr[i].charAt(0)!= 'a') {
      arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }
  let str2 = arr.join(' ');
  let result = str2[0].toUpperCase() + str2.slice(1);
  result = result.replace('. a','. A');

  return result;
};

// Here in the above code test() function is used. The Regular expression is /[!@#$%^&*()_+-=[]{};’:”\|,.<>\/?]+/
// If any of the characters from the regular expression is found within the string, true is returned. Else false is returned.
let checkForSpecialCharacters = (string) => {
  let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return (spChars.test(string) ? true : false);
};

let squareRoot = (number) => {
  return Math.sqrt(number);
};

let factorial = (number) => {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }

  return fact;
};

let findAnagrams = (string) => {
  if (string.length < 2) {
    return [string];
  } else {
      let allAnswers = [];
      for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        let shorterWord = string.substr(0, i) + string.substr(i + 1, string.length - 1);
        let shortwordArray = findAnagrams(shorterWord);
        for (let j = 0; j < shortwordArray.length; j++) {
          allAnswers.push(letter + shortwordArray[j]);
        }
      }
    return allAnswers;
  }
};

let convertToCelsius = (number) => {
  return Math.round((5 / 9) * (number - 32));
};

let letterPosition = (array) => {
  let result = [];
  for (let elem of array) {
    let code = elem.toUpperCase().charCodeAt(elem);
    if (code > 64 && code < 91) result.push(code - 64);
  }
  return result;
};
