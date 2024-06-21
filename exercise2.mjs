import fs, { readFile } from 'node:fs'

console.log('exercise TWO! 2️⃣ \n')

// remembering that error is passed first in 
fs.readFile('testFile.txt', 'utf-8', (error, data)=>{
    console.log('The file contains:', data)
})

async ()=>{
    console.log('make a second call to the document TWO! 2️⃣ \n')

    const buffer = await fs.readFile('testFile.txt', 'utf-8')
    console.log(buffer)
}