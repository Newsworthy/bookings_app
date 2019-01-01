const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const hbs = require('hbs');
const fs = require('fs');

// var {mongoose} = require('./db/mongoose');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

hbs.registerPartials(__dirname + '/../views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to server.log.');
		}
	});
	next();
});

app.use(express.static(__dirname + '/../public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

app.get('/', (req, res) => {
	res.render('main.hbs');
});

app.get('/create', (req, res) => {
  res.render('create.hbs');
});

app.get('/update', (req, res) => {
  res.render('update.hbs');
});

app.get('/delete', (req, res) => {
  res.render('delete.hbs');
});

app.all('*', function(req, res) {
  res.send('Error');
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
