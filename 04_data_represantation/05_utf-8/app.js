import fs from "node:fs/promises"

const contentBuffer = await  fs.readFile('./text.txt')

let bineryString = " "

contentBuffer.forEach(item => {
    
    bineryString += item.toString(2) + " "
});

console.log(bineryString)


