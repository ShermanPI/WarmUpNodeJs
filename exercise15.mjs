import http from 'node:http'
import { findAvailablePort } from './exercise14.mjs'

console.log('Exercise Fifteen  1️⃣5️⃣')

const desiredPort = process.env.desiredPort

const httpServer = http.createServer((req, res) => {
  console.log('')
})

async function startServer () {
  const availablePort = await findAvailablePort(desiredPort)
  httpServer.listen(availablePort, () => {
    console.log(`Http server is listening on http://localhost:${httpServer.address().port}`)
  })
}

startServer()

console.log('[=> 🌎 Environment variables: ', process.env)
