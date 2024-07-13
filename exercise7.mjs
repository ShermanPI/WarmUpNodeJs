import path from 'node:path'
import fsPromises from 'node:fs/promises'
import fs from 'node:fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('exercise SEVEN! 7️⃣ \n')

// NOTE: __dirname is not defined in ESmodules 🌶️
// NOTE: to have the directory name you can use process.argv and 
//       use the element in index 1 to obtain where is the app executing 🌶️

const fileDirectoryName = 'fileDirectory'

fsPromises.readdir(fileDirectoryName)
    .then(directoryArrayInfo => {
        const directoryPath = path.join(__dirname, fileDirectoryName)

        console.log('Reading 🔃', directoryPath)

        directoryArrayInfo.forEach(directoryElementName => {
            const directoryElementPath = path.join(__dirname, fileDirectoryName, directoryElementName)
            const fileStats = fs.statSync(directoryElementPath)
            if (fileStats.isDirectory()) {
                console.log("|", directoryElementName)
                return;
            }

            if (fileStats.isFile()) {
                console.log("|--->", directoryElementName)
            }

        }
        )
    })
    .catch(error => {
        console.error('An error ocurred: ', error)
    })
