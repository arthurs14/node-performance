const express = require('express');

const PORT = 8000;

const app = express();



function delay(duration) {
  const startTime = Date.now();

  while(Date.now() - startTime < duration) {
    // event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send('Performance Example');
});

app.get('/timer', (req, res) => {
  // delay the response
  delay(9000);
  res.send('Ding ding ding!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));