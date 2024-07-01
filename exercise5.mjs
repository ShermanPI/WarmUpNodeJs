import fs from 'node:fs/promises'

console.log('exercise FIVE! 5️⃣ \n')

const readFilesPromises = [fs.readFile('testFile.txt', 'utf-8'), fs.readFile('testFileTwo.txt', 'utf-8')]

Promise.all(readFilesPromises).then(textsArray=>{
    textsArray.forEach((text, index)=>{
        console.log(`[=> File Number ${index + 1} says: `, text)
    })
})