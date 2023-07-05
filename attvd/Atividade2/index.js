const http = require('http')

const port = 3000

const server = http.createServer((req, res)=>{
    if (req.url === "/home") {
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Página Home😘</h1>')
        res.end('<h2>Bem-vindo á página inicial</h2>')
    }else if(req.url === "/sobre"){
      res.writeHead(200, {'content-type':'text/html'});
      res.write('<meta charset="UTF-8">')
      res.write('<h1>Página Sobre😎</h1>')
      res.end(' <h2>Sobre nós : somos uma empresa dedicada a...</h2>')
    }
})

server.listen(port, ()=>{
    console.log(`Servidor ON ${port}😍`)
})