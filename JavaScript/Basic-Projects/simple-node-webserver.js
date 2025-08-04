const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html')

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Internal Server Error')
        return
      }

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
  } 
  
  else if (req.url === '/AutoWebRecon.PNG') {
    const imgPath = path.join(__dirname, 'AutoWebRecon.PNG')
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Image loading error')
        return
      }

      res.writeHead(200, { 'Content-Type': 'image/png' })
      res.end(data)
    })
  } 
  
  else if (req.url === "/style.css") {
    const filePath = path.join(__dirname, 'style.css')

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Internal Server Error')
        return
      }

      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.end(data)
    })
  } 
  
  else if (req.url === "/data.json") {
    const jsonPath = path.join(__dirname, 'data.json')

    fs.readFile(jsonPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Error loading JSON')
        return
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(data)
    })
  } 
  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found')
  }

})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
