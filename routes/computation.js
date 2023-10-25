const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port

app.use(express.json());

app.get('/computation', (req, res) => {
  // Check if the 'x' query parameter is present in the request
  const x = parseFloat(req.query.x);

  if (!isNaN(x)) {
    // If 'x' is provided in the query, use it
    const result = Math.cosh(x);
    res.send(`cosh() applied to ${x} is ${result}`);
  } else {
    // If 'x' is not provided, generate a random value between -10 and 10
    const randomX = Math.random() * 20 - 10;
    const result = Math.cosh(randomX);
    res.send(`cosh() applied to a random value ${randomX} is ${result}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
