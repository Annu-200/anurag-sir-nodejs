import fs from "fs"

const readStrem = fs.createReadStream('./chars.txt', { highWaterMark:4})

readStrem.setEncoding('utf-8')

readStrem.on('data', (chunk) => {
    console.log(chunk)
})

