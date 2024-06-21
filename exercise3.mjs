import fs from 'node:fs/promises'

console.log('exercise THREE!3️⃣ \n')

fs.readFile('testFile.txt', 'utf-8')
    .then(data=>{
        console.log('The file contains:', data)
    })

async function readFileByPath (filePath) {
    console.log('reading with async await the files')

    const data = await fs.readFile(filePath, 'utf-8')
    console.log(data)
}

readFileByPath('testFile.txt')