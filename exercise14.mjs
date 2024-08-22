import net from 'node:net'
console.log('Exercise Fourteen 1️⃣4️⃣')

export const findAvailablePort = async (desiredPort) => {
  const portPromise = new Promise((resolve) => {
    const netServer = net.createServer()

    netServer.listen(desiredPort)

    netServer.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`Is port ${desiredPort} available?: NO`)
        resolve(0)
      }
    })

    netServer.on('listening', () => {
      netServer.close()
      console.log(`Is port ${desiredPort} available?: YES`)
      resolve(desiredPort)
    })
  })

  return portPromise
}
