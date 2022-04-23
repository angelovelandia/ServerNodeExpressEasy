'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const log = console.log;
const colors = require('colors');
const green = colors.green;
const app = express();

/* Use Json */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log("Suscribete :)");

/* Ruta estatica de los insumos */
app.use(express.static(__dirname + '/public'));

/* Levantando el servidor */
app.listen(8000, () => {
    log(green('Servidor ejecutandose en http://localhost:8000'));
});