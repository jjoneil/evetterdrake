const express = require('express');
const app = express();
const serveIndex = require('serve-index');
const requireDir = require('require-dir');
const dir = requireDir('./programs', {recurse: true});

const PORT = process.env.port || 8000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/aboutme', (req, res) => {
  res.sendFile(__dirname + '/public/aboutme.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/public/projects.html');
});

app.get('/programs/:program', (req,res) => {
  res.sendFile(__dirname + req.originalUrl);
});

app.use(express.static('public'));
app.use(express.static(__dirname + '/programs/'));

app.use('/programs', serveIndex(__dirname + '/programs/', {'icons': true}));

app.listen(PORT, () => {
  console.log('listening on port:' + PORT);
});
