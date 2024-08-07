import fs from 'node:fs'

fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((data)=>{
        
        fs.writeFile('./heyjsoncategories.txt', JSON.stringify(data), (err)=>{
            console.log('there is an error', err)
        })
    });