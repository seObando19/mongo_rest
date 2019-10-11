const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json({
        'mensaje': 'Bienvenido al API de NodeJS + MongoDB + Rest'
    });
});
app.get('/productos', function(req, res) {
    res.json({
        'data': 'Aqui van los productos'
    });
});
app.get('/producto/:id', function(req, res) {
    res.json({
        'data': `Aqui recibi el ID para mostrar un producto. ID: ${req.param.id}`
    });
});
app.post('/producto', function(req, res) {
    let datos = req.body;
    if (datos.nombre == undefined || datos.marca == undefined || datos.color == undefined) {
        res.status(400).json({
            "err": "datos incompletos"
        });
    }
    res.json({
        'data': req.body
    });
});
mongoose.connect('mongodb://localhost:27017/tienda', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;
    console.log('Conectado a la DB');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`servidor online en el puerto ${port}`);
});