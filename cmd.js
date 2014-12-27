#!/usr/bin/env node

var http = require('http');
var concat = require('concat-stream');

var port = process.argv[2] || 2000;

process.stdin.pipe(concat(function(data) {
  http.createServer(function(req, res) {
    res.end(data);
  }).listen(port)
  console.error('listening on port ' + port);
}))
