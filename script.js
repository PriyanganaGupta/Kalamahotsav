const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// Your server logic here

app.listen(3000, () => {
  console.log('Server started on port 3000');
});