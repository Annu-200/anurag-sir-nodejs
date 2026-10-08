import fs from "fs"

// const contant = await fs.readFile("./chars.txt", "utf8")
// const lecter = await fs.readFile("D:\\movies\\Dec.m4v")

// fs.writeFile("Dec.m4v", lecter)
//memery usea 
// console.log(contant)

const readStrem = fs.createReadStream("./chars.txt", { highWaterMark:4 })
let readCount = 0
console.time('copy')
readStrem.on('data', (chunckBuffer) => {
    // console.log(chunckBuffer.byteLength)
    // console.log(chunckBuffer)
   console.log(chunckBuffer.byteLength)
   readCount++
    // if(chunckBuffer.byteLength <  1 * 1024 * 1024 ){

    // }
})

readStrem.on('end', () => {
    console.log(readCount)
    console.timeEnd('copy')
})

