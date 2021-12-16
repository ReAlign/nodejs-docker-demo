'use strict';

const express = require('express');
const images = require("images");

const getData = require('./mongodb');
const tpl = require('./tpl');

// Constants
const PORT = 8085;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const title = 'Node.js Mongodb Demo';
  const date = new Date();
  // res.send(tpl({
  //   title,
  //   statusText: 'successful',
  //   date,
  //   result: [{"status": "None"}],
  // }));
  getData()
    .then((result) => {
      res.send(tpl({
        title,
        statusText: 'successful',
        date,
        result,
      }));
    })
    .catch((err) => {
      res.send(tpl({
        title,
        statusText: 'failure',
        date,
        result: {
          content: 'none',
        },
      }));
    });
});

app.get('/img', (req, res) => {
  res.setHeader('content-type', 'image/png')
  res.send( images(200, 100).fill(255, 0, 0, 1).encode("png") );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);