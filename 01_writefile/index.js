const fs = require('fs');
const {exec} = require('child_process');
let text = fs.writeFileSync('./text.txt','hi')


text = fs.readFileSync("./text.txt");
console.log(text.toString());
text = fs.renameSync("./text.txt", "./me.txt");
exec('start "C:\Users\Dell\AppData\Local\Programs\cursor\Cursor.exe"')
console.log('end')