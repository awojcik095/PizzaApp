const mongoose = require('mongoose')

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    id: {
        type: Number,
    }
})


const Pizza = mongoose.model('Pizza', pizzaSchema);


module.exports = Pizza;