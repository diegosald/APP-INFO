const express = require('express') //llamamos a Express
const app = express()
const cors = require('cors')


//CONECTO LAS RUTAS

const rInfo = require('./router/rInfo')

var port = process.env.PORT || 8080// establecemos nuestro puerto



app.use(cors());
app.use(express.json());

//LE DIGO A LAS RUTAS DONDE SE VAN A VER

app.use('/info',rInfo);
app.use('/',express.static(__dirname + '/static'));
app.use(function(req, res) {
    res.status(404).send('PAGINA NO EXISTE 404');
  });


    

app.listen(port)
console.log('API escuchando en el puerto ' + port)