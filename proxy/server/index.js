const express = require('express');
const axios = require('axios');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3003;
app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  axios.get('http://34.208.9.166//api/listings')
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => console.log(err));

});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', PORT);
});