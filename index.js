const express = require('express') //llamamos a Express
const app = express()
const cors = require('cors')


//CONECTO LAS RUTAS
const cInfo = require('./controler/cInfo')

var port = process.env.PORT || 8080// establecemos nuestro puerto



app.use(cors())
app.use(express.json())


//LE DIGO A LAS RUTAS DONDE SE VAN A VER

app.use('/info',cInfo)
app.use('/', express.static(__dirname + '/static'));

app.listen(port)
console.log('API escuchando en el puerto ' + port)