import fs from "node:fs"

const readableStream = fs.createReadStream("./chars.txt", {highWaterMark:4});


let readFileCount = 0;
readableStream.on("data" , (chunkBuffer) => {
    console.log(chunkBuffer)
    readFileCount++
    if(readFileCount === 1){
        fs.writeFileSync('abc.txt', chunkBuffer)
    }else{
        fs.appendFileSync('abc.txt', chunkBuffer)
    }
    readableStream.pause();
    setTimeout(() => {
        readableStream.resume()
    }, 100)
});