import os from 'node:os'

console.log('exercise FOUR! 4️⃣ \n')
console.log('Total RAM:', Math.round(os.totalmem() / 1073741824), 'GB')
console.log('Processors:', os.cpus())
console.log('Number of threads:', os.cpus().length)
console.log('Operative System:', os.platform())