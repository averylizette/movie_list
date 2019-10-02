const express = require('express')
const app = express()
const path = require('path')
const port = 5000



app.use(express.static(path.join(__dirname, '../client/dist')));


//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))