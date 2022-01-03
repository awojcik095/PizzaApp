const mongoose = require('mongoose');
const Pizza = require('./models/pizza');

mongoose.connect('mongodb://localhost:27017/pizzaApp')
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("Oh no error!")
        console.log(err)
    })

/*
const p = new Pizza({
    name: 'Hawajska',
    price: 29.99

})
p.save().then(p => {
    console.log(p)
})
    .catch(e => {
        console.log(e)
    })

    */

const Pizzas = [
    {
        id: 1,
        name: 'Hawajska',
        price: 29,

    },
    {
        id: 2,
        name: 'Margherita',
        price: 27,

    },
    {
        id: 5,
        name: 'Capricciosa',
        price: 32,

    },
    {
        id: 4,
        name: 'Napoli',
        price: 29,

    },
    {
        id: 6,
        name: 'Diablo',
        price: 25,

    },
    {
        id: 7,
        name: 'Cztery pory roku',
        price: 31,

    },
]

Pizza.insertMany(Pizzas)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

