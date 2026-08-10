import fs from  "node:fs/promises";


const contantBuff = await fs.readFile('./text.txt')

console.log(contantBuff.toString("utf-8"))
