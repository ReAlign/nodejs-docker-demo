'use strict';

const express = require('express');
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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);