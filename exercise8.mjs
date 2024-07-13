import {fileURLToPath } from 'url'

console.log('exercise EIGHT! 8️⃣ \n')

const argv = process.argv

console.log('🎏 The argv is: ', argv)

console.log('Current application file location: ', process.argv[1])

// adding the event handler before the process is exited
process.on('exit', (exitCode)=>{
    console.log('The process exited with code ', exitCode)
})

// pass the temporary environment variable as VARIABLE in the console
console.log('The environment variable value defined here is: ', process.env.VARIABLE)

const passedArgvByTheUser = process.argv.slice(2)

console.log('The user passed the next variables:')
passedArgvByTheUser.forEach((el)=>{
    console.log('[=>', el)
})

if (argv[2] === 'error') {
    console.error('[⛔=> An error ocurred because the argv[2] is equal to "error"')
    process.exit(1)
} else {
    console.log('[✅=> Compiled with no errors!')
    process.exit(0)
}

