const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

//view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(cors());
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`👍 👍  Server is running on port ${port}`);
});

module.exports = app;