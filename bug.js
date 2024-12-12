const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling within the async operation
    console.error('Error in async operation:', err);
    res.status(500).send('Internal Server Error');
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might lead to an error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      setTimeout(() => {
        resolve(); // Success
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error('Simulated async error')); // Simulate an error
      }, 1000);
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});