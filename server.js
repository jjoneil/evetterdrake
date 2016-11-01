const express = require('express');
const app = express();

const PORT = process.env.port || 7200

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/aboutme', (req, res) => {
  res.sendFile(__dirname + '/public/aboutme.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/public/projects.html');
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log('listening on port:' + PORT);
});