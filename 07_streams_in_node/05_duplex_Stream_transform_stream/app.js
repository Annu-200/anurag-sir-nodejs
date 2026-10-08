import fs from 'fs';

const readStream = fs.createReadStream("D:\\movies\\4Th Dec.m4v",
     { highWaterMark: 1*1024 * 1024})
const writeStream = fs.createWriteStream("fourthDec.m4v", 
    { highWaterMark: 1*1024 * 1024 }
)

