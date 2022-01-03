const express = require('express');
const router = express.Router();
const Pizza = require('./models/pizza');

router.get('/pizza', (req, res) => {
    res.render('pizza')
})

router.get('/menu', async (req, res) => {
    const pizzas = await Pizza.find({})
    res.render('menu', { pizzas })
})

router.get('/onas', async (req, res) => {
    res.render('onas')
})


module.exports = router;