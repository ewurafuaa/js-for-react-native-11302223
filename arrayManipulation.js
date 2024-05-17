//--TASK 1---------------------------------------------------------------------------------
function processArray(numbers){
    return numbers.map(number => (number % 2 === 0 ? number * number : number * 3))
    
}

// sample code
const age = [13, 14, 17, 18, 19];
const resultTask1 = processArray(age)
console.log("TASK 1:", resultTask1);



//--TASK 2---------------------------------------------------------------------------------
function formatArrayStrings(strings, numbers){
    if (strings.length !== numbers.length){
        throw new Error ("The length of the two arrays must be equal.")
    }
    
    return strings.map((str, index) => {
        if(numbers[index] % 2 === 0) {
            return str.toUpperCase(); //Capitalizes the entire string granted the number is even
        } else {
            return str.toLowerCase(); //Makes the string lowercase granted the number is odd
        }
    });
}

//sample code (Comment out the one that does not require testing)
// ---error code--- 
// const strArr = ["Hello", "Ewurafua", "How", "Are", "You", "Today?"];
// const numArr = [1, 2, 3, 4, 5];
// const processed = processArray(numArr);
// const resultTask2 = formatArrayStrings(strArr, processed);
// console.log(resultTask2); 

// ---working code---
const strArr = ["Hello", "Ewurafua", "How", "Are", "You", "Today?"];
const numArr = [1, 2, 3, 4, 6, 7];
const processed = processArray(numArr);
const resultTask2 = formatArrayStrings(strArr, processed);
console.log("TASK 2:", resultTask2); 

// Exports the functions
module.exports = {
    processArray,
    formatArrayStrings
};