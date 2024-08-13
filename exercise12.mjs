import http from 'node:http'

console.log('Exercise TWELVE 1️⃣2️⃣')

const PORT = 8080

const httpServer = http.createServer((req, res) => {
  const { url, method } = req

  console.log(`${method} -> http://localhost:${PORT} ${url}`)

  req.on('error', (error) => {
    const errorMessage = `An Error ocurred in the request ${error}`

    console.log(errorMessage)
    res.end(errorMessage)
  })

  switch (url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.write('If you want to access to echo, use /echo')
      res.end()

      break
    case '/echo':
      // using .pipe() because req(http.IncomingMessage) is an instance of stream.Readable too :D
      req.pipe(res)
  }
})

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
