import path from 'node:path'

console.log('exercise SIX! 6️⃣ \n')

console.log('[✅]=> My operative system file separator is:', `"${path.sep}"`)

const fileDirectory = 'fileDirectory'

const fileName = 'testFileThree.txt'

const joinedPath = path.join(fileDirectory, fileName)

console.log(`[✅]=> The result of joining the file directory: "${fileDirectory}" and the file name: "${fileName}" is:`, joinedPath)
console.log(`[✅]=> The file extension of the file file "${fileName}" is:`, path.extname(fileName))