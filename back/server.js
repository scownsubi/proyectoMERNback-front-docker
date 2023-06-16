const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')

// Base de datos
require('./src/database')

const usuarioRouter = require('./src/routes/router')

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors());
app.use(bodyParser.json());

app.use('/', usuarioRouter)

app.get('/', (req, res) => {
    res.send("Esta es mi primera aplicación mern - docker")
})

app.listen(3200, function () {
    console.log("Servidor activo...")
})