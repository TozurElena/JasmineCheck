
let reverseWordsInArray = (array) => {
    let arrNew = [];
    for(let elem of array ) {
        arrNew.push(elem.split('').reverse().join(''));
        console.log(elem);
    }
    
    return arrNew;
 
}
let result = reverseWordsInArray(['dog', 'monkey', 'elephant', 'kayak']);
console.log(result);

