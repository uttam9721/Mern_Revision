// const http = require('http');
import http from 'http';

// console.log(http);
const server =http.createServer();
const port = 3000;
server.listen(port,()=>{
    server.listen(port,()=>{
        console.log(`listening on port${port}`)
    })
})