const http = require('http')

//create the server
const server = http .createServer((req, res)=>{
    if (req.url==='/') {
        res.end("<h1>Welcome to Homepage</h1>")
    } else if(req.url==='/about'){
        res.end("<h1>Welcome to About Page</h1>")
    }else{
        res.end(`
            <h1>Page not found</h1>
            <p>Page not found</p>
            <a href="/">Go back home</a>
        `)
    }
});

server.listen(5000)