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

const originalNames = ["Noble", "Ewurafua", "Fidelis", "Mark Atta", "Asare", "Akoto"];
const numArr = [14, 27, 16, 18, 35, 42]
const processedNumbers = processArray(numArr)
const modifiedNames = formatArrayStrings(originalNames, processedNumbers);
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log("TASK 3:", userProfiles);