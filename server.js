// const http = require('node:http');

// const hostname = '127.0.0.1';

// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200; //Choix du code HTTP
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');

// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// Hello world with express js 

require('dotenv').config();
const app = require("./app.js");

// const express = require('express')
// const app = express()
const port =process.env.PORT

// app.get('/', (req, res) => {
   
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

