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

var cors = require('cors')

require('dotenv').config();
const app = require("./app.js");

// const express = require('express')
// const app = express()
const port =process.env.PORT

// app.get('/', (req, res) => {
   
//   res.send('Hello World!')
// })

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.get('/', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only http://localhost:8080'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

