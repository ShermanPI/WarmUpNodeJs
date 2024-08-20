import net from 'node:net'
console.log('Exercise Fourteen 1️⃣4️⃣')

const PORT = 8080

const checkIfPortIsAvailable = async (desiredPort) => {
  const portPromise = new Promise((resolve) => {
    const netServer = net.createServer()

    netServer.listen(desiredPort)

    netServer.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolve(false)
      }
    })

    netServer.on('listening', () => {
      netServer.close()
      resolve(true)
    })
  })

  return portPromise
}

console.log(`Is port ${PORT} available?:`, await checkIfPortIsAvailable(PORT))
