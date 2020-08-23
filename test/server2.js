const express = require('express');
const app = express();

app.get('test/server.js', (request, response) => {
  response.send('hello world from folder');
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});