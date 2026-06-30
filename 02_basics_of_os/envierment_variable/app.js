// const {exec} = require('child_process');
// exec(`powershell -Command "setx VARIABLE_Name 'Nodejs' /M"`)
const enveromentVariable = process.env
console.log(enveromentVariable)
// setInterval(() => {
//     console.log(enveromentVariable)
    
// }, 1000);

// const fs = require('fs');
// const fileData = fs.readFileSync("./.env").toString()

// fileData.split(/\r?\n/).forEach(variable => {
//   const [key, value] = variable.split("=")
//   process.env[key] = value;
// });
// setInterval(() => {
//     console.log(enveromentVariable)
// }, 1000);
