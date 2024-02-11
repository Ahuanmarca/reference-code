const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.set('views', 'views');

app.use(flash());
app.use(session({ secret: 'c0sm0gat0', resave: false, saveUninitialized: false }));

app.get('/index', (req, res) => {
    res.render('index', {
        success: req.flash('success'),
        failure: req.flash('failure')
    });
});

app.post('/success', (req, res) => {
    req.flash("success", "Success");
    res.redirect('/index');
})

app.post('/failure', (req, res) => {
    req.flash("failure", "Failure");
    res.redirect('/index');
})

app.listen(8000, () => {
    console.log('Server on port 8000');
});
