const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');

const app = express();

//view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(cors());
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes go after all middleware
app.use('/', routes);

app.listen(3000, () => {
    console.log('👍 👍  It is working');
});

module.exports = app;