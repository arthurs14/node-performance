const express = require('express');

const PORT = 8000;

const app = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send(`Performance Example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  // delay the response
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');

app.listen(PORT);
