let selectElementsStartingWithA = (array) => {
    return array.filter(el => el[0] === 'a');
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(el => /^[aeiou]/i.test(el));
}

let removeNullElements = (array) => {
    return array.filter(el => el != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(el => el !== null && el !== false);
}

let reverseWordsInArray = (array) => {
    let arrNew = [];
    for(let elem of array ) {
        arrNew.push(elem.split('').reverse().join(''));
    }
    return arrNew;
}

let everyPossiblePair = (array) => {
    
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0,3);
    return array;

}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    let newStr = string.slice(0, Math.round(string.length / 2));
    return newStr;
}

let makeNegative = (number) => {
    if (number > 0) number*=-1;
    return number;
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    let min = 1000; let minStr;
    for (let elem of array) {
        if (elem.length < min) {min = elem.length; minStr = elem;}
    }
    return minStr;
}

let longestWord = (array) => {
    let max = 0; let maxStr;
    for (let elem of array) {
        if (elem.length > max) {max = elem.length; maxStr = elem;}
    }
    return maxStr;
}

let sumNumbers = (array) => {
    let sum = 0;
    for (let elem of array) {
        sum+=elem;
    }
    return sum;
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
