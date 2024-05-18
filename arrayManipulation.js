//--TASK 1----------------------------------------------------------------------------------------------------------
function processArray(numbers){
    return numbers.map(number => (number % 2 === 0 ? number * number : number * 3))
    
}

// sample code
const age = [14, 27, 16, 18, 35];
const resultTask1 = processArray(age)
console.log("TASK 1:", resultTask1);



//--TASK 2----------------------------------------------------------------------------------------------------------
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
// const numArr =  [14, 27, 16, 18, 35]; // the length of the strArr is not the same as the length of numArr
// const processed = processArray(numArr);
// const resultTask2 = formatArrayStrings(strArr, processed);
// console.log(resultTask2); 

// ---working code---
const strArr = ["Noble", "Ewurafua", "Fidelis", "Mark Atta", "Asare", "Akoto"];
const numArr =  [14, 27, 16, 18, 35, 42];
const processed = processArray(numArr);
const resultTask2 = formatArrayStrings(strArr, processed);
console.log("TASK 2:", resultTask2); 

// Exports the functions
module.exports = {
    processArray,
    formatArrayStrings
};