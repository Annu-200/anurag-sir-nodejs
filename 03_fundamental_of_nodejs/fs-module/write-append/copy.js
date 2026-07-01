#!/usr/bin/env node
import fs, { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
const file = process.argv
const destination = file[3]
const mainImg = file[2]
const img = await readFile(mainImg)

const filename = path.basename(mainImg)
const finalPath = path.join(destination, filename)


// console.log(img)
await writeFile(finalPath, img)
console.log("file copy successfuly")

//task

// fs.writeFile("D:\\Annu-Downloads\\extra space\\Desktop\\file-1.txt", "write now learning fs module write and append method")

// const data = await readFile("D:\\Annu-Downloads\\extra space\\Desktop\\file-1.txt", "utf-8")

// console.log(data)