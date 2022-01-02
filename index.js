const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require("passport-local");
const User = require("./models/user")
const mongoose = require('mongoose');
const Pizza = require('./models/pizza');
const { ADDRGETNETWORKPARAMS } = require('dns');
const session = require('express-session')
const flash = require('req-flash');
const cookieParser = require("cookie-parser");
const cart = require('./models/cart');



mongoose.connect('mongodb://localhost:27017/pizzaApp')
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("Oh no error!")
        console.log(err)
    })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(cookieParser());
app.use(session({ secret: '123', }));
app.use(flash());


/*
app.use((req, res, next) => {
    res.locals.success = req.flash('successMessage');
    res.locals.error = req.flash('errorMessage');
    next();
})
*/

app.get('/pizza', async (req, res) => {
    res.render('pizza')
})

app.get('/menu', async (req, res) => {
    const pizzas = await Pizza.find({})
    res.render('menu', { pizzas })
})

app.get('/onas', async (req, res) => {
    res.render('onas')
})

app.get('/dodaj-do-koszyka/:id', async (req, res) => {
    const productID = req.params.id;
    const pizzas = await Pizza.find({ id: productID });
    console.log(pizzas);

});

app.get('/usunProduktZKoszyka', function (req, res) {

});

app.get('/pokazSzczegolyKoszyka', function (req, res) {

});



app.get('/rejestracja', async (req, res) => {
    res.render('rejestracja')
})

app.post('/rejestracja', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        res.redirect('/zaloguj');
    } catch (e) {
        req.flash('errorMessage', "Użytkownik o takiej nazwie już istnieje!");
        console.log("BLAD!")
        console.log(e);
    }

});

app.get('/zaloguj', async (req, res) => {
    res.render('zaloguj')
})



app.post('/zaloguj', passport.authenticate('LocalStrategy', { failureFlash: true, failureRedirect: '/zaloguj' }), async (req, res) => {
    res.redirect('/pizza');
})


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})