const express = require('express');
const app = express();
const pessoas = require('./routes/pessoas_routes.js');

app.use(pessoas);

app.use((req,res,next)=>{
    res.status(200).send({
        mensagem: 'Ok, deu certo a requisição!'
    });
});


module.exports = app;
