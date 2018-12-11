const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(5555, () => {
  console.log('app listening on port 5555');
});
