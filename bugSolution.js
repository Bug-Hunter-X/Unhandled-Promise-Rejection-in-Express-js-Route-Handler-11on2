const express = require('express');
const app = express();

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error in async operation:', err);
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      setTimeout(() => {
        resolve();
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error('Simulated async error'));
      }, 1000);
    }
  });
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add your custom handling logic here, e.g., log to a file or send an alert
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});