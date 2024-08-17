import http from 'node:http'
import fs from 'node:fs/promises'

console.log('Exercise THIRTEEN 1️⃣3️⃣')

const PORT = 8080

const httpServer = http.createServer(async (req, res) => {
  const { url, method } = req

  console.log(`${method} -> http://localhost:${PORT}${url}`)

  switch (url) {
    case '/':
      break
    case '/save':
      if (method === 'POST') {
        const reqBody = []

        req.on('data', chunk => {
          reqBody.push(chunk)
        })

        req.on('end', async () => {
          try {
            await fs.writeFile('./exercise13.txt', Buffer.concat(reqBody).toString())
          } catch {
            res.writeHead(500, { 'content-type': 'text/plain; utf-8' })
            res.end('An error occurred when writing this message in the file')
          }
          res.writeHead(200, { 'content-type': 'text/plain; utf-8' })
          res.end('Saved correctly! 🍦')
        })
      } else {
        res.writeHead('404', { 'content-type': 'text/plain; charset=utf-8' })
        res.end(`Method [${method}] not allowed`)
      }
      break
    case '/read':
      if (method === 'GET') {
        try {
          const fileText = await fs.readFile('./exercise13.txt', 'utf-8')
          res.writeHead(200, { 'content-type': 'text/plain; utf-8' })
          res.end(`This is the file content: ${fileText}`)
        } catch {
          res.writeHead(500, { 'content-type': 'text/plain; utf-8' })
          res.end('An error occurred trying reading the file')
        }
      } else {
        res.writeHead('404', { 'content-type': 'text/plain; charset=utf-8' })
        res.end(`Method [${method}] not allowed`)
      }
      break
    default:
      res.writeHead('404', { 'content-type': 'text/html; charset=utf-8' })
      res.end('<h1>404 - resource not found 🙅‍♂️🙅‍♀️</h1>')
  }
})

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
