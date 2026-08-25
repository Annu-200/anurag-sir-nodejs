import fs from 'fs/promises';

// const base = await fs.readFile('vedio.txt');
// const a = base.toString();

// await fs.writeFile('vedio.mp4',a, 'base64');
const a = await fs.readFile("clock.mp4")
const bufferString = a.toString("base64")

 fs.writeFile('new-vedio.txt', bufferString)

// console.log(bufferString);
