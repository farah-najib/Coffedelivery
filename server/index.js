const http = require('http')
const url= require('url')
const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)

    if (parsedUrl.pathname === '/') {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(
              JSON.stringify({
                  data: 'Hello World!'
              })
          )
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
         res.end(
             JSON.stringify({
                 data: 'Not World!'
             })
         )
    }


})

server.listen(8000)
