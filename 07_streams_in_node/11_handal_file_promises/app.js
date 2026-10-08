import fs from "fs/promises";
console.time()
const createFile = await fs.open("D:\\movies\\puss-in-boot.mkv")
const fileHandle  = await fs.open("puss.mp4", "w")

// console.log(fileHandle)

// const {buffer, bytesRead} = await fileHandle.read({buffer:Buffer.alloc(10)})

// console.log(buffer, bytesRead)

// const {buffer:writtenBuffer , bytesWritten} = await fileHandle.write(Buffer.from("\n Hellow"))

// console.log({writtenBuffer})
// console.log({bytesWritten})
const readStream = createFile.createReadStream()
const writeStream = fileHandle.createWriteStream()
readStream.pipe(writeStream)
console.timeEnd()


