const express = require('express');
const app = express();
const port = 5000;
const db = require('../database/index.js')
const controller = require('./controllers/controller.js')
const path = require('path');
const parser = require('body-parser')

app.use(express.static(path.join(__dirname, '../client/dist')))

//app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.get('/all', controller.getMovies);
app.post('/addMovie', controller.addMovie);

app.post('/addMovie', (req, res) => {
    console.log(req.body.watched)
});


app.listen(port, () => console.log(`yo dawg i am listening on port ${port}!`))