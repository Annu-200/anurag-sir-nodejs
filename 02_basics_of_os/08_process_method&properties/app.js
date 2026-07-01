 const fs = require("fs");
 process.chdir("./temp");

const directroyPath = process.cwd();
console.log(directroyPath)


fs.readdir(directroyPath, { withFileTypes: true }, (err, items) => {
  if (err) {
    console.error(err);
    return;
  }

  items.forEach(item => {
    if (item.isFile()) {
      console.log(item.name);
    }
  });
});
