import fs from 'node:fs'

console.log('exercise ONE!')
const fileName = 'teFile'


try {
    const fileText = fs.readFileSync(`./${fileName}.txt`, { encoding: 'utf-8' })
    console.log(`File named`, fileName, 'says:', fileText)
    console.log('File size: ', fileText)
} catch (error) {
    console.log('An error occurred trying to read', fileName, error)
}
