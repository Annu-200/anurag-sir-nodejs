// import fs from 'fs/promises';
 import fs, { writeFileSync } from 'fs';
// const buf = await fs.readFile("D:\\movies\\Puss.In.Boots-The.Last.Wish.(2022).1080p..BluRay.[ORG.Hindi.DDP5.1.640Kbps.+.English.DDP7.1].Esub.x264_Vegamovies.to.mkv");
// const buf = await fs.readFile('4Th Dec.m4v');
// const buf = await fs.readFile("D:\\movies\\4Th Dec.m4v");

// console.log(buf.byteLength);
// console.log(buf.toString());

// const readStream = fs.createReadStream("D:\\movies\\Puss.In.Boots-The.Last.Wish.(2022).1080p..BluRay.[ORG.Hindi.DDP5.1.640Kbps.+.English.DDP7.1].Esub.x264_Vegamovies.to.mkv", {highWaterMark: 100 * 1024 * 1024})
// readStream.on('data', (chunkBuffer) => {
//     console.log(chunkBuffer);
//     console.log(chunkBuffer.byteLength);
// });

// readStream.on('data', (chunkBuffer) => {
//     fs.appendFileSync('puss.mp4', chunkBuffer)
// })

const readStream = fs.createReadStream('chars.txt',
     { highWaterMark: 16
 })
readStream.on('data', (chuck) => {
    console.log(chuck.byteLength)
})
;
