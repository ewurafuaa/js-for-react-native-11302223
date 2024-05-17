function processArray(numbers){
    return numbers.map(number => (number % 2 === 0 ? number * number : number * 3))
    
}

// trial code
const age = [13, 14, 17, 18, 19];
const result = processArray(age)
console.log(result);
