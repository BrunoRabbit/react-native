const express = require('express');
const router = express.Router();

router.get('/', (rep,res,next) => {
    res.status(200).send({
        mensagem: 'Acessei a rota get pessoas',
    });
});
router.post('/', (rep,res,next) => {
    res.status(201).send({
        mensagem: 'Acessei a rota post pessoas',
    });
});
