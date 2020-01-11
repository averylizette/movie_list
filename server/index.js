const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js')
const path = require('path');
const parser = require('body-parser')

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(parser.json())

//app.get('/YOURCODEHERE);
//app.post('/YOURCODEHERE);



app.listen(port, () => console.log(`yo dawg i am listening on port ${port}!`))