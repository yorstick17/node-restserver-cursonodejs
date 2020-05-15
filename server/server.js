require('./config/config');

const express = require('express');
const app = express();

//const bodyParser = require('body-parser');

//Utilizar esta opcion
//app.use(bodyParser.urlencoded({ extended: false }));
//Parser application/son
//app.use(bodyParser.json());

//O esta Opcion
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puertosss:', process.env.PORT);
});