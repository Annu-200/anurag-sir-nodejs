import fs  from 'fs';

const writeStrem = fs.createWriteStream('stream.mp4');


const stream = fs.createReadStream("D:\\movies\\Puss.In.Boots-The.Last.Wish.(2022).1080p..BluRay.[ORG.Hindi.DDP5.1.640Kbps.+.English.DDP7.1].Esub.x264_Vegamovies.to.mkv",{highWaterMark: 1 * 1024 * 1024});

stream.on('data', (chunk) => {

    writeStrem.write("stream.mp4", chunk)
  
   stream.pause()
   setTimeout(() => {
     stream.resume()
   }, 500);
})

writeStrem.on('drain' , (chunkbuffer) => {
   writeStrem.resume()
})







console.log(writeStrem.writableHighWaterMark);

