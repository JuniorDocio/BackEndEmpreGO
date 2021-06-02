const express = require('express');
const app = express();
const Authrouter = require('./../routes/authRouter');
const Usuariorouter = require('./../routes/usuarioRouter');
const Trabalhorouter = require('./../routes/trabalhoRouter');
const bodyParser  = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('uploads'));
app.use(Authrouter);
app.use(Trabalhorouter);
app.use(Usuariorouter);



module.exports = app;