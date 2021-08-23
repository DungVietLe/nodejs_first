const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));
// Teamplate engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/news', (req, res) => {
    res.render('news')
});
console.log(__dirname, '\\resources\\views');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});