function processArray(numbers){
    return numbers.map(number => {
        if(number % 2 === 0){
            return number *  number; //squares the numbers
        } else {
            return number * 3; //triples the odd numbers
        }
    })
    
}

// trial code
const age = [13, 14, 17, 18, 19];
const result = processArray(age)
console.log(result);
