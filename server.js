//inicializacion de modulos
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require('./backend/rutas');

//configuracion
mongoose.connect('mongodb://localhost/AppHeroku', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//carga de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

//const host=process.env.host || '0.0.0.0';
//const port = process.env.port || 3000;

//Iniciar el servidor
app.listen(3000);
console.log("Escuchando en el puerto 3000");