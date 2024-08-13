import http from 'node:http'

console.log('Exercise ELEVEN 1️⃣1️⃣')

const PORT = 8080

const httpServer = http.createServer((req, res) => {
  const reqBody = []

  const { method, url } = req

  console.log(`${method} - http://localhost:${PORT}${url}`)

  req.on('data', (chunk) => {
    reqBody.push(chunk)
  })

  req.on('end', () => {
    const body = Buffer.concat(reqBody).toString()

    // implicit way to set headers - expecting to nodejs put the headers on the right time before sending data
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    // explicit way to set headers- write the status code and the headers to the stream (writable)
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    // Sending Response Body - writing with the WritableStream method '.write()'

    // res.write('<html>')
    // res.write('<h1>')
    // res.write('ADIOS MUNDO!!! 🌎🧨💥')
    // res.write('</h1>')
    // res.write('</html>')
    // res.end()

    // Sending Response Body - using the optional last bit of data of the stream to simplify the example above
    res.end(`<html><h1>ADIOS MUNDO!🌎🧨💥</h1> Client body: ${body} </html>`)
  })

  req.on('error', (error) => {
    console.log('An error ocurred in the Petition: ', error)
  })
})

httpServer.listen(8080, () => {
  console.log(`Http server listening on: http://localhost:${PORT}/`)
})

// ✅ Good documentation here of http module!: https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction

// ⬇️⬇️⬇️ set implicit headers (node will send headers for you at the correct time before you start sending body response) ⬇️⬇️⬇️

// response.setHeader('Content-Type', 'application/json');
// response.setHeader('X-Powered-By', 'bacon');

// ⬇️⬇️⬇️ set Explicitly headers (writes the status code and the headers to the stream) ⬇️⬇️⬇️

// response.writeHead(200, {
//     'Content-Type': 'application/json',
//     'X-Powered-By': 'bacon',
//   });

// 🦆🦆🦆 It's important to set the status and headers before you start writing chunks of data to the body.
// This makes sense, since headers come before the body in HTTP responses.

// streams video: https://www.youtube.com/watch?v=GlybFFMXXmQ&t=238s

// Buffers: https://nodejs.org/api/buffer.html#buffer

// How to manage buffers: https://chatgpt.com/share/698e2eab-ed08-4075-98cd-73fd9141102b

// los buffers Permiten procesar datos en partes pequeñas (chunks) de manera eficiente,
// almacenando temporalmente estos datos hasta que se procesen por tu aplicacion

// Son ideales para trabajar con datos binarios como imágenes o archivos de audio,
// que no se manejan bien como cadenas de texto.
