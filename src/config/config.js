const express = require('express');
const app = express();
const Authrouter = require('./../routes/authRouter');
const Usuariorouter = require('./../routes/usuarioRouter');
const bodyParser  = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

app.use(Authrouter);
app.use(Usuariorouter);



module.exports = app;