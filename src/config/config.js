const express = require('express');
const app = express();
const router = require('./../routes/route');
const bodyParser  = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

app.use(router);



module.exports = app;