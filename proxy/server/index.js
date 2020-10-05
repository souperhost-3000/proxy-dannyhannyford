const express = require('express');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3003;
app.use(express.static(PUBLIC_DIR));
app.get('/', (req, res) => {
  res.send(200);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', PORT);
});