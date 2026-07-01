 import { Worker } from 'worker_threads';
// const worker = () => {
//     for (let i = 0; i < 1000000000000; i++) {
//         if(i % 400000000000 == 1){
//          console.log(`running thread ${i}`)
//         }
//      }
// }

new Worker('./a.js')
new Worker('./b.js')
new Worker('./c.js')

// worker();


