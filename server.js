'use strict';

const express = require('express');
const http = require('http');
const fs = require('fs').promises;

// App
const app = express();

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/iframes', (req, res) => {
	fs.readFile(__dirname + '/iframes.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/objects', (req, res) => {
	fs.readFile(__dirname + '/objects.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/frame-breaker', (req, res) => {
	fs.readFile(__dirname + '/frame-breaker.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/embed-frame-breaker', (req, res) => {
	fs.readFile(__dirname + '/embed_frame-breaker.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/bypass-frame-breaker', (req, res) => {
	fs.readFile(__dirname + '/bypass_frame-breaker.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/x-frame-options/allowed', (req, res) => {
	fs.readFile(__dirname + '/content.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/x-frame-options/sameorigin', (req, res) => {
	fs.readFile(__dirname + '/content.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.setHeader('X-Frame-Options', 'SAMEORIGIN');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/x-frame-options/deny', (req, res) => {
	fs.readFile(__dirname + '/content.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.setHeader('X-Frame-Options', 'DENY');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/frame-ancestors/allowed', (req, res) => {
	fs.readFile(__dirname + '/content.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/frame-ancestors/self', (req, res) => {
	fs.readFile(__dirname + '/content.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");
			res.writeHead(200);
			res.end(contents);
		});
});

app.get('/frame-ancestors/none', (req, res) => {
	fs.readFile(__dirname + '/content.html')
		.then(contents => {
			res.setHeader('Content-Type', 'text/html');
			res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");
			res.writeHead(200);
			res.end(contents);
		});
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});