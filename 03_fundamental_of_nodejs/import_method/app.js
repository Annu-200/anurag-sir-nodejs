// import.meta.a = "Annu"
const meta = import.meta
console.log(meta)

const {filename , dirname} = import.meta

console.log(filename, dirname)
