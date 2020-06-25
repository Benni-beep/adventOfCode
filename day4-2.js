
/**
    It is a six-digit number.
    The value is within the range given in your puzzle input.
    Two adjacent digits are the same (like 22 in 122345).
    Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
        ->ziffern als strings zusammen ziehen, dann parseInt
    
    How many different passwords within the range given in your puzzle input meet these criteria?
 */

function puzzleInput() {
    inputArray = [];
    for (let i = 256310; i <= 732736; i++) {
        inputArray.push(i);
    }
    return inputArray;
}

function checkAdjacent(number) {
    const digitArray = JSON.stringify(number).split("");
    for (let i = 0; i < digitArray.length - 1; i++) {
        if (digitArray[i] == digitArray[i + 1] && digitArray[i] != digitArray[i - 1] && digitArray[i] != digitArray[i + 2]) {
            return number;
        }
    }
}

function checkIncrease(number) {
    const digitArray = JSON.stringify(number).split("");
    for (let i = 0; i < digitArray.length - 1; i++) {
        if (digitArray[i] > digitArray[i + 1]) {
            return;
        }
    }
    return number;
}

function passwords(arr) {
    let passwordArray = [];
    for (number of arr) {

        if (checkIncrease(number) != undefined && checkAdjacent(number) != undefined) {
            passwordArray.push(number)
        }
    }
    return passwordArray;
}

console.log(passwords(puzzleInput()).length)