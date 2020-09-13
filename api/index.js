require('dotenv').config()
var http = require("http");
var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
const db = require('./config/db.config.js');
app.use(cors())

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({  
  extended: true
}));

app.use('/', require('./routes/index'));

app.use((req, res, next)=>{
	res.status(404).send('<h1> Error 404: Page not found </h1>');
 });

var server = app.listen(process.env.PORT, function () {
  console.log("Server listening at port "+server.address().port);
});
