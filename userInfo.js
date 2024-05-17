//--TASK 3---------------------------------------------------------------------------------
const {processArray, formatArrayStrings} = require("./arrayManipulation")
function createUserProfiles(originalNames, modifiedNames){
    if (originalNames.length !== modifiedNames.length){
        throw new Error("The length of the two arrays must be equal.")
    }
    return originalNames.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }))
}

const originalNames = ["Hello", "Ewurafua", "How", "Are", "You", "Today?"];
const numArr = [1, 2, 3, 4, 6, 7]
const processedNumbers = processArray(numArr)
const modifiedNames = formatArrayStrings(originalNames, processedNumbers);
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log("TASK 3:", userProfiles);